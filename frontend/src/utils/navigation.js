const { default: references } = require('./references');

export const saveNavRef = ref => {
  references.navigation = ref;
};

export const navigate = (routeName, params) => {
  references.navigation.navigate(routeName, params);
};
