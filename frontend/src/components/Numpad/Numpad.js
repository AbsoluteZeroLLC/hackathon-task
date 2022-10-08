import DeleteButton from 'assets/svgs/DeleteButton';
import { noDot } from 'constants/regex';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const Numpad = ({ value, setValue }) => {
  const del = () => {
    setValue(value.slice(0, -1));
  };

  const addNext = v => {
    const next = value + v;
    // console.log(next, v);
    // if (noDot.test(next)) {
    setValue(next);
    // }
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => addNext('1')} style={styles.clm}>
          <Text style={styles.buttons}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => addNext('2')} style={styles.clm}>
          <Text style={styles.buttons}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => addNext('3')} style={styles.clm}>
          <Text style={styles.buttons}>3</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => addNext('4')} style={styles.clm}>
          <Text style={styles.buttons}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => addNext('5')} style={styles.clm}>
          <Text style={styles.buttons}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => addNext('6')} style={styles.clm}>
          <Text style={styles.buttons}>6</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => addNext('7')} style={styles.clm}>
          <Text style={styles.buttons}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => addNext('8')} style={styles.clm}>
          <Text style={styles.buttons}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => addNext('9')} style={styles.clm}>
          <Text style={styles.buttons}>9</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => addNext('.')} style={styles.clm}>
          <Text style={styles.buttons}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => addNext('0')} style={styles.clm}>
          <Text style={styles.buttons}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={del} style={styles.clm}>
          <DeleteButton />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Numpad;
