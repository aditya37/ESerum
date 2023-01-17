import {useState, useEffect} from 'react';
import {
  StatusBar,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {Input} from 'react-native-elements';
import {Icon} from '@rneui/base';
import {connect} from 'react-redux';
import {AlertDialog} from '../../component';
import PageStyle from './pageStyle';
import {ActionAuth} from '../../redux/action/auth_user';
import Usecase from './usecase';

// TODO: handle after login and move to alert pairing device
const LoginPage = props => {
  // usecase...
  const {
    _actionLogin,
    _usecaseState,
    setUsecaseState,
    _hideAlert,
    _getStateLogin,
  } = Usecase(props);

  const [stateRequestLogin, setRequestLogin] = useState({
    username: '',
    password: '',
  });

  useEffect(() => {
    // if user has been logined will move to alertPage
    _getStateLogin();
  }, []);

  const HandleOnCLickRegister = e => {
    // move to another page
    props.navigation.replace('registerPage');
  };

  return (
    <View style={PageStyle.Container}>
      <StatusBar barStyle="dark-content" backgroundColor="#B0BFCA" />

      {/* App Name Start */}
      <View style={PageStyle.ContainerAppName}>
        <Text style={PageStyle.TxtAppName}>ESetrum</Text>
        <Text style={PageStyle.TxtWelcome}>Welcome to ESetrum</Text>
        <Text style={PageStyle.TxtEasyTopUp}>
          Easy to top up your electricity bill
        </Text>
        <Text style={PageStyle.TxtEasyTopUp}>
          Everytime,everywhere and efficient
        </Text>
      </View>

      {/* form Login */}
      <View style={PageStyle.ContainerFormLogin}>
        {/* show alert */}
        {props.stateUserAuth.isSuccess == false &&
        props.stateUserAuth.isLoading == false ? (
          <AlertDialog
            show={props.stateUserAuth.showAlert}
            title="Login failed"
            message={props.stateUserAuth.message}
            onConfirmPressed={() => {
              _hideAlert();
            }}
          />
        ) : (
          // alert login success
          <AlertDialog
            show={props.stateUserAuth.showAlert}
            title="Login Success"
            message="Login Success"
            type="success"
            onConfirmPressed={() => {
              _hideAlert();
              props.navigation.replace('alertPage', {isPairedFromLogin: true});
            }}
          />
        )}

        <Input
          placeholder="username"
          textContentType="username"
          returnKeyType="next"
          onChangeText={v =>
            setRequestLogin({
              ...stateRequestLogin,
              username: v,
            })
          }
          rightIcon={<Icon name="person" color="#BFBFBF" size={24} />}
        />
        <Input
          placeholder="password"
          textContentType="password"
          returnKeyType="done"
          secureTextEntry={true}
          onChangeText={v =>
            setRequestLogin({
              ...stateRequestLogin,
              password: v,
            })
          }
          rightIcon={<Icon name="lock" color="#BFBFBF" size={24} />}
        />

        {/* BUtton start*/}
        <View style={PageStyle.ButtonContainer}>
          <TouchableOpacity
            style={PageStyle.LoginButton}
            onPress={e =>
              _actionLogin(
                e,
                stateRequestLogin.username,
                stateRequestLogin.password,
              )
            }>
            {props.stateUserAuth.isLoading ? (
              <ActivityIndicator
                size="large"
                color="white"
                style={PageStyle.ButtonText}
              />
            ) : (
              <Text style={PageStyle.ButtonText}>Login</Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity
            style={PageStyle.RegisterButton}
            onPress={HandleOnCLickRegister}>
            <Text style={PageStyle.RegisterButtonText}>Register</Text>
          </TouchableOpacity>
        </View>
        {/* BUtton End*/}
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
    UserAuth: ({username, password, auth_type}) => {
      dispatch(
        ActionAuth({
          username: username,
          password: password,
          auth_type: auth_type,
        }),
      );
    },
    hideAlert: () => {
      dispatch({type: 'HIDE_ALERT'});
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
