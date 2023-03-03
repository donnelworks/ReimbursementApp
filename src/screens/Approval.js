import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Container, List} from '../components/atoms';
import {HeaderApproval, ListApproval} from '../components/molecules';
import {color} from '../helpers';
import {getData} from '../data';

const Approval = ({navigation}) => {
  const [search, setSearch] = useState('');
  const [employees, setEmployees] = useState([]);

  const data = employees.filter(o =>
    o.employeeName.toLowerCase().includes(search.toString().toLowerCase()),
  );

  // Init
  useEffect(() => {
    loadData();
  }, [search]);

  const loadData = () => {
    setEmployees(getData());
  };

  const handleSearch = key => {
    setSearch(key);
  };
  return (
    <Container>
      {/* Header */}
      <View style={styles.headerWrapper}>
        <HeaderApproval onSearch={key => handleSearch(key)} />
      </View>

      {/* List */}
      <ListApproval
        data={data}
        onPressList={({item}) => navigation.navigate('Detail', {item})}
      />
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
