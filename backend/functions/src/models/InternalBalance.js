const { firestore } = require('firebase-admin')

class InternalBalance {
  constructor(uid) {
    this.ref = firestore().collection('InternalBalance').doc(uid);
    this.exists = false;
    this.balance = 0;
    this.uid = uid;
    this.transactions = [];
  }

  async get() {
    const res = await this.ref.get();
    this.exists = res.exists;
    const data = res.exists ? res.data().data : null;
    if (data) {
      this.balance = data.balance || 0;
      this.transactions = data.transaction || []
    }
    return this;
  }

  async update() {
    if (!this.exists && this.data) {
      return this.ref.set({
        balance: this.balance,
        data: this.data,
        transactions: [],
      });
    } else {
      return this.ref.update({
        balance: this.balance,
        data: this.data,
        transactions: this.transactions,
      });
    }
  }

  async addToBalance(amount = 0) {
    return this.ref.update({
      balance: FirebaseFirestore.FieldValue.increment(-amount),
    });
  }

  async removeFromBalance(amount = 0) {
    return this.ref.update({
      balance: FirebaseFirestore.FieldValue.increment(amount),
    });
  }

  /**
   * submittedAt must be an UTC string
   * @param {{
   *  description: {string},
   *  iso: {string},
   *  amount: {number},
   *  submittedAt: {string}
   * }} transaction 
   * @returns 
   */
  async addToHistory(transaction) {
    return this.ref.update({
      transactions: FirebaseFirestore.FieldValue.arrayUnion(transaction)
    });
  }
}

exports.InternalBalance = InternalBalance;
