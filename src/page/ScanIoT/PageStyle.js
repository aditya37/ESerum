import {StyleSheet} from 'react-native';

const ScanIoTPageStyle = StyleSheet.create({
  Container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  Content: {
    flexDirection: 'column',
    top: 43,
    left: 40,
  },
  TextPairing: {
    color: '#000000',
    fontWeight: '700',
    fontSize: 30,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
  },
  TextInstruction: {
    top: 10,
    color: '#000000',
    fontSize: 20,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '200',
  },
  NextButton: {
    height: 40,
    width: 300,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#45AA4A',
  },
  ButtonText: {
    top: 10,
    textAlign: 'center',
    fontFamily: 'Roboto',
    height: 24,
    fontSize: 14,
    fontWeight: '500',
    fontStyle: 'normal',
    color: '#45AA4A',
  },
  TextStateScan: {
    color: '#000000',
  },
});

export default ScanIoTPageStyle;
