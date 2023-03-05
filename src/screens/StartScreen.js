import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {Container} from '../components/atoms';
import {session} from '../helpers';

const StartScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      getSession();
    }, 2000);
  }, []);

  // Cek Session
  const getSession = () => {
    session
      .get()
      .then(user => {
        if (user) {
          navigation.replace('Approval');
        } else {
          navigation.replace('Login');
        }
      })
      .catch(e => {});
  };
  return (
    <Container centered>
      <Image
        source={require('../assets/imgs/akasia-logo.png')}
        resizeMode="contain"
        style={{width: 200}}
      />
    </Container>
  );
};

export default StartScreen;

const styles = StyleSheet.create({});
