import React from 'react';
import {SafeAreaView, Image, StyleSheet} from 'react-native';

import logo from '../assets/logo.png';

export default function Main() {
  return (
    <SafeAreaView>
      <Image source={logo} />
    </SafeAreaView>
  );
}
