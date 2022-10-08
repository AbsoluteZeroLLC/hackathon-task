const { default: references } = require('./references');

export const saveStrictPayRef = ref => {
  references.strickPay = ref;
};

export const openStrictPay = (transactionId, amount) => {
  references.strickPay.open(transactionId, amount);
};
