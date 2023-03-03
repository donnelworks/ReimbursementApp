import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Container} from '../components/atoms';
import {FormLogin} from '../components/molecules';

const Login = ({navigation}) => {
  // Login
  const handleLogin = data => {
    navigation.navigate('Approval');
  };
  return (
    <Container>
      <ScrollView keyboardShouldPersistTaps="handled">
        {/* Logo image */}
        <View style={styles.logoWrapper}>
          <Image
            source={require('../assets/imgs/akasia-logo.png')}
            resizeMode="contain"
            style={{width: 200}}
          />
        </View>

        {/* Form login */}
        <View style={styles.formWrapper}>
          <FormLogin onSubmit={data => handleLogin(data)} />
        </View>
      </ScrollView>
    </Container>
  );
};

export default Login;

const styles = StyleSheet.create({
  logoWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
  },
  formWrapper: {
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
});
