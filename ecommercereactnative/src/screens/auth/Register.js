import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import InputBox from '../../components/inputs/InputBox';

const Register = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titlePage}>Register</Text>
      <InputBox
      inputlabel={'Name'}
      placeholder={'Enter Username'}
      />
      <InputBox
      inputlabel={'Email'}
      placeholder={'Enter Email'}
      />
      <InputBox
      inputlabel={'PAssword'}
      placeholder={'Enter Password'}
      />
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  titlePage: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  }
});
