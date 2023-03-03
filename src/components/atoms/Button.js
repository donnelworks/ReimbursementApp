import React from 'react';
import {ActivityIndicator, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {color, font} from '../../helpers';

const Button = ({
  children,
  iconLeft,
  iconRight,
  disabled,
  loading,
  bgColor,
  textColor,
  rounded,
  size,
  ...props
}) => {
  const btnStyle = {
    backgroundColor: bgColor ? bgColor : '',
    minHeight: size == 'sm' ? 35 : size == 'lg' ? 60 : 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: size == 'sm' ? 15 : size == 'lg' ? 30 : 20,
    borderRadius: rounded ? 100 : 10,
  };

  const textStyle = {
    color: textColor ? textColor : color.gray,
    fontFamily: font.bold,
    fontSize: size == 'sm' ? 14 : size == 'lg' ? 20 : 16,
  };

  const iconLeftStyle = {
    marginRight: iconLeft ? 5 : 0,
  };

  const iconRightStyle = {
    marginLeft: iconRight ? 5 : 0,
  };

  const loadingColor = textColor ? textColor : color.gray;

  const ButtonRender = () => (
    <>
      <Icon
        style={iconLeftStyle}
        name={iconLeft}
        size={size == 'sm' ? 16 : size == 'lg' ? 25 : 20}
        color={textColor ? textColor : color.gray}
      />
      <Text style={textStyle}>{children}</Text>
      <Icon
        style={iconRightStyle}
        name={iconRight}
        size={size == 'sm' ? 16 : size == 'lg' ? 25 : 20}
        color={textColor ? textColor : color.gray}
      />
    </>
  );

  return (
    <TouchableOpacity style={btnStyle} disabled={disabled} {...props}>
      {loading ? <ActivityIndicator color={loadingColor} /> : <ButtonRender />}
    </TouchableOpacity>
  );
};

export default Button;
