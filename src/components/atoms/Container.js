import React from 'react';
import {SafeAreaView} from 'react-native';
import {color} from '../../helpers';

const Container = ({bgColor, children}) => {
  const containerStyle = {
    flex: 1,
    backgroundColor: bgColor ? bgColor : color.white,
  };

  return <SafeAreaView style={containerStyle}>{children}</SafeAreaView>;
};

export default Container;
