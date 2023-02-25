import {Text, View, StatusBar, Image} from 'react-native';
import {connect} from 'react-redux';
import {HeaderBar, SensorList} from '../../component';
import pageStyle from './style';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import DeviceDetailUseCase from './usecase';
const DeviceDetailPage = props => {
  const {_showAllAttachedSensor, DumyData} = DeviceDetailUseCase(props);

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
            <TouchableOpacity
              onPress={() => _showAllAttachedSensor()}
              style={pageStyle.ShowAllText}>
              <Text
                style={{
                  color: 'blue',
                  fontSize: 15,
                  fontWeight: 'bold',
                }}>
                Show All
              </Text>
            </TouchableOpacity>
          </View>
          {/* list */}
          <View style={pageStyle.ScrollViewSensorContainer}>
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
          </View>
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
