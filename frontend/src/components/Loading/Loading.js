import { PRIMARY_COLOR } from 'constants/colors';
import React from 'react';
import { View } from 'react-native';
import Spinner from 'react-native-spinkit';

const LoadingFC = () => {
  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: '#4d6aaa40',
      }}>
      <Spinner
        isVisible={true}
        color={PRIMARY_COLOR}
        size={48}
        type={'WanderingCubes'}
      />
    </View>
  );
};

class Loading extends React.Component {
  state = {
    loading: false,
  };

  startLoading() {
    // this.setState({ loading: true });
  }

  stopLoading() {
    this.setState({ loading: false });
  }

  render() {
    return this.state.loading && <LoadingFC />;
  }
}

export default Loading;
