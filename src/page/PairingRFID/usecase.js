import {useState} from 'react';
import {DeviceEventEmitter} from 'react-native';
import mqttinstance from '../../mqtt';

const PairRFIDUsecase = props => {
  const [usecaseState, setUsecasestate] = useState({
    rfidValue: '',
    showAlert: false,
    alertType: 'success',
    message: '',
    title: '',
    isSuccess: false,
  });
  const _subscribeTopicPairRfid = () => {
    const {register_uuid, uuid, access_token, device_pair_token} =
      props.route.params;

    //   before subscribe check mqtt connection state
    if (!mqttinstance.isConnected) {
      console.log('not connected');
    } else {
      console.log('connected');
      // do subscribe
      if (uuid != null) {
        const topic = '/user/' + uuid + '/resp/device/pair';
        mqttinstance._subscribe(topic, 0);
      } else {
        const topic = '/user/' + register_uuid + '/resp/device/pair';
        mqttinstance._subscribe(topic, 0);
      }
    }
  };

  //   _onChageTextValueRFID....
  const _onChageTextValueRFID = val => {
    setUsecasestate({
      ...usecaseState,
      rfidValue: val,
    });
  };
  const _handleButtonPairRfid = e => {
    var today = Math.round(new Date().getTime() / 1000);
    const {register_uuid, uuid, access_token, device_pair_token} =
      props.route.params;
    if (uuid != null) {
      const payload = {
        uuid: uuid,
        device_id: '',
        rfid_card: usecaseState.rfidValue,
        event_type: 2,
        pairing_at: today,
        token: access_token,
      };
      const pairTopic = '/user/' + uuid + '/req/device/pair';
      mqttinstance._publish(JSON.stringify(payload), pairTopic);
    } else {
      const payload = {
        uuid: register_uuid,
        device_id: '',
        rfid_card: usecaseState.rfidValue,
        event_type: 2,
        pairing_at: today,
        token: device_pair_token,
      };
      const pairTopic = '/user/' + uuid + '/req/device/pair';
      mqttinstance._publish(JSON.stringify(payload), pairTopic);
    }
  };
  //   handle alert
  const onConfirmPressed = e => {
    if (usecaseState.isSuccess) {
      setUsecasestate({
        showAlert: false,
      });
      props.navigation.replace('homePage')
    } else {
      setUsecasestate({
        showAlert: false,
      });
    }
  };
  //   TODO: SHOW MESSAGE IF SUCCESS AND SPARATE SUBSCRIBE EMITTER BY EVENT TYPE
  //   subscribe response from pair rfid
  const _subscribeResponsePairRfid = () => {
    DeviceEventEmitter.addListener(
      'subscribe_event_type_pair_rfid',
      function (data) {
        console.log('device emiter data', data);
        const resp = JSON.parse(data);
        if (resp.code == 400) {
          setUsecasestate({
            showAlert: true,
            message: resp.message,
            alertType: 'failed',
            title: 'Pairing failed',
            isSuccess: false,
          });
        } else {
          setUsecasestate({
            showAlert: true,
            message: 'success pairing RFID',
            alertType: 'success',
            title: 'Pairing success',
            isSuccess: true,
          });
        }
      },
    );
  };
  return {
    _subscribeTopicPairRfid,
    _handleButtonPairRfid,
    _onChageTextValueRFID,
    usecaseState,
    onConfirmPressed,
    _subscribeResponsePairRfid,
  };
};
export default PairRFIDUsecase;
