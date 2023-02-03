import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';
import {GetDevicePair} from '../../redux/action/get_device_status';
import {AlertDialog} from '../../component/index';
import AlertPairUsecase from './usecase';
import PageStyle from './pageStyle';
import {useEffect} from 'react';

const AlertPage = props => {
  // import and implement usecase...
  const {
    _useCaseState,
    _getDevicePairStatus,
    _handelButtonPairLater,
    _handleButtonPairAccount,
  } = AlertPairUsecase(props);

  /**
   * if state page from login isPairedFromLogin = True
   * will show device not paired (Opps)
   * if state page from register isPairedFromLogin = False
   * will show decision will pairing now or alter
   */

  // param from navigate
  const {isPairedFromLogin} = props.route.params;
  useEffect(() => {

    // if from login page not get access token from API
    // only get token from cache
    if (isPairedFromLogin) {
      _getDevicePairStatus(isPairedFromLogin);
    } else {
      _getDevicePairStatus();
    }
  }, []);
  return (
    <View style={PageStyle.Container}>
      <View style={PageStyle.ContainerTextAlert}>
        {/* if user pressed button next, not show everything */}
        {_useCaseState.hideText ? (
          ''
        ) : (
          <>
            <Text style={PageStyle.TextAlert}>
              {props.stateGetDevicePair.is_paired_device &&
              props.stateGetDevicePair.is_paired_rfid &&
              isPairedFromLogin
                ? 'Congratulations,'
                : '' || isPairedFromLogin
                ? 'Oops,'
                : 'Congratulations,'}
            </Text>
            <Text style={PageStyle.AlertContent}>
              {/* if device paired not show text error */}
              {props.stateGetDevicePair.is_paired_device &&
              props.stateGetDevicePair.is_paired_rfid &&
              isPairedFromLogin
                ? 'Your device and RFID has been paired'
                : '' || isPairedFromLogin
                ? 'Your account not paired with IoT device'
                : 'Your account success registered'}
            </Text>
            <Text style={PageStyle.AlertContent}>
              {/* if device paired not show text error */}
              {props.stateGetDevicePair.is_paired_device &&
              props.stateGetDevicePair.is_paired_rfid &&
              isPairedFromLogin
                ? 'lets enjoy it'
                : 'are you want to pair your account'}
            </Text>
            <Text style={PageStyle.AlertContent}>
              {/* if device paired not show text error */}
              {props.stateGetDevicePair.is_paired_device &&
              props.stateGetDevicePair.is_paired_rfid &&
              isPairedFromLogin
                ? ''
                : 'with IoT device ?'}
            </Text>

            {/* alert failed for get device status --start--*/}
            {props.stateGetDevicePair.showAlert ? (
              <AlertDialog
                show={props.stateGetDevicePair.showAlert}
                title="Failed Get Device status"
                message={props.stateGetDevicePair.message}
                onConfirmPressed={() => props.hideAlert()}
              />
            ) : (
              ''
            )}
            {/* alert failed for get device status --finish--*/}
          </>
        )}

        {/* button container*/}
        <View style={PageStyle.ConatinerActionButton}>
          {_useCaseState.hideText ? (
            <ActivityIndicator size="large" color="black" />
          ) : (
            <>
              {props.stateGetDevicePair.isLoading == true ? (
                <ActivityIndicator size="large" color="black" />
              ) : (
                <>
                  <TouchableOpacity
                    style={PageStyle.ButtonPairAccount}
                    disabled={
                      props.stateGetDevicePair.disableButton ? true : false
                    }
                    onPress={_handleButtonPairAccount}>
                    {/*  IF RFID AND DEVICE is paired will change wording NEXT*/}
                    {/* AND will move to home page */}
                    <Text style={PageStyle.TextPairAccount}>
                      {props.stateGetDevicePair.is_paired_device &&
                      props.stateGetDevicePair.is_paired_rfid &&
                      isPairedFromLogin
                        ? 'NEXT'
                        : 'PAIR MY ACCOUNT'}
                    </Text>
                  </TouchableOpacity>
                  {/*  IF RFID AND DEVICE is paired will hide pair later*/}
                  {/* if from register this two button will show */}
                  {props.stateGetDevicePair.is_paired_device &&
                  props.stateGetDevicePair.is_paired_rfid &&
                  isPairedFromLogin ? (
                    ''
                  ) : (
                    <TouchableOpacity
                      style={PageStyle.ButtonPairLater}
                      onPress={_handelButtonPairLater}>
                      <Text style={PageStyle.TextPairLater}>PAIR IT LATER</Text>
                    </TouchableOpacity>
                  )}
                </>
              )}
            </>
          )}
        </View>
      </View>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    stateGetAccessToken: state.LoginUserReducer,
    stateGetDevicePair: state.GetDevicePairReducer,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getDevicePair: (uuid, token) => {
      dispatch(GetDevicePair(uuid, token));
    },
    hideAlert: () => {
      dispatch({type: 'HIDE_ALERT'});
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AlertPage);
