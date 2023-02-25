import AsyncStorage from '@react-native-community/async-storage';
import {
  DeviceEventEmitter,
  ActivityIndicator,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
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
  // moveToPairPage....
  const moveToPairPage = async e => {
    const uuid = await AsyncStorage.getItem('@user_uuid');
    const accessToken = await AsyncStorage.getItem('@access_token');
    const register_uuid = await AsyncStorage.getItem('@register_uuid');
    const device_pair_token = await AsyncStorage.getItem('@device_pair_token');
    if (uuid != null) {
      props.navigation.replace('scanIoTPage', {
        uuid: uuid,
        register_uuid: null,
        access_token: accessToken,
        device_pair_token: null,
      });
    } else {
      props.navigation.replace('scanIoTPage', {
        uuid: null,
        register_uuid: register_uuid,
        access_token: null,
        device_pair_token: device_pair_token,
      });
    }
  };
  // errorDeviceNoTPair....
  const ErrorDeviceNoTPair = () => {
    return (
      <View
        style={{
          color: 'black',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          top: 150,
        }}>
        <Image
          source={require('./img_err_device_not_pair.png')}
          style={{
            width: 194,
            height: 200,
          }}
        />
        <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>
          Your account not paired to
        </Text>
        <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>
          IoT Device
        </Text>
        <TouchableOpacity
          onPress={moveToPairPage}
          style={{
            backgroundColor: '#45AA4A',
            height: 40,
            width: 328,
            borderRadius: 4,
            top: 13,
          }}>
          <Text
            style={{
              top: 10,
              textAlign: 'center',
              fontFamily: 'Roboto',
              height: 24,
              fontSize: 14,
              fontWeight: '500',
              fontStyle: 'normal',
            }}>
            PAIR MY ACCOUNT
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  // LoadingGetDevicePair
  const LoadingGetDevicePair = () => {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          marginTop: 300,
          flexDirection: 'column',
        }}>
        <ActivityIndicator
          size="large"
          color="black"
          style={{
            top: 10,
            textAlign: 'center',
            fontFamily: 'Roboto',
            height: 24,
            fontSize: 14,
            fontWeight: '500',
            fontStyle: 'normal',
          }}
        />
        <Text style={{color: 'black', marginTop: 15}}>
          Geting IoT Device Information
        </Text>
      </View>
    );
  };
  return {
    _ListenMQTTSensorMonitoring,
    usecaseState,
    progressRef,
    batteryUsageRef,
    KWHUsageRef,
    tempRef,
    _getDevicePairStatus,
    ErrorDeviceNoTPair,
    LoadingGetDevicePair,
  };
};

export default IoTMonitoringCase;
