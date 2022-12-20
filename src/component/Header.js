import {View} from 'react-native';
import {Header} from 'react-native-elements';

const HeaderBar = props => {
  return (
    <View>
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
            top: 14,
          },
        }}
      />
    </View>
  );
};
export default HeaderBar;
