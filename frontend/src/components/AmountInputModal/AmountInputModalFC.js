/* eslint-disable react-native/no-inline-styles */
import Amount from 'components/Amount/Amount';
import CustomButton from 'components/CustomButton/CustomButton';
import Numpad from 'components/Numpad';
import React, { useState } from 'react';
import { Modal, Text, View } from 'react-native';
import styles from './styles';

const AmountInputModalFC = ({ visible, onSubmit, onRequestClose, options }) => {
  const insetsStyle = { paddingTop: 44, paddingBottom: 44 };
  const [amount, setAmount] = useState('');
  return (
    <Modal
      animationType="slide"
      transparent={true}
      onRequestClose={onRequestClose}
      visible={visible}>
      <View style={[insetsStyle, styles.container]}>
        <View style={{ flex: 1 }}>
          <View style={styles.textWrapper}>
            <Text style={styles.text}>{options?.title || '-'}</Text>
          </View>
          <Amount value={amount} />
        </View>
        <View style={{ flex: 1, paddingHorizontal: 24 }}>
          <Numpad value={amount} setValue={setAmount} />
        </View>
        <View style={styles.bottomButtonsContainer}>
          <CustomButton
            label={'Cancel'}
            onPress={onRequestClose}
            primary={false}
          />
          <CustomButton
            label={'Continue'}
            onPress={() => {
              onSubmit(amount);
              onRequestClose();
            }}
            primary={true}
          />
        </View>
      </View>
    </Modal>
  );
};

export default AmountInputModalFC;
