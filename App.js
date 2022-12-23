import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Route from './src/route';
import { LogingPage } from './src/page';

const App = () => {
  return (
    <NavigationContainer>
      <Route />
    </NavigationContainer>
  );
};
export default App;
