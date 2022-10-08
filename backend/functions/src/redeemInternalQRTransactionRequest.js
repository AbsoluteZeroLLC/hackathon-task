const { func } = require('./func');
const { InternalBalance } = require('./models/InternalBalance');
const { InternalQRTransactionRequest } = require('./models/InternalQRTransactionRequest');


exports.redeemInternalQRTransactionRequest = func.https.onCall(async (data, context) => {
  if (!context.auth) {
    return {
      result: false,
      message: 'Authorization required!'
    }
  }

  const uid = context.auth.uid;
  const qrResult = data.qrResult;

  const req = new InternalQRTransactionRequest(qrResult);
  await req.get();
  if (!req.exists) {
    return {
      result: false,
      message: 'The code is invalid!'
    }
  }

  const taker = new InternalBalance(req.data.creatorId);
  const giver = new InternalBalance(uid);
  // first check if giver has enough
  await giver.get()
  if (giver.balance < req.data.amount) {
    return {
      result: false,
      message: 'Insufficient funds!'
    }
  }

  await taker.get();
  if (!taker.exists) {
    return {
      result: false,
      message: 'Invalid target user!'
    }
  }

  const step1 = await giver.removeFromBalance(req.data.amount);
  if (!step1) {
    return {
      result: false,
      message: "Something went wrong, internal code 100"
    }
  }

  const step2 = await taker.addToBalance(req.data.amount);
  if (!step2) {
    // TODO: give back money to sender
    return {
      result: false,
      message: "Something went wrong, internal code 200"
    }
  }

  return {
    result: false,
    message: 'The transaction was successful'
  }
})