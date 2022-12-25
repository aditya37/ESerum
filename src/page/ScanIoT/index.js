import {View, StatusBar, Text, TouchableOpacity} from 'react-native';
import {useScanBarcodes, BarcodeFormat} from 'vision-camera-code-scanner';
import {ScanQr} from '../../component';
import PageStyle from './PageStyle';

const ScanIoTPage = props => {
  const [frameProcessor, barcodes] = useScanBarcodes(
    [BarcodeFormat.ALL_FORMATS],
    {checkInverted: true},
  );
  const ParseValQr = (val, index) => {
    if (val.length == 0) {
      console.log(val);
    } else {
      console.log('with value');
      props.navigation.replace('pairingRFIDPage')
    }
  };
  return (
    <View style={PageStyle.Container}>
      <StatusBar barStyle="dark-content" backgroundColor="#B0BFCA" />
      {/* content */}
      <View style={PageStyle.Content}>
        <Text style={PageStyle.TextPairing}>Pairing IoT Device</Text>
        <Text style={PageStyle.TextInstruction}>
          point the camera at the qr code
        </Text>
        <Text style={PageStyle.TextInstruction}>on the iot device</Text>

        {/* camera container */}
        <ScanQr value={frameProcessor} />
        {/* parse barcode value */}
        {ParseValQr(barcodes)}

        {/* button */}
        <TouchableOpacity
          style={PageStyle.NextButton}
          onPress={e => props.navigation.navigate('loginPage')}>
          <Text style={PageStyle.ButtonText}>PAIR IT LATER</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ScanIoTPage;
