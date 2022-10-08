const { default: references } = require('./references');

export const saveAmountModalRef = ref => {
  references.amountModal = ref;
};

export const openAmountModal = (onSubmit, options) => {
  references.amountModal.open(onSubmit, options);
};
