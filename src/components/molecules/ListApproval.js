import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {List} from '../atoms';
import {color, func} from '../../helpers';

const ListApproval = ({data, onPressList}) => {
  return (
    <>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <List
            onPress={() => onPressList(item)}
            container={true}
            iconLeft="note-text-outline"
            title={`${item.employeeName} (${item.employeeNumber})`}
            firstDesc={`${func.tgl(item.claimDate)}`}
            secondDesc={`${
              item.status == 0
                ? 'On-Progress'
                : item.status == 1
                ? 'Approved'
                : 'Rejected'
            }`}
            accent={color.primary}
          />
        )}
        keyExtractor={item => item.id}
      />
    </>
  );
};

export default ListApproval;

const styles = StyleSheet.create({});
