import AsyncStorage from '@react-native-community/async-storage';
import {useState} from 'react';

const RegisterUsecase = props => {
  const [_useCaseState, setUseCaseState] = useState({
    uuid: '',
    username: '',
    password: '',
  });

  const _registerUser = async ({username, password, email, user_role}) => {
    props.registerUser(username, password, email, user_role);

    // store username and password for login
    // after register account
    try {
      await AsyncStorage.setItem('@register_username', username);
      await AsyncStorage.setItem('@register_password', password);
    } catch (e) {
      console.log(e);
    }
  };
  const _hideAlert = async () => {
    if (!props.stateRegister.isSuccess) {
      props.hideAlert();
    } else {
      await AsyncStorage.setItem('@register_uuid', props.stateRegister.uuid);
      props.hideAlert();
    }
  };
  return {
    _registerUser,
    _useCaseState,
    _hideAlert,
  };
};
export default RegisterUsecase;
