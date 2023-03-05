import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Gap, Search} from '../atoms';
import {color, font} from '../../helpers';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const HeaderApproval = ({onSearch, onLogout}) => {
  return (
    <>
      <Gap height={10} />
      <View style={styles.titleWrapper}>
        <Text style={styles.textTitle}>Approval List</Text>
        <Pressable style={styles.logoutWrapper} onPress={() => onLogout()}>
          <Text style={styles.textLogout}>Logout</Text>
          <Icon name="logout" size={23} color={color.secondary} />
        </Pressable>
      </View>
      <Gap height={10} />
      <Search onSearch={key => onSearch(key)} placeholder="Search Employee" />
      <Gap height={10} />
    </>
  );
};

export default HeaderApproval;

const styles = StyleSheet.create({
  textTitle: {
    fontFamily: font.bold,
    fontSize: 20,
    color: color.secondary,
  },
  titleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoutWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textLogout: {
    fontFamily: font.semiBold,
    fontSize: 16,
    marginRight: 5,
    color: color.secondary,
  },
});
