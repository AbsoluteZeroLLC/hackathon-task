import MyWallet from 'components/MyWallet';
import React, { useEffect, useState } from 'react';
import { View, SectionList, Text, Alert } from 'react-native';
import styles from './styles';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import TransactionItem from 'components/TransactionItem';
import takeQR from 'utils/takeQR';
import { startLoading, stopLoading } from 'utils/loader';
import redeemQR from 'utils/redeemQR';

const Home = () => {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    let isMounted = true;
    const unsubscribe = firestore()
      .doc('InternalBalance/' + auth().currentUser.uid)
      .onSnapshot({
        error: e => console.error(e),
        next: documentSnapshot => {
          if (isMounted) {
            setBalance(documentSnapshot.data()?.balance);
          }
        },
      });
    return () => {
      unsubscribe();
    };
  }, []);

  const scanAndPay = () => {
    takeQR()
      .then(result => {
        stopLoading();
        redeemQR(result);
      })
      .catch(() => {
        stopLoading();
      });
  };

  return (
    <View style={styles.container}>
      <MyWallet
        onQrScanPress={scanAndPay}
        balance={(balance || 0)?.toFixed(2)}
      />
      <View style={styles.mainContainer}>
        <View style={styles.main}>
          <SectionList
            data={{}}
            keyExtractor={item => item.id.toString()}
            renderSectionHeader={({ section: { title } }) => (
              <View style={styles.transactionsSectionLabelContainer}>
                <Text style={styles.transactionsSectionLabel}>{title}</Text>
              </View>
            )}
            sections={[
              {
                title: 'Latest Transactions',
                data: [
                  {
                    id: '1',
                    title: 'Transaction #1',
                    date: new Date(),
                    amount: '20.00',
                  },
                  {
                    id: '2',
                    title: 'Transaction #2',
                    date: new Date(),
                    amount: '20.00',
                  },
                  {
                    id: '3',
                    title: 'Transaction #3',
                    date: new Date(),
                    amount: '20.00',
                  },
                  {
                    id: '4',
                    title: 'Transaction #4',
                    date: new Date(),
                    amount: '20.00',
                  },
                  {
                    id: '5',
                    title: 'Transaction #5',
                    date: new Date(),
                    amount: '20.00',
                  },
                  {
                    id: '6',
                    title: 'Transaction #6',
                    date: new Date(),
                    amount: '20.00',
                  },
                  {
                    id: '7',
                    title: 'Transaction #7',
                    date: new Date(),
                    amount: '20.00',
                  },
                  {
                    id: '8',
                    title: 'Transaction #8',
                    date: new Date(),
                    amount: '20.00',
                  },
                  {
                    id: '9',
                    title: 'Transaction #9',
                    date: new Date(),
                    amount: '20.00',
                  },
                ],
              },
            ]}
            renderItem={({ item }) => <TransactionItem transaction={item} />}
          />
        </View>
      </View>
    </View>
  );
};

export default Home;
