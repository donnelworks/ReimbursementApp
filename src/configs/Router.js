import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Approval, Detail, Login, StartScreen} from '../screens';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Start"
        component={StartScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Approval"
        component={Approval}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{title: 'Approval Details', headerShadowVisible: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
