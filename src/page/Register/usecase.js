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
    setUseCaseState({
      ..._useCaseState,
      username: username,
      password: password,
    });
  };

  // _hideAlert...
  const _hideAlert = async () => {
    // hide alert if failed register
    if (!props.stateRegister.isSuccess) {
      props.hideAlert();
    } else {
      await AsyncStorage.setItem('@register_username', _useCaseState.username);
      await AsyncStorage.setItem('@register_password', _useCaseState.password);
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
