import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {signIn, screen} from '../pages';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="screen"
        component={screen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="signIn"
        component={signIn}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;