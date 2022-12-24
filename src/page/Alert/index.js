import {useNavigationState} from '@react-navigation/native';
import {View, Text, TouchableOpacity} from 'react-native';
import PageStyle from './pageStyle';

const AlertPage = props => {
  /**
   * if state page from login isPairedFromLogin = True
   * will show device not paired (Opps)
   * if state page from register isPairedFromLogin = False
   * will show decision will pairing now or alter
   */
  // param from navigate
  const {isPairedFromLogin} = props.route.params;
  const HandleButtonPairAccount = e => {
    props.navigation.replace('scanIoTPage');
  };
  return (
    <View style={PageStyle.Container}>
      <View style={PageStyle.ContainerTextAlert}>
        <Text style={PageStyle.TextAlert}>
          {isPairedFromLogin ? 'Oops,' : 'Congratulations,'}
        </Text>
        <Text style={PageStyle.AlertContent}>
          {isPairedFromLogin
            ? 'Your account not paired with IoT device'
            : 'Your account success registered'}
        </Text>
        <Text style={PageStyle.AlertContent}>
          are you want to pair your account
        </Text>
        <Text style={PageStyle.AlertContent}>with IoT device ?</Text>
        {/* button */}
        <View style={PageStyle.ConatinerActionButton}>
          <TouchableOpacity
            style={PageStyle.ButtonPairAccount}
            onPress={HandleButtonPairAccount}>
            <Text style={PageStyle.TextPairAccount}>PAIR MY ACCOUNT</Text>
          </TouchableOpacity>
          <TouchableOpacity style={PageStyle.ButtonPairLater}>
            <Text style={PageStyle.TextPairLater}>PAIR IT LATER</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AlertPage;
