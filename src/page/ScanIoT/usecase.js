import {useState} from 'react';
import {DeviceEventEmitter} from 'react-native';
import mqttinstance from '../../mqtt';
import crashlytics from '@react-native-firebase/crashlytics';

const UsecaseScanIot = props => {
  // state usecase...
  const [_useCaseState, setUseCaseState] = useState({
    loadingCamera: true,
    showFailedAlert: false,
    alertType: '',
    message: '',
  });

  // _prepareCameraAndGetStateMQTT.....
  const _prepareCameraAndGetStateMQTT = () => {
    // wait....
    setTimeout(() => {
      setUseCaseState({
        ..._useCaseState,
        loadingCamera: false,
      });
    }, 2000);
    if (mqttinstance.isConnected()) {
      const {register_uuid, uuid} = props.route.params;
      if (register_uuid != null) {
        mqttinstance._subscribe(
          '/user/' + register_uuid + '/resp/device/pair',
          0,
        );
      } else {
        mqttinstance._subscribe('/user/' + uuid + '/resp/device/pair', 0);
      }
      console.log('ready...');
    } else {
      crashlytics().log("not ready subscribe device pair")
      console.log('not ready...');
    }
  };

  // parse qrcode value...
  const ParseValQr = (val, index) => {
    if (val.length == 0) {
      console.log('scanning qr code...');
    } else {
      // parse uuid from param...
      const {register_uuid, uuid, access_token, device_pair_token} =
        props.route.params;

      // PARSE DATA FROM QRCODE
      // if qrcode with event type 1
      const data = JSON.parse(val[0].content.data);
      var today = Math.round(new Date().getTime() / 1000);

      // if qrcode code contain event_type = 1
      // will pair device
      if (data.event_type == 1 && data != null) {
        // if uuid register not null...
        // will publish pair device...
        if (register_uuid != null) {
          const payload = {
            uuid: register_uuid,
            device_id: data.device_id,
            rfid_card: '',
            event_type: 1,
            pairing_at: today,
            token: device_pair_token,
          };
          const pairTopic = '/user/' + register_uuid + '/req/device/pair';
          mqttinstance._publish(JSON.stringify(payload), pairTopic);
        } else {
          const payload = {
            uuid: uuid,
            device_id: data.device_id,
            rfid_card: '',
            event_type: 1,
            pairing_at: today,
            token: access_token,
          };
          const pairTopic = '/user/' + uuid + '/req/device/pair';
          mqttinstance._publish(JSON.stringify(payload), pairTopic);
        }
      }
    }
  };

  // onConfirmPressed...
  const onConfirmPressed = e => {
    setUseCaseState({
      showFailedAlert: false,
    });
  };

  //_subscribeEventEmitter...
  const _subscribeEventEmitter = () => {
    // emit listener
    DeviceEventEmitter.addListener(
      'subscribe_event_type_pair_device',
      function (data) {
        const resp = JSON.parse(data);
        if (resp.code == 400) {
          setUseCaseState({
            showFailedAlert: true,
            message: resp.message,
          });
        } else {
          setUseCaseState({
            showFailedAlert: false,
          });
          // parse uuid from param...
          const {register_uuid, uuid, access_token, device_pair_token} =
            props.route.params;
          if (register_uuid != null) {
            props.navigation.replace('pairingRFIDPage', {
              uuid: null,
              register_uuid: register_uuid,
              access_token: null,
              device_pair_token: device_pair_token,
            });
          } else {
            props.navigation.replace('pairingRFIDPage', {
              uuid: uuid,
              register_uuid: null,
              access_token: access_token,
              device_pair_token: null,
            });
          }
        }
      },
    );
  };

  return {
    _prepareCameraAndGetStateMQTT,
    _useCaseState,
    ParseValQr,
    _subscribeEventEmitter,
    setUseCaseState,
    onConfirmPressed,
  };
};
export default UsecaseScanIot;
