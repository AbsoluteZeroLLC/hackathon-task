import { FONT_REGULAR } from 'constants/fonts';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 90,
  },
  title: {
    color: '#FFFFFF',
    opacity: 0.7,
    fontFamily: FONT_REGULAR,
    fontSize: 14,
    textAlign: 'center',
  },
  value: {
    color: '#FFFFFF',
    opacity: 0.7,
    fontFamily: FONT_REGULAR,
    textAlign: 'center',
    marginTop: 15,
    fontSize: 48,
  },
});

export default styles;
