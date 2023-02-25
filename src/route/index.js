import React from 'react';
import {Provider} from 'react-redux';
import {store} from '../redux/store';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BottomNavigation from './bottomNavigation';

import {
  LoginPage,
  RegisterPage,
  AlertPage,
  ScanIoTPage,
  PairingRFIDPage,
  DeviceDetailPage,
} from '../page';
const screenStack = createStackNavigator();
const Route = () => {
  return (
    <>
      {/* redux provider */}
      <Provider store={store}>
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
            {/* home page */}
            <screenStack.Screen
              name="homePage"
              component={BottomNavigation}
              options={{headerShown: false}}
            />
            <screenStack.Screen
              name="deviceDetailPage"
              component={DeviceDetailPage}
              options={{headerShown: false}}
            />
          </screenStack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
};
export default Route;
