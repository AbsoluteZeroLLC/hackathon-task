import { BG_COLOR, LIGHT_BG_COLOR, TEXT_COLOR_LIGHT } from 'constants/colors';
import { FONT_REGULAR } from 'constants/fonts';

const { StyleSheet } = require('react-native');

const styles = StyleSheet.create({
  container: {
    backgroundColor: BG_COLOR,
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: LIGHT_BG_COLOR,
  },
  main: {
    flex: 1,
    backgroundColor: BG_COLOR,
    borderBottomRightRadius: 24,
    borderBottomLeftRadius: 24,
    overflow: 'hidden',
  },

  transactionsSectionLabelContainer: {
    backgroundColor: BG_COLOR,
  },
  transactionsSectionLabel: {
    color: TEXT_COLOR_LIGHT,
    fontSize: 14,
    fontFamily: FONT_REGULAR,
    opacity: 0.7,
    paddingVertical: 16,
    paddingHorizontal: 24,
  },

  transactionContainer: {},
});

export default styles;
