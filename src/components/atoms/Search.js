import {StyleSheet, TextInput, Keyboard, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {color, font} from '../../helpers';

const Search = ({onSearch, ...props}) => {
  const [focus, setFocus] = useState(false);

  const handleFocus = () => setFocus(true);
  const handleBlur = () => setFocus(false);

  useEffect(() => {
    const hideKeyboard = Keyboard.addListener('keyboardDidHide', () => {
      Keyboard.dismiss();
    });

    return () => {
      hideKeyboard.remove();
    };
  }, []);

  return (
    <View rowStyles={styles.searchContainer}>
      <TextInput
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={styles.searchInput}
        placeholderTextColor={color.dark}
        onChangeText={key => onSearch(key)}
        {...props}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  searchContainer: {
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  searchCol: {
    height: 50,
    justifyContent: 'center',
  },
  searchInput: {
    backgroundColor: color.light,
    fontFamily: font.medium,
    fontSize: 14,
    paddingHorizontal: 16,
    color: color.secondary,
    borderRadius: 15,
  },
});
