import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {color, font} from '../../helpers';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const List = ({
  container,
  accent,
  iconLeft,
  iconRight,
  title,
  firstDesc,
  secondDesc,
  ...props
}) => {
  // const closeSwipe = (map, key) => {
  //   if (map[key]) {
  //     map[key].closeRow();
  //   }
  // };
  const iconLeftWrapper = {
    padding: iconLeft ? 5 : 0,
    justifyContent: 'center',
  };

  const iconRightWrapper = {
    padding: iconRight ? 5 : 0,
    justifyContent: 'center',
  };

  const textJudul = {
    fontFamily: font.semiBold,
    fontSize: 15,
    color: accent ? accent : color.dark,
  };

  return (
    <TouchableOpacity
      {...props}
      style={{paddingHorizontal: container ? 20 : 0}}>
      <View style={styles.listWrapper}>
        <View style={iconLeftWrapper}>
          <Icon
            name={iconLeft}
            size={30}
            color={accent ? accent : color.dark}
          />
        </View>

        <View style={styles.contentWrapper}>
          <View style={styles.itemCenter}>
            <Text style={textJudul}>{title}</Text>
            <View style={styles.descWrapper}>
              {firstDesc && (
                <View style={styles.firstDescWrapper}>
                  <Text style={styles.textFirstDesc} numberOfLines={1}>
                    {firstDesc}
                  </Text>
                </View>
              )}
              {secondDesc && (
                <View style={styles.secondDescWrapper}>
                  <Text style={styles.textSecondDesc} numberOfLines={1}>
                    {secondDesc}
                  </Text>
                </View>
              )}
            </View>
          </View>
        </View>

        <View style={iconRightWrapper}>
          <Icon name={iconRight} size={25} color={color.softDark} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default List;

const styles = StyleSheet.create({
  listWrapper: {
    flexDirection: 'row',
    // marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: color.light,
  },
  contentWrapper: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 5,
    paddingLeft: 10,
  },
  itemCenter: {
    flex: 1,
    paddingVertical: 5,
    justifyContent: 'center',
  },
  descWrapper: {
    flexDirection: 'row',
  },
  firstDescWrapper: {
    flex: 1,
    paddingRight: 5,
  },
  secondDescWrapper: {
    flex: 1,
    paddingRight: 5,
    alignItems: 'flex-end',
  },
  textFirstDesc: {
    fontFamily: font.medium,
    fontSize: 12,
    color: color.gray,
  },
  textSecondDesc: {
    fontFamily: font.medium,
    fontSize: 12,
    color: color.gray,
  },
});
