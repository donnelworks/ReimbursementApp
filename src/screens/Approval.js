import {StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import {Container, List, Segment} from '../components/atoms';
import {HeaderApproval, ListApproval} from '../components/molecules';
import {api, color} from '../helpers';
import {useFocusEffect} from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Approval = ({navigation}) => {
  // const [search, setSearch] = useState('');
  const [employees, setEmployees] = useState([]);
  const [category, setCategory] = useState('medical');

  // const data = employees.filter(o =>
  //   o.employeeName.toLowerCase().includes(search.toString().toLowerCase()),
  // );

  // Init
  useFocusEffect(
    useCallback(() => {
      loadData();
    }, [category]),
  );

  const loadData = () => {
    axios
      .get(`${api.baseurl}employees`, {
        params: {
          category,
        },
      })
      .then(res => {
        setEmployees(res?.data ?? []);
      });
  };

  const handleSearch = key => {
    // setSearch(key);
    if (key) {
      const data = employees.filter(o =>
        o.employeeName.toLowerCase().includes(key.toString().toLowerCase()),
      );
      setEmployees(data);
    } else {
      loadData();
    }
  };

  const handleSort = () => {
    const sortData = [...employees].sort((a, b) => {
      return a.employeeName > b.employeeName ? 1 : -1;
    });
    setEmployees(sortData);
  };

  const handleCategory = val => {
    setCategory(val);
  };

  const handleDetail = item => {
    navigation.navigate('Detail', item);
  };

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('@user');
      navigation.reset({
        index: 0,
        routes: [{name: 'Login'}],
      });
    } catch (err) {}
  };
  return (
    <Container>
      {/* Header */}
      <View style={styles.headerWrapper}>
        <HeaderApproval
          onSearch={key => handleSearch(key)}
          onLogout={() => handleLogout()}
        />
      </View>

      {/* Category */}
      <View style={styles.categoryWrapper}>
        <Segment
          onSort={() => handleSort()}
          selectedValue={category}
          onChangeValue={val => handleCategory(val)}
          dataSegment={[
            {label: 'Medical', value: 'medical'},
            {label: 'Optical', value: 'optical'},
            {label: 'Transport', value: 'transport'},
            {label: 'Dental', value: 'dental'},
          ]}
        />
      </View>

      {/* List */}
      <ListApproval data={employees} onPressList={item => handleDetail(item)} />
    </Container>
  );
};

export default Approval;

const styles = StyleSheet.create({
  headerWrapper: {
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  categoryWrapper: {
    marginBottom: 10,
  },
});
