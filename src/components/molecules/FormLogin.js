import {StyleSheet, Text} from 'react-native';
import React, {useState} from 'react';
import {color, font} from '../../helpers';
import {Button, Gap, Input} from '../atoms';

const FormLogin = ({onSubmit}) => {
  const [form, setForm] = useState({username: '', pass: ''});

  // Change text
  const changeText = (val, input) => {
    setForm({
      ...form,
      [input]: val,
    });
  };

  // Submit
  const submit = () => {
    onSubmit(form);
  };
  return (
    <>
      <Text style={styles.textLogin}>Masuk ke akun Akasia</Text>
      <Gap height={20} />
      <Input
        label="Username"
        value={form.username}
        iconLeft="account-outline"
        autoCapitalize="none"
        onChangeText={val => changeText(val, 'username')}
      />
      <Gap height={20} />
      <Input
        label="Password"
        autoCapitalize="none"
        secure={true}
        value={form.pass}
        iconLeft="lock-outline"
        onChangeText={val => changeText(val, 'pass')}
      />
      <Gap height={20} />
      <Button
        bgColor={color.secondary}
        textColor={color.white}
        onPress={() => submit()}>
        Login
      </Button>
    </>
  );
};

export default FormLogin;

const styles = StyleSheet.create({
  textLogin: {
    textAlign: 'center',
    fontFamily: font.semiBold,
    color: color.secondary,
    fontSize: 20,
  },
});
