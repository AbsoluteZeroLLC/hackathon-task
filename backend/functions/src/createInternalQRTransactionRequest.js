const { func } = require('./func');
const { InternalQRTransactionRequest } = require('./models/InternalQRTransactionRequest');


exports.createInternalQRTransactionRequest = func.https.onCall(async (data, context) => {
  if (!context.auth) {
    return {
      result: false,
      message: 'Authorization required!'
    }
  }

  const amount = data.amount;
  const uid = context.auth.uid;
  const expiresInMilliseconds = data.expiresInMilliseconds || (60 * 5 * 1000);
  const singlePayment = true;
  const result = await InternalQRTransactionRequest.create(amount, uid, expiresInMilliseconds, singlePayment, 1);

  if (result) {
    return {
      result: true,
      data: result,
      message: 'Great success!'
    }
  } else {
    return {
      return: false,
      message: 'Something went wrong!'
    }
  }
})