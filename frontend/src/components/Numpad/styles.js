import { TEXT_COLOR_LIGHT } from 'constants/colors';
import { FONT_BOLD } from 'constants/fonts';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-evenly',
  },
  buttons: {
    color: TEXT_COLOR_LIGHT,
    fontFamily: FONT_BOLD,
    fontSize: 28,
  },
  clm: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default styles;
