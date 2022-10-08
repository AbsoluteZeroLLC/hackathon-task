import { TEXT_COLOR_LIGHT } from 'constants/colors';
import { FONT_BOLD, FONT_REGULAR } from 'constants/fonts';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 278,
    padding: 24,
    justifyContent: 'space-between',
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
  },
  qrScanButton: {
    width: 48,
    height: 48,
    borderRadius: 90,
    backgroundColor: '#ffffff40',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    borderBottomRightRadius: 24,
    borderBottomLeftRadius: 24,
  },
  title: {
    color: TEXT_COLOR_LIGHT,
    fontSize: 24,
    fontFamily: FONT_BOLD,
  },
  totalBalance: {
    color: TEXT_COLOR_LIGHT,
    fontSize: 12,
    fontFamily: FONT_REGULAR,
  },
  balance: {
    color: TEXT_COLOR_LIGHT,
    fontSize: 48,
    fontFamily: FONT_BOLD,
  },
  currency: {
    color: TEXT_COLOR_LIGHT,
    fontSize: 24,
    fontFamily: FONT_BOLD,
    alignSelf: 'flex-end',
    marginLeft: 4,
    marginBottom: 8,
  },
  column: {
    flexDirection: 'row',
  },
});

export default styles;
