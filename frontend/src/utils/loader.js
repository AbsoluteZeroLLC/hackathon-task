const { default: references } = require('./references');

export const saveLoaderRef = ref => {
  references.loader = ref;
};

export const startLoading = () => {
  references.loader.startLoading();
};

export const stopLoading = () => {
  references.loader.stopLoading();
};
