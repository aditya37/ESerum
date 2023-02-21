import AsyncStorage from '@react-native-community/async-storage';
import {useState} from 'react';
const LoginUsecase = props => {
  const [_usecaseState, setUsecaseState] = useState({
    username: '',
    password: '',
  });

  const _actionLogin = (e, username, password) => {
    //   if auth type == 1
    // login with from page login
    //   if auth type == 2
    // // login with from page register
    props.UserAuth({username: username, password: password});
  };

  const _hideAlert = () => {
    props.hideAlert();
  };

  const _getStateLogin = async () => {
    const stateLogin = await AsyncStorage.getItem('@is_login');
    if (stateLogin == 'true' && stateLogin != null) {
      // clear uuid from register....
      let clearUUIDRegister = await AsyncStorage.removeItem('@register_uuid');
      /**
       * if state page from login isPairedFromLogin = True
       * will show device not paired (Opps)
       * if state page from register isPairedFromLogin = False
       * will show decision will pairing now or alter
       */
      props.navigation.replace('alertPage', {isPairedFromLogin: true});
    }
  };
  return {
    _actionLogin,
    setUsecaseState,
    _usecaseState,
    _hideAlert,
    _getStateLogin,
  };
};

export default LoginUsecase;
