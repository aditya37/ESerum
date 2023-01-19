import AsyncStorage from '@react-native-community/async-storage';

const Auth = store => next => action => {
  if (action.type == 'SUCCESS_LOGIN_USER') {
    AsyncStorage.setItem('@is_login', 'true');
    AsyncStorage.setItem('@access_token', action.payload.accessToken);
    AsyncStorage.setItem('@refresh_token', action.payload.refreshToken);
    AsyncStorage.setItem('@user_uuid', action.payload.uuid);
    next(action);
  }else if (action.type == "SUCCESS_REGISTER_USER") {
    console.log(action.payload)
    AsyncStorage.setItem('@device_pair_token', action.payload.devicePairToken);
    AsyncStorage.setItem('@register_uuid', action.payload.uuid);
    next(action)
  }
  next(action);
};

export default Auth;
