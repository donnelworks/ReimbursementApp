import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, TouchableWithoutFeedback} from 'react-native';
import Gap from './Gap';
import {color, font} from '../../helpers';

const Segment = ({label, dataSegment, selectedValue, onChangeValue}) => {
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

  const pilihData = val => {
    onChangeValue(val);
    setValue(val);
  };

  return (
    <View style={styles.wrapper}>
      {label && <Text style={styles.textLabel}>{label}</Text>}

      <View style={styles.segmentWrapper}>
        {dataSegment.map((data, i) => {
          return (
            <SegmentOption
              key={i}
              label={data.label}
              value={data.value}
              selected={value}
              onPress={() => pilihData(data.value)}
            />
          );
        })}
      </View>
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
  wrapper: {
    marginTop: 20,
  },
  segmentWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  textLabel: {
    fontFamily: font.medium,
    color: color.gray,
    fontSize: 12,
    marginBottom: 5,
    position: 'relative',
    left: 5,
  },
});
