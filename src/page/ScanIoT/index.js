import {useEffect, useState} from 'react';
import {View, StatusBar, Text, TouchableOpacity} from 'react-native';
import {useScanBarcodes, BarcodeFormat} from 'vision-camera-code-scanner';
import {connect} from 'react-redux';
import {ScanQr, AlertDialog} from '../../component';
import PageStyle from './PageStyle';
import UsecaseScanIot from './usecase';

const ScanIoTPage = props => {
  // usecase....
  const {
    _prepareCameraAndGetStateMQTT,
    _useCaseState,
    ParseValQr,
    _subscribeEventEmitter,
    onConfirmPressed,
  } = UsecaseScanIot(props);

  useEffect(() => {
    _prepareCameraAndGetStateMQTT();
    // hide alert in login page
    props.hideAlert();
    // _subscribeEventEmitter
    _subscribeEventEmitter();
  }, []);

  const [frameProcessor, barcodes] = useScanBarcodes([BarcodeFormat.QR_CODE], {
    checkInverted: true,
  });

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

        <AlertDialog
          show={_useCaseState.showFailedAlert}
          message={_useCaseState.message}
          type={_useCaseState.alertType}
          title="Failed Pair Device"
          onConfirmPressed={onConfirmPressed}
        />

        <ScanQr
          value={frameProcessor}
          isPrepare={_useCaseState.loadingCamera}
        />
        {/* parse barcode value */}
        {ParseValQr(barcodes)}

        {/* button */}
        <TouchableOpacity
          style={PageStyle.NextButton}
          onPress={e => props.navigation.navigate('homePage')}>
          <Text style={PageStyle.ButtonText}>
            {_useCaseState.loadingCamera
              ? 'Preparing IoT Device....'
              : 'PAIR IT LATER'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    stateUserAuth: state.LoginUserReducer,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    hideAlert: () => {
      dispatch({type: 'HIDE_ALERT'});
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ScanIoTPage);
