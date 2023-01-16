import AsyncStorage from '@react-native-community/async-storage';
import {PROCESS_LOGIN_USER, SUCCESS_LOGIN_USER} from '../action/constant';

const initState = {
  accessToken: '',
};

export default async (state = initState, action) => {
  switch (action.type) {
    case PROCESS_LOGIN_USER:
      return {
        ...state,
      };
    case SUCCESS_LOGIN_USER:
      try {
        // store token to storage
        await AsyncStorage.setItem('@access_token_register', action.payload.accessToken);
        return {
          ...state,
          accessToken: action.payload.accessToken,
        };
      } catch (e) {}
    default:
      return state;
  }
};
