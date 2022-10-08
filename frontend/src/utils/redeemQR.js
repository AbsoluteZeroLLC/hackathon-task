import { Alert } from 'react-native';
import { openStrictPay } from './strictPay';

const redeemQR = qr => {
  console.log(qr);
  // check if qr matches the pattern
  const data = JSON.parse(qr);
  if (!data.transactionId || data.amount <= 0) {
    // do something with the data
    Alert.alert('Invalid QR code');
    return;
  }
  // open pay screen
  openStrictPay(data.transactionId, data.amount);
};

export default redeemQR;
