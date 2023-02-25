import {View, Text, TouchableOpacity, Image} from 'react-native';

const SensorList = ({
  sensor_name,
  sensor_type,
  last_record,
  value,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingBottom: 10,
          paddingTop: 3,
          flex: 1,
        }}>
        <View style={{flexDirection: 'column', left: 4}}>
          <Image
            source={
              sensor_type == 'TEMPERATURE'
                ? {
                    uri: 'https://firebasestorage.googleapis.com/v0/b/device-service-1029d.appspot.com/o/assets%2Ftemperature-control.png?alt=media&token=12d47b4a-a2a9-479e-90ca-480ce977ad0d',
                  }
                : sensor_type == 'ELECTRICAL'
                ? {
                    uri: 'https://firebasestorage.googleapis.com/v0/b/device-service-1029d.appspot.com/o/assets%2Felectrical-panel.png?alt=media&token=4ef63d7d-fe2c-44a2-9155-013e783d27d5',
                  }
                : ''
            }
            style={{
              width: 40,
              height: 40,
            }}
          />
        </View>
        <View style={{flexDirection: 'column', right: 50}}>
          <Text
            style={{
              color: 'black',
              fontWeight: 'bold',
              fontSize: 15,
              top: 4,
            }}>
            {sensor_name}
          </Text>
          <Text style={{color: 'black', fontSize: 14, top: 10}}>
            {sensor_type}
          </Text>
        </View>
        <View style={{flexDirection: 'column', right: 30}}>
          <Text
            style={{
              color: 'black',
              fontWeight: 'bold',
              fontSize: 15,
              textAlign: 'right',
              top: 4,
            }}>
            {value}
          </Text>
          <Text style={{color: 'black', fontSize: 14, top: 10}}>
            {last_record}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SensorList;
