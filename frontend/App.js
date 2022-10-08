import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { saveNavRef } from 'utils/navigation';
import AppNavigation from 'navigation/AppNavigation';
import 'react-native-gesture-handler';
import AmountInputModal from 'components/AmountInputModal';
import { saveAmountModalRef } from 'utils/amountModal';
import { useEffect } from 'react';
import auth from '@react-native-firebase/auth';
import Loading from 'components/Loading/Loading';
import { saveLoaderRef } from 'utils/loader';
import StrictPay from 'components/StrictPay';
import { saveStrictPayRef } from 'utils/strictPay';

export default function App() {
  useEffect(() => {
    if (!auth().currentUser) {
      auth()
        .signInAnonymously()
        .then(res => {
          console.log(res.user.uid);
        });
    }
  }, []);

  return (
    <>
      <StatusBar barStyle="light-content" />
      <NavigationContainer ref={saveNavRef}>
        <AppNavigation />
      </NavigationContainer>
      <AmountInputModal ref={saveAmountModalRef} />
      <Loading ref={saveLoaderRef} />
      <StrictPay ref={saveStrictPayRef} />
    </>
  );
}
