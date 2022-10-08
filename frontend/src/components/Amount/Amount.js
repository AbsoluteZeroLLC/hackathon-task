import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

const Amount = ({ value, title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title || 'Enter Amount in USD'}</Text>
      <Text style={styles.value}>
        {value || '0.00'}
        <Text style={styles.currency}>$</Text>
      </Text>
    </View>
  );
};

export default Amount;
