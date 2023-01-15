import {useState} from 'react';

const RegisterUsecase = props => {
  const [_useCaseState, setUseCaseState] = useState({
    uuid: '',
  });

  const _registerUser = ({username, password, email, user_role}) => {
    props.registerUser(username, password, email, user_role);
  };
  const _hideAlert = () => {
    if (!props.stateRegister.isSuccess) {
      props.hideAlert();
    } else {
      setUseCaseState({
        uuid: props.stateRegister.uuid,
      });
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
