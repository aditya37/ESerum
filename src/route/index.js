import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  LoginPage,
  RegisterPage,
  AlertPage,
  ScanIoTPage,
  PairingRFIDPage,
} from '../page';

const screenStack = createStackNavigator();
const Route = () => {
  return (
    <>
      {/* navigation container */}
      <NavigationContainer independent="true">
        {/* stack */}
        <screenStack.Navigator>
          {/* page login */}
          <screenStack.Screen
            name="loginPage"
            component={LoginPage}
            options={{headerShown: false}}
          />
          {/* page register */}
          <screenStack.Screen
            name="registerPage"
            component={RegisterPage}
            options={{headerShown: false}}
          />
          {/* page alert */}
          <screenStack.Screen
            name="alertPage"
            component={AlertPage}
            options={{headerShown: false}}
          />
          {/* ScanIoTPage */}
          <screenStack.Screen
            name="scanIoTPage"
            component={ScanIoTPage}
            options={{headerShown: false}}
          />
          {/* pairingRFIDPage */}
          <screenStack.Screen
            name="pairingRFIDPage"
            component={PairingRFIDPage}
            options={{headerShown: false}}
          />
        </screenStack.Navigator>
      </NavigationContainer>
    </>
  );
};
export default Route;
