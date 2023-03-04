import {StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import {Container, List} from '../components/atoms';
import {HeaderApproval, ListApproval} from '../components/molecules';
import {api, color} from '../helpers';
import {useFocusEffect} from '@react-navigation/native';
import axios from 'axios';

const Approval = ({navigation}) => {
  const [search, setSearch] = useState('');
  const [employees, setEmployees] = useState([]);

  const data = employees.filter(o =>
    o.employeeName.toLowerCase().includes(search.toString().toLowerCase()),
  );

  // Init
  useFocusEffect(
    useCallback(() => {
      loadData();
    }, []),
  );

  const loadData = () => {
    axios.get(`${api.baseurl}employees`).then(res => {
      setEmployees(res?.data ?? []);
    });
  };

  const handleSearch = key => {
    setSearch(key);
  };

  const handleDetail = item => {
    navigation.navigate('Detail', item);
  };
  return (
    <Container>
      {/* Header */}
      <View style={styles.headerWrapper}>
        <HeaderApproval onSearch={key => handleSearch(key)} />
      </View>

      {/* List */}
      <ListApproval data={data} onPressList={item => handleDetail(item)} />
    </Container>
  );
};

export default Approval;

const styles = StyleSheet.create({
  headerWrapper: {
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
});
