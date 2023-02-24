import AsyncStorage from '@react-native-community/async-storage';
import {DeviceEventEmitter} from 'react-native';
import {useState, useRef} from 'react';
const IoTMonitoringCase = props => {
  // ref for gauge...
  const progressRef = useRef(null);
  const batteryUsageRef = useRef(null);
  const KWHUsageRef = useRef(null);
  const tempRef = useRef(null);
  // state....
  const [usecaseState, setUsecasestate] = useState({
    temperature: 0,
    electrical_usage: 0,
    rfid_value: '',
    saldo: 0,
    provider: '',
    pulsa: 0,
    imei: '',
    phone_number: '',
    battery_usage: 0,
    device_id: '',
    status: '',
    kwh: 0,
    datausage: 0,
  });

  // Listen mqtt Sensor Monitoring...
  const _ListenMQTTSensorMonitoring = () => {
    DeviceEventEmitter.addListener(
      'subscribe_event_type_device_monitoring',
      payload => {
        const resp = JSON.parse(payload);
        console.log('emit', resp);
        setUsecasestate({
          saldo: resp.saldo,
          temperature: resp.temperature,
          electrical_usage: resp.kwh,
          rfid_value: resp.rfid_value,
          provider: resp.network_info.provider,
          pulsa: resp.network_info.pulsa,
          imei: resp.network_info.imei,
          phone_number: resp.network_info.phone_number,
          battery_usage: resp.battery_usage,
          device_id: resp.device_id,
          status: resp.status,
          kwh: resp.kwh,
          datausage: resp.datausage,
        });
      },
    );
  };

  // get device pair status....
  const _getDevicePairStatus = async () => {
    const registerUUID = await AsyncStorage.getItem('@register_uuid');
    const loginUUID = await AsyncStorage.getItem('@user_uuid');
    if (loginUUID != null) {
      props.getDevicePair(loginUUID);
    } else {
      props.getDevicePair(registerUUID);
    }
  };

  // errorDeviceNoTPair....
  const ErrorDeviceNoTPair = () => {};

  return {
    _ListenMQTTSensorMonitoring,
    usecaseState,
    progressRef,
    batteryUsageRef,
    KWHUsageRef,
    tempRef,
    _getDevicePairStatus,
    ErrorDeviceNoTPair,
  };
};

export default IoTMonitoringCase;
