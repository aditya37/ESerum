import {useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

const AlertPairUsecase = props => {
  const [_useCaseState, setUseCaseState] = useState({});
  // function for get access token
  const _getAccessToken = async () => {
    try {
      const username = await AsyncStorage.getItem('@register_username');
      const password = await AsyncStorage.getItem('@register_password');
      // if auth type == 2 => login from alert page or after register
      await props.getAccessToken({
        username: username,
        password: password,
        auth_type: 2,
      });
    } catch (e) {
      console.log(e);
    }
  };

  const _getDevicePairStatus = async isPairedFromLogin => {
    try {
      if (isPairedFromLogin) {
        const token = await AsyncStorage.getItem('@access_token');
        const uuid = await AsyncStorage.getItem('@user_uuid');
        props.getDevicePair(uuid, token);
      } else {
        const token = await AsyncStorage.getItem('@access_token_register');
        const uuid = await AsyncStorage.getItem('@register_uuid');

        console.log('token register', token);
        props.getDevicePair(uuid, token);
      }
    } catch (e) {
      console.log(e);
    }
  };
  return {
    _useCaseState,
    _getAccessToken,
    _getDevicePairStatus,
  };
};
export default AlertPairUsecase;
