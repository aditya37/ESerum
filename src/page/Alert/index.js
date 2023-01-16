import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';
import {ActionAuth} from '../../redux/action/auth_user';
import {GetDevicePair} from '../../redux/action/get_device_status';
import {AlertDialog} from '../../component/index';

import AlertPairUsecase from './usecase';
import PageStyle from './pageStyle';
import {useEffect} from 'react';

const AlertPage = props => {
  // import and implement usecase...
  const {_useCaseState, _getAccessToken, _getDevicePairStatus} =
    AlertPairUsecase(props);

  /**
   * if state page from login isPairedFromLogin = True
   * will show device not paired (Opps)
   * if state page from register isPairedFromLogin = False
   * will show decision will pairing now or alter
   */

  // param from navigate
  const {isPairedFromLogin} = props.route.params;
  useEffect(() => {
    _getAccessToken();
    _getDevicePairStatus();
  }, []);
  const HandleButtonPairAccount = e => {
    props.navigation.replace('scanIoTPage');
  };

  return (
    <View style={PageStyle.Container}>
      <View style={PageStyle.ContainerTextAlert}>
        <Text style={PageStyle.TextAlert}>
          {isPairedFromLogin ? 'Oops,' : 'Congratulations,'}
        </Text>
        <Text style={PageStyle.AlertContent}>
          {isPairedFromLogin
            ? 'Your account not paired with IoT device'
            : 'Your account success registered'}
        </Text>
        <Text style={PageStyle.AlertContent}>
          are you want to pair your account
        </Text>
        <Text style={PageStyle.AlertContent}>with IoT device ?</Text>

        {/* TODO: SHOW ERROR MESSAGE */}
        {props.stateGetDevicePair.showAlert ? (
          <AlertDialog
            show={props.stateGetDevicePair.showAlert}
            title="Failed Register user"
            message={props.stateGetDevicePair.message}
            onConfirmPressed={() => props.hideAlert()}
          />
        ) : (
          ''
        )}

        {/* button */}
        <View style={PageStyle.ConatinerActionButton}>
          {props.stateGetDevicePair.isLoading == true ? (
            <ActivityIndicator size="large" color="black" />
          ) : (
            <>
              <TouchableOpacity
                style={PageStyle.ButtonPairAccount}
                disabled={props.stateGetDevicePair.disableButton ? true : false}
                onPress={HandleButtonPairAccount}>
                <Text style={PageStyle.TextPairAccount}>PAIR MY ACCOUNT</Text>
              </TouchableOpacity>
              <TouchableOpacity style={PageStyle.ButtonPairLater}>
                <Text style={PageStyle.TextPairLater}>PAIR IT LATER</Text>
              </TouchableOpacity>
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
    getAccessToken: ({username, password}) => {
      dispatch(ActionAuth({username: username, password: password}));
    },
    getDevicePair: (uuid, token) => {
      dispatch(GetDevicePair(uuid, token));
    },
    hideAlert: () => {
      dispatch({type: 'HIDE_ALERT'});
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AlertPage);
