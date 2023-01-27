import {View, StatusBar, Text, TouchableOpacity} from 'react-native';
import {Icon} from '@rneui/base';
import {Input} from 'react-native-elements';
import {connect} from 'react-redux';
import PageStyle from './PageStyle';
import {AlertDialog} from '../../component';
import PairRFIDUsecase from './usecase';
import {useEffect} from 'react';

const PairingRFIDPage = props => {
  const {
    _subscribeTopicPairRfid,
    _handleButtonPairRfid,
    _onChageTextValueRFID,
    usecaseState,
    onConfirmPressed,
    _subscribeResponsePairRfid,
  } = PairRFIDUsecase(props);
  useEffect(() => {
    _subscribeTopicPairRfid();
    // _subscribeResponsePairRfid from device emiter...
    _subscribeResponsePairRfid();
  }, []);
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
          <AlertDialog
            show={usecaseState.showAlert}
            onConfirmPressed={onConfirmPressed}
            title={usecaseState.title}
            message={usecaseState.message}
            type={usecaseState.alertType}
          />
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
            onChangeText={_onChageTextValueRFID}
            rightIcon={<Icon name="lock" color="#BFBFBF" size={24} />}
          />
        </View>

        {/* Button Conatiner Start */}
        <View style={PageStyle.ButtonContainer}>
          <TouchableOpacity
            style={PageStyle.ButtonPairing}
            onPress={_handleButtonPairRfid}>
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

const mapStateToProps = state => {
  return {};
};
const mapDispatchToProps = dispatch => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(PairingRFIDPage);
