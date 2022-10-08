import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Amount from 'components/Amount';
import QRCode from 'react-qr-code';
import { TouchableOpacity } from 'react-native';
import ShareIcon from 'assets/svgs/ShareIcon';
import CopyIcon from 'assets/svgs/CopyIcon';
import SaveIcon from 'assets/svgs/SaveIcon';
import CustomButton from 'components/CustomButton/CustomButton';

const Receive = ({ navigation, route }) => {
  const insets = useSafeAreaInsets();
  const insetsStyle = { paddingTop: insets.top, paddingBottom: insets.bottom };

  const Button = ({ children }) => {
    return (
      <TouchableOpacity activeOpacity={0.7} style={styles.btn}>
        {children}
      </TouchableOpacity>
    );
  };
  // აქ უნდა იყოს QR კოდის სქრინი
  return (
    <View style={[insetsStyle, styles.container]}>
      <Amount value={parseFloat(route?.params?.data?.amount || 0).toFixed(2)} />
      <View style={styles.main}>
        <QRCode value={JSON.stringify(route?.params?.data)} />
        <View style={styles.row}>
          <Button>{<ShareIcon />}</Button>
          <Button>{<CopyIcon />}</Button>
          <Button>{<SaveIcon />}</Button>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <CustomButton label={'Back'} onPress={navigation.goBack} />
      </View>
    </View>
  );
};

export default Receive;
