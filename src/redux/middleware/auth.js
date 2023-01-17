import AsyncStorage from '@react-native-community/async-storage';

const Auth = store => next => action => {
  if (action.type == 'SUCCESS_LOGIN_USER') {
    if (action.payload.authType == 1) {
      AsyncStorage.setItem('@is_login', 'true');
      AsyncStorage.setItem('@access_token', action.payload.accessToken);
      AsyncStorage.setItem('@refresh_token', action.payload.refreshToken);
      AsyncStorage.setItem('@user_uuid', action.payload.uuid);
      next(action);
    } else if (action.payload.authType == 2) {
      // store token from after register
      AsyncStorage.setItem(
        '@access_token_register',
        action.payload.accessToken,
      );
      next(action);
    }
    next(action);
  }
  next(action);
};

export default Auth;
