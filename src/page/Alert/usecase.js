import {useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

const AlertPairUsecase = props => {
  const [_useCaseState, setUseCaseState] = useState({
    hideText: false,
  });

  const _getDevicePairStatus = async isPairedFromLogin => {
    try {
      if (isPairedFromLogin) {
        // if next button pressed will move to home page
        // without check device pair
        const isNext = await AsyncStorage.getItem('@alert_page_next');
        if (isNext == 'true' && isNext != null) {
          setUseCaseState({
            hideText: true,
          });
          // wait in 100 ms
          setTimeout(() => {
            props.navigation.replace('homePage');
          }, 100);
        } else {
          const token = await AsyncStorage.getItem('@access_token');
          const uuid = await AsyncStorage.getItem('@user_uuid');
          props.getDevicePair(uuid, token);
        }
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
    // if device and rfid paired and press button next
    // will save to storage session and auto redirect to
    // home page
    if (
      props.stateGetDevicePair.is_paired_device &&
      props.stateGetDevicePair.is_paired_rfid
    ) {
      AsyncStorage.setItem('@alert_page_next', 'true');
      // wait in 100 ms
      setTimeout(() => {
        props.navigation.replace('homePage');
      }, 100);
    } else {
      props.navigation.replace('scanIoTPage');
    }
  };

  return {
    _useCaseState,
    _getDevicePairStatus,
    _handelButtonPairLater,
    _handleButtonPairAccount,
  };
};
export default AlertPairUsecase;
