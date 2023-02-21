import {HeaderBar} from '../../component';
import {View, Text} from 'react-native';

//TODO: Develop this...
const IoTMonitoringPage = props => {
  return (
    <View
      style={{flex: 1, flexDirection: 'column', backgroundColor: '#FFFFFF'}}>
      <HeaderBar text="Device Monitoring" />
      <Text>IoT Monitoring Page</Text>
    </View>
  );
};
export default IoTMonitoringPage;
