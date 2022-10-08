import CustomButton from 'components/CustomButton/CustomButton';
import functions from 'functions';
import React, { Component } from 'react';
import { Alert, Modal, Text, View } from 'react-native';
import { startLoading, stopLoading } from 'utils/loader';
import styles from './styles';

const StrictPayFC = ({ amount, transactionId, onRequestClose }) => {
  const Transfer = async () => {
    try {
      startLoading();
      const res = await functions.httpsCallable(
        'redeemInternalQRTransactionRequest',
      )({
        qrResult: transactionId,
      });
      Alert.alert('Result', res.data.message);
      if (res.data.result) {
        onRequestClose();
      }
    } catch (err) {
      stopLoading();
    }
  };

  return (
    <Modal onRequestClose={onRequestClose} animationType={'slide'}>
      <View style={styles.container}>
        <View style={styles.main}>
          <Text style={styles.info}>You are about to transfer</Text>
          <Text style={styles.amount}>
            {parseFloat(amount || 0).toFixed(2)}
            <Text style={styles.currency}>$</Text>
          </Text>
        </View>
        <View style={styles.bottomContainer}>
          <CustomButton label={'Cancel'} onPress={onRequestClose} />
          <CustomButton label={'Pay'} onPress={Transfer} primary={true} />
        </View>
      </View>
    </Modal>
  );
};

class StrictPay extends Component {
  state = {
    visible: false,
    amount: 0,
    transactionId: '',
  };

  open(transactionId, amount) {
    this.setState({
      visible: true,
      transactionId,
      amount,
    });
  }

  render() {
    return (
      this.state.visible && (
        <StrictPayFC
          {...this.state}
          onRequestClose={() => {
            this.setState({ visible: false });
          }}
        />
      )
    );
  }
}

export default StrictPay;
