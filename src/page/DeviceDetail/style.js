import {StyleSheet, Dimensions} from 'react-native';
import {horizontalScale, verticalScale} from '../../utils/dimension';
const DeviceDetailPageStyle = StyleSheet.create({
  Container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
  },
  ContentContainer: {flexDirection: 'column', marginLeft: 3},
  DeviceDetailContainer: {
    backgroundColor: '#6C92F4',
    flexDirection: 'row',
    width: Dimensions.get('window').width,
    height: verticalScale(188),
    alignSelf: 'center',
  },
  DeviceQrCodeContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    left: horizontalScale(20),
    marginTop: 10,
  },
  DeviceSpecContainer: {
    flexDirection: 'column',
    marginLeft: 35,
    marginTop: 10,
  },
  TextSensor: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    top: 4,
  },
  TextSensorValue: {color: 'white', fontWeight: 'bold', fontSize: 15, top: 5},
  TextDeviceId: {color: 'white', fontWeight: 'bold', fontSize: 15},
  TextDeviceIdValue: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    maxWidth: 215,
  },
  AttachedSensorContainer: {
    flexDirection: 'column',
    top: 25,
    left: 10,
  },
  AttachedSensorHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  AttachedSensorText: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
    left: 4,
  },
  ShowAllText: {
    color: 'blue',
    right: 45,
    fontSize: 15,
    fontWeight: 'bold',
  },
  ScrollViewSensorContainer: {
    flexDirection: 'column',
    top: 14,
    height: 450,
  },
});
export default DeviceDetailPageStyle;
