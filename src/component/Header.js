import {View} from 'react-native';
import {Header} from 'react-native-elements';

const HeaderBar = props => {
  const {type} = props;
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
      )}
    </View>
  );
};
export default HeaderBar;
