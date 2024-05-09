import {View, Text} from 'react-native';
import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
const Layout = ({children}) => {
  return (
    <>
      <Header />
      <View>
        <Text>{children}</Text>
      </View>
      <Footer />
    </>
  );
};

export default Layout;
