/* eslint-disable react-native/no-inline-styles */
import HomeIcon from 'assets/svgs/HomeIcon';
import MenuIcon from 'assets/svgs/MenuIcon';
import MoneyReceiveIcon from 'assets/svgs/MoneyReceiveIcon';
import MoneySendIcon from 'assets/svgs/MoneySendIcon';
import WalletIcon from 'assets/svgs/WalletIcon';
import functions from 'functions';
import React from 'react';
import { Alert, TouchableOpacity } from 'react-native';
import { View } from 'react-native';
import { openAmountModal } from 'utils/amountModal';
import { startLoading, stopLoading } from 'utils/loader';
import { navigate } from 'utils/navigation';
import styles from './styles';

/**
 * @param {import('@react-navigation/bottom-tabs').BottomTabBarProps} props
 */
const BottomNavigation = props => {
  const createQrCode = async () => {
    openAmountModal(
      async amount => {
        startLoading();
        if (parseFloat(amount) < 0 || isNaN(amount)) {
          return;
        }
        try {
          const res = await functions.httpsCallable(
            'createInternalQRTransactionRequest',
          )({
            amount: parseFloat(amount),
            expiresInMilliseconds: 60 * 5 * 1000,
          });
          if (!res.data.result) {
            if (res.data.message) {
              Alert.alert('Error', res.data.message);
            }
            return;
          }
          if (!res.data.data) {
            Alert.alert('Error', 'Something went wrong');
            return;
          }
          navigate('Receive', { data: res.data.data });
        } catch (err) {
          console.warn(err);
        } finally {
          stopLoading();
        }
      },
      { title: 'Request Funds' },
    );
  };

  return (
    <View style={[styles.container, { paddingBottom: props.insets.bottom }]}>
      <View style={styles.tab}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.btn}
          onPress={() => navigate('Home')}>
          <HomeIcon />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.btn}
          onPress={() => navigate('Home')}>
          <WalletIcon />
        </TouchableOpacity>
        <View style={{ width: 78 }}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.mainButton}
            onPress={() => {}}>
            <MoneySendIcon />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.btn}
          onPress={createQrCode}>
          <MoneyReceiveIcon />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.btn}
          onPress={() => navigate('Home')}>
          <MenuIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BottomNavigation;
