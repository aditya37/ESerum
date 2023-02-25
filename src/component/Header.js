import {View} from 'react-native';
import {Header} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

const HeaderBar = props => {
  const {type} = props;
  const navigation = useNavigation();
  // if type = register => not show bell
  return (
    <View>
      {type == 'register' ? (
        <Header
          placement="left"
          containerStyle={{
            backgroundColor: '#FFFFFF',
            height: 75,
          }}
          centerComponent={{
            text: props.text,
            style: {
              fontSize: 20,
              fontFamily: 'Roboto',
              fontWeight: '500',
              fontStyle: 'normal',
            },
          }}
        />
      ) : (
        ''
      )}
      {type == 'home' ? (
        <Header
          placement="left"
          containerStyle={{
            backgroundColor: '#FFFFFF',
            height: 75,
          }}
          rightComponent={{
            icon: 'notifications',
            color: '#6C6E73',
            size: 24,
            style: {
              right: 5,
            },
          }}
          centerComponent={{
            text: props.text,
            style: {
              fontSize: 20,
              fontFamily: 'Roboto',
              fontWeight: '500',
              fontStyle: 'normal',
            },
          }}
        />
      ) : (
        ''
      )}
      {type == 'iot-device' ? (
        <Header
          placement="left"
          containerStyle={{
            backgroundColor: '#FFFFFF',
            height: 75,
          }}
          rightComponent={{
            icon: 'timeline',
            color: '#1A73E9',
            size: 30,
            onPress: () => {
              navigation.navigate('deviceDetailPage');
            },
          }}
          centerComponent={{
            text: props.text,
            style: {
              fontSize: 20,
              fontFamily: 'Roboto',
              fontWeight: '500',
              fontStyle: 'normal',
            },
          }}
        />
      ) : (
        ''
      )}
      {type == 'device-detail' ? (
        <Header
          placement="left"
          containerStyle={{
            backgroundColor: '#6C92F4',
            height: 75,
            borderBottomColor: '#6C92F4',
          }}
          rightComponent={{
            icon: 'close',
            color: 'white',
            size: 30,
            onPress: () => {
              navigation.navigate('navIotDevice');
            },
          }}
          centerComponent={{
            text: props.text,
            style: {
              fontSize: 20,
              fontFamily: 'Roboto',
              fontWeight: '500',
              fontStyle: 'normal',
              color: 'white',
            },
          }}
        />
      ) : (
        ''
      )}
      {type == 'attached-sensor' ? (
        <Header
          placement="left"
          containerStyle={{
            backgroundColor: 'white',
            borderBottomColor: 'white',
          }}
          leftComponent={{
            icon: 'arrow-back',
            color: 'black',
            size: 30,
            onPress: () => {
              navigation.navigate('deviceDetailPage');
            },
          }}
          rightComponent={{
            icon: 'refresh',
            color: 'black',
            size: 30,
            onPress: () => {
              console.log('reload');
            },
          }}
          centerComponent={{
            text: props.text,
            style: {
              justifyContent:"center",
              fontSize: 20,
              fontFamily: 'Roboto',
              fontWeight: '500',
              fontStyle: 'normal',
              color: 'black',
            },
          }}
        />
      ) : (
        ''
      )}
    </View>
  );
};
export default HeaderBar;
