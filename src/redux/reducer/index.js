import {combineReducers} from 'redux';
import RegisterReducer from './register_reducer';
import LoginUserReducer from './auth_user_reducer';
import DevicePair from './get_device_pair';

export default combineReducers({
  registerReducer: RegisterReducer,
  LoginUserReducer: LoginUserReducer,
  GetDevicePairReducer: DevicePair,
});
