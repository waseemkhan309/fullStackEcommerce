import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Layout from '../components/Layout/Layout';
import Icon from 'react-native-vector-icons/FontAwesome';

const Home = () => {
  return (
    <Layout>
      <View>
        <Text>Home</Text>
        <TouchableOpacity>
          <Icon name="search"  style={{fontSize:40}}/>
        </TouchableOpacity>
      </View>
    </Layout>
  );
};

export default Home;
