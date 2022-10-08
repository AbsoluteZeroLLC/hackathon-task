import { LIGHT_BG_COLOR, PRIMARY_COLOR } from 'constants/colors';

const { StyleSheet } = require('react-native');

const styles = StyleSheet.create({
  container: {
    backgroundColor: LIGHT_BG_COLOR,
  },
  tab: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  btn: {
    padding: 24,
    paddingBottom: 8,
  },
  mainButton: {
    backgroundColor: PRIMARY_COLOR,
    borderRadius: 90,
    width: 78,
    height: 78,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: -24,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});

export default styles;
