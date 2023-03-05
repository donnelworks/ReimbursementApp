import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  ScrollView,
  Pressable,
} from 'react-native';
import Gap from './Gap';
import {color, font} from '../../helpers';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Segment = ({
  label,
  dataSegment,
  selectedValue,
  onChangeValue,
  onSort,
}) => {
  const [value, setValue] = useState('');

  useEffect(() => {
    if (selectedValue) {
      selectedData(selectedValue);
    }
  }, []);

  const selectedData = val => {
    onChangeValue(val);
    setValue(val);
  };

  const changeValue = val => {
    onChangeValue(val);
    setValue(val);
  };

  return (
    <View style={styles.outerWrapper}>
      {label && <Text style={styles.textLabel}>{label}</Text>}

      <Pressable style={styles.sort} onPress={() => onSort()}>
        <Icon name="sort" size={23} color={color.gray} />
      </Pressable>

      <ScrollView
        horizontal
        contentContainerStyle={styles.segmentWrapper}
        showsHorizontalScrollIndicator={false}>
        {dataSegment.map((data, i) => {
          return (
            <SegmentOption
              key={i}
              label={data.label}
              value={data.value}
              selected={value}
              onPress={() => changeValue(data.value)}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

const SegmentOption = ({label, value, selected, ...props}) => {
  const segment = {
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 10,
    // borderColor: Color.primary,
    borderColor: selected == value ? color.primary : color.gray,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
    backgroundColor: selected == value ? color.softPrimary : 'transparent',
  };
  const textSegment = {
    color: selected == value ? color.primary : color.gray,
    fontFamily: font.medium,
  };
  return (
    <>
      <TouchableWithoutFeedback {...props}>
        <View style={segment}>
          <Text style={textSegment}>{label}</Text>
        </View>
      </TouchableWithoutFeedback>
      <Gap width={5} />
    </>
  );
};

export default Segment;

const styles = StyleSheet.create({
  outerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
  },
  segmentWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    // alignItems: 'center',
  },
  textLabel: {
    fontFamily: font.medium,
    color: color.gray,
    fontSize: 12,
    marginBottom: 5,
    position: 'relative',
    left: 5,
  },
  sort: {
    height: 40,
    paddingHorizontal: 10,
    // borderRadius: 10,
    // borderColor: Color.primary,
    // borderColor: color.gray,
    // borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
  },
});
