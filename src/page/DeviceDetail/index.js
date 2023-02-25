import {
  Text,
  View,
  StatusBar,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {connect} from 'react-redux';
import {HeaderBar, SensorList} from '../../component';
import pageStyle from './style';
import {FlatList} from 'react-native-gesture-handler';
const DeviceDetailPage = props => {
  const DumyData = [
    {
      id: 1,
      sensor_name: 'DHT11',
      sensor_type: 'TEMPERATURE',
      last_record: '2022-01-11',
      value: 1.22,
    },

    {
      id: 2,
      sensor_name: 'DHT11',
      sensor_type: 'TEMPERATURE',
      last_record: '2022-01-11',
      value: 1.22,
    },
    {
      id: 3,
      sensor_name: 'DHT11',
      sensor_type: 'TEMPERATURE',
      last_record: '2022-01-11',
      value: 1.22,
    },
    {
      id: 4,
      sensor_name: 'DHT11',
      sensor_type: 'TEMPERATURE',
      last_record: '2022-01-11',
      value: 1.22,
    },
    {
      id: 5,
      sensor_name: 'DHT11',
      sensor_type: 'TEMPERATURE',
      last_record: '2022-01-11',
      value: 1.22,
    },
    {
      id: 6,
      sensor_name: 'DHT11',
      sensor_type: 'TEMPERATURE',
      last_record: '2022-01-11',
      value: 1.22,
    },
    {
      id: 7,
      sensor_name: 'DHT11',
      sensor_type: 'TEMPERATURE',
      last_record: '2022-01-11',
      value: 1.22,
    },
    {
      id: 8,
      sensor_name: 'DHT11',
      sensor_type: 'TEMPERATURE',
      last_record: '2022-01-11',
      value: 1.22,
    },
    {
      id: 9,
      sensor_name: 'DHT11',
      sensor_type: 'TEMPERATURE',
      last_record: '2022-01-11',
      value: 1.22,
    },
    {
      id: 10,
      sensor_name: 'DHT11',
      sensor_type: 'TEMPERATURE',
      last_record: '2022-01-11',
      value: 1.22,
    },
    {
      id: 11,
      sensor_name: 'DHT11',
      sensor_type: 'TEMPERATURE',
      last_record: '2022-01-11',
      value: 1.22,
    },
    {
      id: 12,
      sensor_name: 'DHT11',
      sensor_type: 'TEMPERATURE',
      last_record: '2022-01-11',
      value: 1.22,
    },
    {
      id: 13,
      sensor_name: 'DHT12',
      sensor_type: 'ELECTRICAL',
      last_record: '2022-01-11',
      value: 1.22,
    },
    {
      id: 14,
      sensor_name: 'DHT11',
      sensor_type: 'TEMPERATURE',
      last_record: '2022-01-11',
      value: 1.22,
    },
    {
      id: 15,
      sensor_name: 'DHT11',
      sensor_type: 'TEMPERATURE',
      last_record: '2022-01-11',
      value: 1.22,
    },
    {
      id: 16,
      sensor_name: 'DHT11',
      sensor_type: 'TEMPERATURE',
      last_record: '2022-01-11',
      value: 1.22,
    },
    {
      id: 17,
      sensor_name: 'DHT11',
      sensor_type: 'TEMPERATURE',
      last_record: '2022-01-11',
      value: 1.22,
    },
    {
      id: 18,
      sensor_name: 'DHT11',
      sensor_type: 'TEMPERATURE',
      last_record: '2022-01-11',
      value: 1.22,
    },
  ];

  return (
    <View style={pageStyle.Container}>
      <HeaderBar text="Device Detail" type="device-detail" />
      <StatusBar backgroundColor="#6C92F4" />
      {/*  content container*/}
      <View style={pageStyle.ContentContainer}>
        {/* device detail container start*/}
        <View style={pageStyle.DeviceDetailContainer}>
          {/* device qr code container start*/}
          <View style={pageStyle.DeviceQrCodeContainer}>
            <Image
              source={{
                uri: 'https://firebasestorage.googleapis.com/v0/b/device-service-1029d.appspot.com/o/qr.iot.4efd74d2-9d6e-4a59-9aa7-e49b81e25536.PAIRING_USER_TO_DEVICE.png?alt=media&token=qr.iot.4efd74d2-9d6e-4a59-9aa7-e49b81e25536.PAIRING_USER_TO_DEVICE.png',
              }}
              style={{
                width: 120,
                height: 120,
              }}
            />
          </View>
          {/* device qr code container stop*/}
          {/* device spec container start*/}
          <View style={pageStyle.DeviceSpecContainer}>
            <Text style={pageStyle.TextDeviceId}>ID</Text>
            <Text style={pageStyle.TextDeviceIdValue}>
              iot.3f65ac60-f03c-40ab-bc0a- 1bbbe965f68b
            </Text>
            <Text style={pageStyle.TextSensor}>Sensor</Text>
            <Text style={pageStyle.TextSensorValue}>4</Text>
            <Text style={pageStyle.TextSensor}>System Uptime</Text>
            <Text style={pageStyle.TextSensorValue}>100000</Text>
          </View>
          {/* device spec container stop*/}
        </View>
        {/* device detail container stop*/}
        {/* device Attached Sensor*/}
        <View style={pageStyle.AttachedSensorContainer}>
          <View style={pageStyle.AttachedSensorHeader}>
            <Text style={pageStyle.AttachedSensorText}>Attached Sensor</Text>
            <Text style={pageStyle.ShowAllText}>Show All</Text>
          </View>
          {/* list */}
          <ScrollView
            scrollEventThrottle={60}
            style={pageStyle.ScrollViewSensorContainer}>
            <FlatList
              scrollEnabled={true}
              data={DumyData}
              keyExtractor={item => item.id}
              ItemSeparatorComponent={() => {
                // separator
                return (
                  <View
                    style={{backgroundColor: '#DEDEDE', height: 2, top: 2}}
                  />
                );
              }}
              renderItem={val => (
                <SensorList
                  sensor_name={val.item.sensor_name}
                  sensor_type={val.item.sensor_type}
                  last_record={val.item.last_record}
                  value={val.item.value}
                  onPress={e => {
                    console.log('move', val.item.sensor_type);
                  }}
                />
              )}
            />
          </ScrollView>
        </View>
      </View>
    </View>
  );
};
// redux mapping...
const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(DeviceDetailPage);
