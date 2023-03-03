import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Gap, Search} from '../atoms';
import {color, font} from '../../helpers';

const HeaderApproval = ({onSearch}) => {
  return (
    <>
      <Gap height={10} />
      <Text style={styles.textTitle}>Approval List</Text>
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
});
