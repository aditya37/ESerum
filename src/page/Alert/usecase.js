import {useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

const AlertPairUsecase = props => {
  const [_useCaseState, setUseCaseState] = useState({});
  // function for get access token
  const _getAccessToken = async () => {
    try {
      const username = await AsyncStorage.getItem('@register_username');
      const password = await AsyncStorage.getItem('@register_password');
      await props.getAccessToken({
        username: username,
        password: password,
      });
    } catch (e) {
      console.log(e);
    }
  };

  const _getDevicePairStatus = async () => {
    try {
      const token = await AsyncStorage.getItem('@access_token_register');
      const uuid = await AsyncStorage.getItem('@register_uuid');
      props.getDevicePair(uuid, token);
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
