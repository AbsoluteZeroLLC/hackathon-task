import { PRIMARY_COLOR, TEXT_COLOR_LIGHT } from 'constants/colors';
import { FONT_REGULAR } from 'constants/fonts';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  primary: {
    backgroundColor: PRIMARY_COLOR,
    padding: 16,
    paddingHorizontal: 40,
    borderRadius: 66,
  },
  secondary: {
    padding: 16,
    paddingHorizontal: 40,
    borderRadius: 66,
  },

  primaryLabel: {
    color: TEXT_COLOR_LIGHT,
    fontFamily: FONT_REGULAR,
    fontSize: 14,
  },
  secondaryLabel: {
    color: TEXT_COLOR_LIGHT,
    fontFamily: FONT_REGULAR,
    fontSize: 14,
  },
});

const CustomButton = ({ label, onPress, primary }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={primary ? styles.primary : styles.secondary}
      onPress={onPress}>
      <Text style={primary ? styles.primaryLabel : styles.secondaryLabel}>
        {label || 'Click me!'}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
