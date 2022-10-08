import { TEXT_COLOR_LIGHT } from 'constants/colors';
import { FONT_REGULAR } from 'constants/fonts';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginHorizontal: 24,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 90,
    backgroundColor: '#FFFFFF40',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: TEXT_COLOR_LIGHT,
    fontSize: 14,
    fontFamily: FONT_REGULAR,
  },
  date: {
    color: TEXT_COLOR_LIGHT,
    fontSize: 11,
    fontFamily: FONT_REGULAR,
    opacity: 0.6,
  },
  amount: {
    color: TEXT_COLOR_LIGHT,
    fontSize: 16,
    fontFamily: FONT_REGULAR,
  },
});

export default styles;
