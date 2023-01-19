import {useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

const AlertPairUsecase = props => {
  const [_useCaseState, setUseCaseState] = useState({});

  const _getDevicePairStatus = async isPairedFromLogin => {
    try {
      if (isPairedFromLogin) {
        const token = await AsyncStorage.getItem('@access_token');
        const uuid = await AsyncStorage.getItem('@user_uuid');
        props.getDevicePair(uuid, token);
      } else {
        const token = await AsyncStorage.getItem('@device_pair_token');
        const uuid = await AsyncStorage.getItem('@register_uuid');
        props.getDevicePair(uuid, token);
      }
    } catch (e) {
      console.log(e);
    }
  };
  const _handelButtonPairLater = e => {
    props.navigation.replace('homePage');
  };

  const _handleButtonPairAccount = e => {
    props.navigation.replace('scanIoTPage');
  };

  return {
    _useCaseState,
    _getDevicePairStatus,
    _handelButtonPairLater,
    _handleButtonPairAccount,
  };
};
export default AlertPairUsecase;
