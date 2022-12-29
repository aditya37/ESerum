import {View, StatusBar, Text, TouchableOpacity} from 'react-native';
import {Icon} from '@rneui/base';
import {Input} from 'react-native-elements';
import PageStyle from './PageStyle';
const PairingRFIDPage = props => {
  return (
    <View style={PageStyle.Container}>
      <StatusBar barStyle="dark-content" backgroundColor="#B0BFCA" />
      {/* container */}
      <View style={PageStyle.Content}>
        <Text style={PageStyle.TxtTitle}>Pairing Your RFID Card</Text>
        <Text style={PageStyle.TxtGuide}>Tap and hold 1 minutes your RFID</Text>
        <Text style={PageStyle.TxtGuide}>Card in scanner and push scan</Text>
        <Text style={PageStyle.TxtGuide}>button on device</Text>
        {/* pass value rfid  start */}
        <View style={PageStyle.InputValueRfidContainer}>
          <Text
            style={{
              color: '#000000',
              fontFamily: 'Roboto',
              fontStyle: 'normal',
              fontWeight: '400',
              fontSize: 19,
              top: 4,
              left: 10,
            }}>
            Input here your RFID Value
          </Text>
          <Input
            style={{marginTop: 35}}
            returnKeyType="done"
            textContentType="name"
            rightIcon={<Icon name="lock" color="#BFBFBF" size={24} />}
          />
        </View>

        {/* Button Conatiner Start */}
        <View style={PageStyle.ButtonContainer}>
          <TouchableOpacity style={PageStyle.ButtonPairing}>
            <Text style={PageStyle.ButtonText}>PAIRING</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={PageStyle.CancelButton}
            onPress={e => props.navigation.replace('homePage')}>
            <Text style={PageStyle.TxtPairLater}>PAIRING IT LATER</Text>
          </TouchableOpacity>
        </View>
        {/* Button Conatiner End */}
      </View>
    </View>
  );
};

export default PairingRFIDPage;
