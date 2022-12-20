import {View, StatusBar, Text, TouchableOpacity} from 'react-native';
import {Input} from 'react-native-elements';
import {Icon} from '@rneui/base';
import {HeaderBar} from '../../component';
import RegisterPageStyle from './PageStyle';

const RegisterPage = () => {
  return (
    <View style={RegisterPageStyle.Container}>
      <HeaderBar text="Create Account" />
      <StatusBar barStyle="dark-content" backgroundColor="#B0BFCA" />

      {/* container app name start */}
      <View style={RegisterPageStyle.ContainerAppName}>
        <Text style={RegisterPageStyle.TxtAppName}>ESetrum</Text>
        <Text style={RegisterPageStyle.TxtEasyTopUp}>
          Easy to top up your electricity bill
        </Text>
        <Text style={RegisterPageStyle.TxtEasyTopUp}>
          Everytime,everywhere and efficient
        </Text>
      </View>
      {/* container app name end */}

      {/* Form start*/}
      <View style={RegisterPageStyle.ContainerForm}>
        <Input
          placeholder="username"
          textContentType="username"
          returnKeyType="next"
          rightIcon={<Icon name="person" color="#BFBFBF" size={24} />}
        />
        <Input
          placeholder="password"
          textContentType="password"
          returnKeyType="next"
          secureTextEntry={true}
          rightIcon={<Icon name="lock" color="#BFBFBF" size={24} />}
        />
        <Input
          placeholder="Email"
          textContentType="emailAddress"
          returnKeyType="done"
          rightIcon={<Icon name="mail" color="#BFBFBF" size={24} />}
        />

        {/* Button Conatiner Start */}
        <View style={RegisterPageStyle.ButtonContainer}>
          <TouchableOpacity style={RegisterPageStyle.LoginButton}>
            <Text style={RegisterPageStyle.ButtonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={RegisterPageStyle.CancelButton}>
            <Text style={RegisterPageStyle.CancelButtonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
        {/* Button Conatiner Finish */}
      </View>
      {/* Form End*/}
    </View>
  );
};

export default RegisterPage;
