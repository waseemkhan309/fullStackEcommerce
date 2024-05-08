import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';

const InputBox = ({
  autoComplete,
  keyboardType,
  secureTextEntry = false,
  placeholder,
  inputlabel,
}) => {
  return (
    <View style={{marginHorizontal: 20}}>
      <Text style={{marginBottom:5}}>{inputlabel}</Text>
      <TextInput
        style={styles.inputBox}
        autoComplete={autoComplete}
        keyboardType={keyboardType}
        autoCorrect={false}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
      />
    </View>
  );
};

export default InputBox;

const styles = StyleSheet.create({
  inputBox: {
    height: 40,
    backgroundColor: '#ffffff',
    marginBottom: 20,
    borderRadius: 10,
    marginTop: 10,
    paddingLeft: 10,
  },
});
