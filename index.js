/**
 * @format
 */

import {AppRegistry} from 'react-native';
import 'react-native-reanimated';
import App from './App';
import {name as appName} from './app.json';
import mqttClient from './src/mqtt';

// init first instance mqtt
mqttClient.getInstance();

AppRegistry.registerComponent(appName, () => App);
