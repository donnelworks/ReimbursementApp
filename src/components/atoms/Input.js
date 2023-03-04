import React, {useState, useEffect, useRef} from 'react';
import {
  TextInput,
  View,
  Animated,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import {color, font} from '../../helpers';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Input = ({
  label,
  value,
  iconRight,
  iconLeft,
  secure,
  type = 'none',
  lg,
  ...props
}) => {
  const [focus, setFocus] = useState(false);
  const [iconSecure, setIconSecure] = useState('eye-outline');
  const [secureText, setSecureText] = useState(secure);
  const [animation, setAnimation] = useState(new Animated.Value(0));
  // const textInputRef = useRef();

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

  useEffect(() => {
    Animated.timing(animation, {
      toValue: focus || value != '' ? 1 : 0,
      duration: 100,
      useNativeDriver: false,
    }).start();
  }, [focus, value]);

  const labelStyle = {
    fontFamily: font.medium,
    backgroundColor:
      type == 'border-bottom'
        ? color.white
        : type == 'outline'
        ? color.white
        : (type == 'none' && focus) || (type == 'none' && value != '')
        ? color.white
        : color.light,
    paddingHorizontal: 5,
    color: focus ? color.primary : color.gray,
    position: 'absolute',
    left: 5,
    top: animation.interpolate({
      inputRange: [0, 1],
      outputRange: lg ? [14, -12] : [13, -8],
    }),
    fontSize: animation.interpolate({
      inputRange: [0, 1],
      outputRange: lg ? [18, 14] : [14, 12],
    }),
    zIndex: animation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    }),
  };

  const inputStyle = {
    fontSize: lg ? 18 : 14,
    fontFamily: font.medium,
    paddingHorizontal: lg ? 8 : 5,
    minHeight: lg ? 55 : 45,
    color: color.primary,
    position: 'relative',
  };

  const iconLeftStyle = {
    padding: iconLeft ? 5 : 0,
    justifyContent: 'center',
  };

  const iconRightStyle = {
    padding: iconRight ? 5 : 0,
    justifyContent: 'center',
  };

  const secureStyle = {
    padding: iconRight ? 5 : 0,
    borderRadius: 50,
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  };

  const wrapperStyle = {
    flexDirection: 'row',
    // marginTop: 20,
    borderRadius: type == 'outline' || type == 'none' ? 10 : 0,
    borderBottomWidth:
      type == 'border-bottom'
        ? 2
        : type == 'outline'
        ? 2
        : (type == 'none' && focus) || (type == 'none' && value != '')
        ? 2
        : 0,
    borderTopWidth:
      type == 'border-bottom'
        ? 0
        : type == 'outline'
        ? 2
        : (type == 'none' && focus) || (type == 'none' && value != '')
        ? 2
        : 0,
    borderRightWidth:
      type == 'border-bottom'
        ? 0
        : type == 'outline'
        ? 2
        : (type == 'none' && focus) || (type == 'none' && value != '')
        ? 2
        : 0,
    borderLeftWidth:
      type == 'border-bottom'
        ? 0
        : type == 'outline'
        ? 2
        : (type == 'none' && focus) || (type == 'none' && value != '')
        ? 2
        : 0,
    borderColor: focus ? color.primary : color.dark,
    backgroundColor:
      type == 'border-bottom'
        ? color.white
        : type == 'outline'
        ? color.white
        : (type == 'none' && focus) || (type == 'none' && value != '')
        ? color.white
        : color.light,
  };

  const handleSecure = () => {
    if (secureText == true) {
      setIconSecure('eye-off-outline');
      setSecureText(false);
    } else {
      setIconSecure('eye-outline');
      setSecureText(true);
    }
  };

  return (
    <View style={wrapperStyle}>
      <View style={iconLeftStyle}>
        <Icon name={iconLeft} size={25} color={color.primary} />
      </View>
      <View style={{flex: 1}}>
        <Animated.Text style={labelStyle}>{label}</Animated.Text>
        <TextInput
          // ref={textInputRef}
          value={value}
          style={inputStyle}
          onFocus={handleFocus}
          onBlur={handleBlur}
          secureTextEntry={secure ? secureText : false}
          onSubmitEditing={Keyboard.dismiss}
          {...props}
        />
      </View>
      {secure ? (
        <TouchableOpacity style={secureStyle} onPress={() => handleSecure()}>
          <Icon name={iconSecure} size={25} color={color.primary} />
        </TouchableOpacity>
      ) : (
        <View style={iconRightStyle}>
          <Icon name={iconRight} size={25} color={color.primary} />
        </View>
      )}
    </View>
  );
};

export default Input;
