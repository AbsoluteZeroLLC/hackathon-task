import QrButton from 'assets/svgs/QrButtonIcon';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { ImageBackground, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styles from './styles';

const MyWallet = ({ onQrScanPress, balance }) => {
  const insets = useSafeAreaInsets();
  return (
    <ImageBackground
      source={require('assets/imgs/bg.png')}
      imageStyle={styles.image}
      style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.topContainer}>
        <Text style={styles.title}>My Wallet</Text>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.qrScanButton}
          onPress={onQrScanPress}>
          <QrButton />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.totalBalance}>Total balance</Text>
        <View style={styles.column}>
          <Text style={styles.balance}>{balance}</Text>
          <Text style={styles.currency}>$</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default MyWallet;
