import {StyleSheet} from 'react-native';

const PairingRFIDTPageStyle = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  Content: {
    flexDirection: 'column',
    marginTop: 44,
    height: 39,
    left: 10,
  },
  TxtTitle: {
    color: '#000000',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 25,
    left:4
  },
  TxtGuide: {
    color: '#000000',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 19,
    top: 10,
    left:4
  },
  InputValueRfidContainer: {
    flexDirection: 'column',
    width: 334,
    height: 174,
    // backgroundColor:"black",
    left: 10,
    top: 90,
  },
  ButtonContainer: {
    flexDirection: 'column',
    top: 133,
    left: 17,
    height: 40,
  },
  ButtonPairing: {
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
  TxtPairLater: {
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
export default PairingRFIDTPageStyle;
