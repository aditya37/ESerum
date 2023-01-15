import {View} from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';
const AlertDialog = props => {
  return (
    <View>
      <AwesomeAlert
        show={props.show}
        showProgress={false}
        closeOnHardwareBackPress={false}
        title={props.title}
        titleStyle={{
          fontFamily: 'Inter',
          fontSize: 19,
          fontWeight: '900',
          alignItems: 'center',
          alignContent: 'center',
          bottom: 2,
        }}
        showConfirmButton={true}
        message={props.message}
        messageStyle={{
          fontFamily: 'Inter',
          fontSize: 15,
          color: '#000000',
          alignItems: 'center',
          alignContent: 'center',
        }}
        confirmText={props.type == 'success' ? "OKE" : 'Try Again'}
        confirmButtonColor={props.type == 'success' ? '#45AA4A' : '#DD6B55'}
        onConfirmPressed={props.onConfirmPressed}
      />
    </View>
  );
};

export default AlertDialog;
