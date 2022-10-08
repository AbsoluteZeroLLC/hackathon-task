const { firestore } = require('firebase-admin')
const { makeid } = require('../helpers/makeid')

class InternalQRTransactionRequest {
  constructor(transactionId) {
    this.ref = firestore().collection('QRTransactionRequest').doc(transactionId);
    this.exists = false;
    this.data = {
      transactionId,
      creatorId: '',
      amount: 0,
      createdAt: '',
      timeoutAfter: 60 * 5 * 1000,
      expiresAfter: '',
      limitations: {
        singlePayment: false,
        limitAmount: 1,
      },
    }
  }

  async get() {
    const res = await this.ref.get();
    this.exists = res.exists;
    this.data = res.exists ? res.data() : null;
    return this;
  }

  async update() {
    if (!this.exists && this.data) {
      return this.ref.set(this.data);
    } else {
      return this.ref.update(this.data);
    }
  }

  static async create(amount, creatorId, expiresInMilliseconds, singlePayment, limitAmount) {
    const transactionId = await makeid(8, 'QRTransactionRequest');
    const req = new InternalQRTransactionRequest(transactionId);
    req.data = {
      amount,
      creatorId,
      createdAt: new Date().toUTCString(),
      expiresAfter: expiresInMilliseconds,
      timeoutAfter: new Date(Date.now() + expiresInMilliseconds).toUTCString(),
      transactionId,
      limitations: {
        singlePayment,
        limitAmount,
      }
    };
    const res = await req.update();
    if (res) {
      return {
        transactionId,
        amount,
      };
    } else {
      return null;
    }
  }
}

exports.InternalQRTransactionRequest = InternalQRTransactionRequest;