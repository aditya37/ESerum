import {StyleSheet} from 'react-native';

const RegisterPageStyle = StyleSheet.create({
  Container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  ContainerAppName: {
    flexDirection: 'column',
    marginTop: 44,
    height: 39,
    left: 10,
  },
  ContainerForm: {
    flexDirection: 'column',
    width: 360,
    height: 174,
    left: 4,
    top: 90,
  },
  TxtAppName: {
    fontFamily: 'Inter',
    fontSize: 32,
    fontWeight: '900',
    color: '#27AE60',
    alignItems: 'center',
    alignContent: 'center',
  },
  TxtEasyTopUp: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontSize: 14,
    top: 5,
    fontWeight: '400',
    color: '#000000',
  },
  ButtonContainer: {
    flexDirection: 'column',
    top: 56,
    left: 17,
    height: 40,
  },
  LoginButton: {
    backgroundColor: '#45AA4A',
    height: 40,
    width: 328,
    borderRadius: 4,
  },
  ButtonText: {
    top: 10,
    textAlign: 'center',
    fontFamily: 'Roboto',
    height: 24,
    fontSize: 14,
    fontWeight: '500',
    fontStyle: 'normal',
  },
  CancelButton: {
    top: 27,
    height: 40,
    width: 328,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#45AA4A',
  },
  CancelButtonText: {
    top: 10,
    textAlign: 'center',
    fontFamily: 'Roboto',
    height: 24,
    fontSize: 14,
    fontWeight: '500',
    fontStyle: 'normal',
    color: '#45AA4A',
  },
});

export default RegisterPageStyle;
