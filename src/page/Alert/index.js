import {View, Text, TouchableOpacity} from 'react-native';
import PageStyle from './pageStyle';

const AlertPage = props => {
  return (
    <View style={PageStyle.Container}>
      <View style={PageStyle.ContainerTextAlert}>
        <Text style={PageStyle.TextAlert}>Oops,</Text>
        <Text style={PageStyle.AlertContent}>
          Your account not paired with IoT device
        </Text>
        <Text style={PageStyle.AlertContent}>
          are you want to pair your account
        </Text>
        <Text style={PageStyle.AlertContent}>with IoT device ?</Text>
        {/* button */}
        <View style={PageStyle.ConatinerActionButton}>
          <TouchableOpacity style={PageStyle.ButtonPairAccount}>
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
