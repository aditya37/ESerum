import {
  View,
  StatusBar,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {useState} from 'react';
import {Input} from 'react-native-elements';
import {Icon} from '@rneui/base';
import {connect} from 'react-redux';
import {ActionRegisterUser} from '../../redux/action/register_user';
import {HeaderBar, AlertDialog} from '../../component';
import RegisterPageStyle from './PageStyle';
import RegisterUsecase from './usecase';

const RegisterPage = props => {
  const [register, setStateRegister] = useState({
    username: '',
    password: '',
    email: '',
    user_role: 1,
  });

  const {_registerUser, _useCaseState, _hideAlert} = RegisterUsecase(props);
  return (
    <View style={RegisterPageStyle.Container}>
      <HeaderBar text="Create Account" />
      <StatusBar barStyle="dark-content" backgroundColor="#B0BFCA" />

      {/* container app name start */}
      <View style={RegisterPageStyle.ContainerAppName}>
        <Text style={RegisterPageStyle.TxtAppName}>ESetrum</Text>
        <Text style={RegisterPageStyle.TxtEasyTopUp}>
          Easy to top up your electricity bill
        </Text>
        <Text style={RegisterPageStyle.TxtEasyTopUp}>
          Everytime,everywhere and efficient
        </Text>
      </View>
      {/* container app name end */}

      {/* Form start*/}
      <View style={RegisterPageStyle.ContainerForm}>
        {/* show alert */}
        {props.stateRegister.isSuccess == false &&
        props.stateRegister.isLoading == false ? (
          <AlertDialog
            show={props.stateRegister.showAlert}
            title="Failed Register user"
            message={props.stateRegister.message}
            onConfirmPressed={() => {
              _hideAlert();
            }}
          />
        ) : (
          <AlertDialog
            show={props.stateRegister.showAlert}
            title="Success Register user"
            message={props.stateRegister.message}
            type="success"
            onConfirmPressed={() => {
              _hideAlert();
              // move to another page after success regiseter
              props.navigation.replace('alertPage', {
                isPairedFromLogin: false,
                uuid: _useCaseState.uuid,
              });
            }}
          />
        )}
        <Input
          placeholder="username"
          textContentType="username"
          returnKeyType="next"
          onChangeText={val =>
            setStateRegister({
              ...register,
              username: val,
              user_role: 1,
            })
          }
          rightIcon={<Icon name="person" color="#BFBFBF" size={24} />}
        />
        <Input
          placeholder="password"
          textContentType="password"
          returnKeyType="next"
          secureTextEntry={true}
          onChangeText={val =>
            setStateRegister({
              ...register,
              password: val,
              user_role: 1,
            })
          }
          rightIcon={<Icon name="lock" color="#BFBFBF" size={24} />}
        />
        <Input
          placeholder="Email"
          textContentType="emailAddress"
          returnKeyType="done"
          onChangeText={val =>
            setStateRegister({
              ...register,
              email: val,
              user_role: 1,
            })
          }
          rightIcon={<Icon name="mail" color="#BFBFBF" size={24} />}
        />

        {/* Button Conatiner Start */}
        <View style={RegisterPageStyle.ButtonContainer}>
          <TouchableOpacity
            style={RegisterPageStyle.LoginButton}
            onPress={e => _registerUser(register)}>
            {props.stateRegister.isLoading == true ? (
              <ActivityIndicator
                size="large"
                color="white"
                style={RegisterPageStyle.ButtonText}
              />
            ) : (
              <Text style={RegisterPageStyle.ButtonText}>Register</Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity style={RegisterPageStyle.CancelButton}>
            <Text style={RegisterPageStyle.CancelButtonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
        {/* Button Conatiner Finish */}
      </View>
      {/* Form End*/}
    </View>
  );
};

const mapStateToProps = state => {
  return {
    stateRegister: state.registerReducer,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    registerUser: (username, password, email, user_role) => {
      dispatch(ActionRegisterUser(username, password, email, user_role));
    },
    hideAlert: () => {
      dispatch({type: 'HIDE_ALERT'});
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
