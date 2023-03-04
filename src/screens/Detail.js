import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {Button, Container, Gap} from '../components/atoms';
import {api, color, font, func} from '../helpers';
import axios from 'axios';

const Detail = ({navigation, route}) => {
  const onUpdate = (id, status) => {
    axios
      .patch(`${api.baseurl}employees/${id}`, {
        status: status,
      })
      .then(res => {
        navigation.goBack();
      });
  };
  const {
    id,
    employeeName,
    employeeNumber,
    claimDate,
    category,
    amount,
    desc,
    status,
  } = route.params;
  return (
    <Container>
      <ScrollView keyboardShouldPersistTaps="handled">
        {/* Header */}
        <View style={styles.headerWrapper}>
          <Text style={styles.textHeaderDetail}>#{employeeNumber}</Text>
          <Text style={styles.textHeaderDetail}>{employeeName}</Text>
        </View>
        <Gap height={10} />
        {/* Detail */}
        <View style={styles.detailWrapper}>
          <View style={styles.detailItem}>
            <Text style={[styles.textDetailItem, {fontFamily: font.bold}]}>
              Claim Date:
            </Text>
            <Text style={[styles.textDetailItem, {fontFamily: font.medium}]}>
              {func.tgl(claimDate)}
            </Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={[styles.textDetailItem, {fontFamily: font.bold}]}>
              Category:
            </Text>
            <Text style={[styles.textDetailItem, {fontFamily: font.medium}]}>
              {category}
            </Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={[styles.textDetailItem, {fontFamily: font.bold}]}>
              Amount:
            </Text>
            <Text style={[styles.textDetailItem, {fontFamily: font.medium}]}>
              Rp{func.number(amount)}
            </Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={[styles.textDetailItem, {fontFamily: font.bold}]}>
              Status:
            </Text>
            <Text style={[styles.textDetailItem, {fontFamily: font.medium}]}>
              {status == 0
                ? 'On-Progress'
                : status == 1
                ? 'Approved'
                : 'Rejected'}
            </Text>
          </View>
          <View>
            <Text style={[styles.textDetailItem, {fontFamily: font.bold}]}>
              Description:
            </Text>
            <Text style={[styles.textDetailItem, {fontFamily: font.medium}]}>
              {desc ?? '-'}
            </Text>
          </View>
        </View>
        <Gap height={20} />
        {status == 0 ? (
          <View style={styles.buttonWrapper}>
            <Button
              bgColor={color.softSecondary}
              textColor={color.secondary}
              onPress={() => onUpdate(id, 2)}>
              Reject
            </Button>
            <Button
              bgColor={color.primary}
              textColor={color.white}
              onPress={() => onUpdate(id, 1)}>
              Approve
            </Button>
          </View>
        ) : (
          <View style={styles.buttonWrapperCancel}>
            <Button
              bgColor={color.light}
              textColor={color.gray}
              onPress={() => onUpdate(id, 0)}>
              Cancel
            </Button>
          </View>
        )}
      </ScrollView>
    </Container>
  );
};

export default Detail;

const styles = StyleSheet.create({
  headerWrapper: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailWrapper: {
    paddingHorizontal: 20,
  },
  detailItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: color.gray,
    marginBottom: 10,
  },
  buttonWrapper: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  buttonWrapperCancel: {
    paddingHorizontal: 20,
  },
  detailItemDesc: {
    borderBottomWidth: 1,
    borderColor: color.gray,
    marginBottom: 10,
  },
  textHeaderDetail: {
    fontSize: 20,
    color: color.dark,
    fontFamily: font.bold,
  },
  textDetailItem: {
    fontSize: 14,
    color: color.dark,
  },
});
