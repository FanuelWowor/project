import 'react-native-gesture-handler';
import React from 'react';
import {screen, signIn} from './pages';
import {NavigationContainer } from '@react-navigation/native';
import Router from './Router';

const app = () => {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};

export default app;