import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Home = () => {
  return (
    <View style={{height: 90, backgroundColor: '#d6bc76'}}>
      <View>
        <TextInput />
        <TouchableOpacity>
          <FontAwesome name="search" style={{fontSize: 20}} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
