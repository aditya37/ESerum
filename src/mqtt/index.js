import {DeviceEventEmitter} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import mqtt from 'react_native_mqtt';
import crashlytics from '@react-native-firebase/crashlytics';

class mqttClient {
  static mqttInstance = null;

  static _initMqtt() {
    mqtt({
      size: 10000,
      storageBackend: AsyncStorage,
      defaultExpires: 1000 * 3600 * 24,
      enableCache: true,
      sync: {},
    });
    const client = new Paho.MQTT.Client(
      '37.44.244.196',
      8883,
      'id_' + parseInt(Math.random() * 100000),
    );
    client.connect({
      userName: 'vps-mqtt',
      password: 'lymousin',
      useSSL: false,
      onFailure: () => {
        console.log('gagal');
        crashlytics().recordError(new Error("failed to connect mqtt"))
      },
    });
    client.onConnected = this._onConnected;
    client.isConnected;
    client.onMessageArrived = msg => {
      const {event_type} = JSON.parse(msg.payloadString)
      if (event_type == 1) {
        DeviceEventEmitter.emit('subscribe_event_type_pair_device', msg.payloadString);
      }else if (event_type == 2) {
        DeviceEventEmitter.emit('subscribe_event_type_pair_rfid', msg.payloadString);
      }else if (event_type == 3) {
        DeviceEventEmitter.emit('subscribe_event_type_device_monitoring', msg.payloadString);
      }
    };
    client.unsubscribe = this.unsubscribe;
    return client;
  }

  /**
   * @returns {CommonDataManager}
   */
  static getInstance() {
    if (mqttClient.mqttInstance == null) {
      return (this.mqttInstance = this._initMqtt());
    }
    return this.mqttInstance;
  }

  // state connected....
  static _onConnected() {
    console.log('connected');
  }

  // publish...
  static _publish(message, topic) {
    const publisher = new Paho.MQTT.Message(message);
    publisher.destinationName = topic;
    this.mqttInstance.send(publisher);
  }

  static _subscribe(topic, qos) {
    this.mqttInstance.subscribe(topic, {qos: qos});
  }
  static isConnected() {
    return this.mqttInstance.isConnected();
  }
  static unsubscribe(topic) {
    this.mqttInstance.unsubscribe(topic);
  }
}

export default mqttClient;
