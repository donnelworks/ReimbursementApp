import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  ToastAndroid,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Container} from '../components/atoms';
import {FormLogin} from '../components/molecules';
import axios from 'axios';
import {api, session} from '../helpers';

const Login = ({navigation}) => {
  // Login
  const handleLogin = data => {
    axios
      .get(`${api.baseurl}users`, {
        params: {
          username: data.username,
          password: data.pass,
        },
      })
      .then(res => {
        if (res.data.length) {
          session.set(res.data);
          navigation.replace('Approval');
        } else {
          ToastAndroid.show('User tidak ditemukan !', ToastAndroid.LONG);
        }
      });
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
