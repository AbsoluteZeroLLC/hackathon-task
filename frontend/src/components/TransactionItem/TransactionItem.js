import CarIcon from 'assets/svgs/CarIcon';
import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

const TransactionItem = ({ transaction }) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <CarIcon />
      </View>
      <View style={styles.infoContainer}>
        <View>
          <Text style={styles.title}>{transaction?.title || 'None'}</Text>
          <Text style={styles.date}>
            {transaction?.date?.toDateString() || new Date().toDateString()}
          </Text>
        </View>
        <Text style={styles.amount}>{transaction?.amount || '0.00'} $</Text>
      </View>
    </View>
  );
};

export default TransactionItem;
