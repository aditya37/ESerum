import {StatusBar, View, Text, TouchableOpacity} from 'react-native';
import {Input} from 'react-native-elements';
import {Icon} from '@rneui/base';
import PageStyle from './pageStyle';

const LoginPage = props => {
  const HandleOnCLickRegister = e => {
    // move to another page
    props.navigation.replace('registerPage');
  };
  const HandleOnClickLogin = e => {
    // TODO: Move with condition
    props.navigation.replace('alertPage');
  };
  return (
    <View style={PageStyle.Container}>
      <StatusBar barStyle="dark-content" backgroundColor="#B0BFCA" />

      {/* App Name Start */}
      <View style={PageStyle.ContainerAppName}>
        <Text style={PageStyle.TxtAppName}>ESetrum</Text>
        <Text style={PageStyle.TxtWelcome}>Welcome to ESetrum</Text>
        <Text style={PageStyle.TxtEasyTopUp}>
          Easy to top up your electricity bill
        </Text>
        <Text style={PageStyle.TxtEasyTopUp}>
          Everytime,everywhere and efficient
        </Text>
      </View>

      {/* form Login */}
      <View style={PageStyle.ContainerFormLogin}>
        <Input
          placeholder="username"
          textContentType="username"
          returnKeyType="next"
          rightIcon={<Icon name="person" color="#BFBFBF" size={24} />}
        />
        <Input
          placeholder="password"
          textContentType="password"
          returnKeyType="done"
          secureTextEntry={true}
          rightIcon={<Icon name="lock" color="#BFBFBF" size={24} />}
        />

        {/* BUtton start*/}
        <View style={PageStyle.ButtonContainer}>
          <TouchableOpacity
            style={PageStyle.LoginButton}
            onPress={HandleOnClickLogin}>
            <Text style={PageStyle.ButtonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={PageStyle.RegisterButton}
            onPress={HandleOnCLickRegister}>
            <Text style={PageStyle.RegisterButtonText}>Register</Text>
          </TouchableOpacity>
        </View>
        {/* BUtton End*/}
      </View>
    </View>
  );
};
export default LoginPage;
