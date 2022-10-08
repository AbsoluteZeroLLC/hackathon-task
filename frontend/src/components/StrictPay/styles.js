import { BG_COLOR, TEXT_COLOR_LIGHT } from 'constants/colors';
import { FONT_REGULAR } from 'constants/fonts';

const { StyleSheet } = require('react-native');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BG_COLOR,
    paddingVertical: 44,
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  info: {
    color: TEXT_COLOR_LIGHT,
    fontSize: 16,
    fontFamily: FONT_REGULAR,
  },
  bottomContainer: {
    padding: 24,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  currency: {
    fontSize: 24,
    fontFamily: FONT_REGULAR,
    color: TEXT_COLOR_LIGHT,
    marginBottom: 8,
    marginLeft: 4,
  },
  amount: {
    fontSize: 48,
    fontFamily: FONT_REGULAR,
    color: TEXT_COLOR_LIGHT,
  },
});

export default styles;
