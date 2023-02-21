import AsyncStorage from '@react-native-community/async-storage';
import {DeviceEventEmitter} from 'react-native';
import {useState} from 'react';
const HomePageUsecase = props => {
  const [usecaseState, setUsecasestate] = useState({
    temperature: 0,
    electrical_usage: 0,
    rfid_value: '',
    saldo: 0,
  });
  const _getDevicePairStatus = async () => {
    const registerUUID = await AsyncStorage.getItem('@register_uuid');
    const loginUUID = await AsyncStorage.getItem('@user_uuid');
    if (loginUUID != null) {
      props.getDevicePair(loginUUID);
    } else {
      props.getDevicePair(registerUUID);
    }
  };
  const _subscribeDeviceMonitoring = () => {
    DeviceEventEmitter.addListener(
      'subscribe_event_type_device_monitoring',
      payload => {
        const resp = JSON.parse(payload);
        setUsecasestate({
          ...usecaseState,
          saldo: resp.saldo,
          temperature: resp.temperature,
          electrical_usage: resp.kwh,
          rfid_value: resp.rfid_value,
        });
      },
    );
  };
  return {_getDevicePairStatus, _subscribeDeviceMonitoring, usecaseState};
};

export default HomePageUsecase;
