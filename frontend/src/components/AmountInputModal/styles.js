import { BG_COLOR, TEXT_COLOR_LIGHT } from 'constants/colors';
import { FONT_BOLD } from 'constants/fonts';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BG_COLOR,
  },
  textWrapper: {
    marginTop: 20,
  },
  text: {
    textAlign: 'center',
    color: TEXT_COLOR_LIGHT,
    fontFamily: FONT_BOLD,
    fontSize: 24,
  },
  bottomButtonsContainer: {
    marginTop: 24,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 24,
  },
});

export default styles;
