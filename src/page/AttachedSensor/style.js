import {StyleSheet, Dimensions} from 'react-native';

const AttachedSensorPagStyle = StyleSheet.create({
  Container: {flex: 1, backgroundColor: '#ffffff', flexDirection: 'column'},
  ContentConatainer: {flexDirection: 'column', marginTop: 4, marginLeft: 10},
  ContainerListSensor: {height: Dimensions.get('window').height}
});
export default AttachedSensorPagStyle;
