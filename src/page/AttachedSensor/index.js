import {View, Dimensions} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {HeaderBar, SensorList} from '../../component';
import pageStyle from './style';

// TODO: Develop this...
const AttachedSensorPage = props => {
  const DumyData = [
    {
      id: 1,
      sensor_name: 'DHT11',
      sensor_type: 'TEMPERATURE',
      last_record: '2022-01-11',
      value: 1.22,
    },

    {
      id: 2,
      sensor_name: 'DHT11',
      sensor_type: 'TEMPERATURE',
      last_record: '2022-01-11',
      value: 1.22,
    },
    {
      id: 3,
      sensor_name: 'DHT11',
      sensor_type: 'TEMPERATURE',
      last_record: '2022-01-11',
      value: 1.22,
    },
    {
      id: 4,
      sensor_name: 'DHT11',
      sensor_type: 'TEMPERATURE',
      last_record: '2022-01-11',
      value: 1.22,
    },
    {
      id: 5,
      sensor_name: 'DHT11',
      sensor_type: 'TEMPERATURE',
      last_record: '2022-01-11',
      value: 1.22,
    },
    {
      id: 6,
      sensor_name: 'DHT11',
      sensor_type: 'TEMPERATURE',
      last_record: '2022-01-11',
      value: 1.22,
    },
    {
      id: 7,
      sensor_name: 'DHT11',
      sensor_type: 'TEMPERATURE',
      last_record: '2022-01-11',
      value: 1.22,
    },
    {
      id: 8,
      sensor_name: 'DHT11',
      sensor_type: 'TEMPERATURE',
      last_record: '2022-01-11',
      value: 1.22,
    },
    {
      id: 9,
      sensor_name: 'DHT11',
      sensor_type: 'TEMPERATURE',
      last_record: '2022-01-11',
      value: 1.22,
    },
    {
      id: 10,
      sensor_name: 'DHT11',
      sensor_type: 'TEMPERATURE',
      last_record: '2022-01-11',
      value: 1.22,
    },
    {
      id: 11,
      sensor_name: 'DHT11',
      sensor_type: 'TEMPERATURE',
      last_record: '2022-01-11',
      value: 1.22,
    },
    {
      id: 12,
      sensor_name: 'DHT11',
      sensor_type: 'TEMPERATURE',
      last_record: '2022-01-11',
      value: 1.22,
    },
    {
      id: 13,
      sensor_name: 'DHT12',
      sensor_type: 'ELECTRICAL',
      last_record: '2022-01-11',
      value: 1.22,
    },
    {
      id: 14,
      sensor_name: 'DHT11',
      sensor_type: 'TEMPERATURE',
      last_record: '2022-01-11',
      value: 1.22,
    },
    {
      id: 15,
      sensor_name: 'DHT11',
      sensor_type: 'TEMPERATURE',
      last_record: '2022-01-11',
      value: 1.22,
    },
    {
      id: 16,
      sensor_name: 'DHT11',
      sensor_type: 'TEMPERATURE',
      last_record: '2022-01-11',
      value: 1.22,
    },
    {
      id: 17,
      sensor_name: 'DHT11',
      sensor_type: 'TEMPERATURE',
      last_record: '2022-01-11',
      value: 1.22,
    },
    {
      id: 18,
      sensor_name: 'DHT11',
      sensor_type: 'TEMPERATURE',
      last_record: '2022-01-11',
      value: 1.22,
    },
    {
      id: 19,
      sensor_name: 'DHT11',
      sensor_type: 'TEMPERATURE',
      last_record: '2022-01-11',
      value: 1.22,
    },
    {
      id: 20,
      sensor_name: 'DHT11',
      sensor_type: 'ELECTRICAL',
      last_record: '2022-01-11',
      value: 1.22,
    },
  ];
  return (
    <View style={pageStyle.Container}>
      <HeaderBar text="Attached Sensor" type="attached-sensor" />
      {/* content */}
      <View style={pageStyle.ContentConatainer}>
        <View style={pageStyle.ContainerListSensor}>
          {/* device list */}
          <FlatList
            scrollEnabled={true}
            data={DumyData}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={() => {
              // separator
              return (
                <View style={{backgroundColor: '#DEDEDE', height: 2, top: 2}} />
              );
            }}
            renderItem={val => (
              <SensorList
                sensor_name={val.item.sensor_name}
                sensor_type={val.item.sensor_type}
                last_record={val.item.last_record}
                value={val.item.value}
                onPress={e => {
                  console.log('move', val.item.sensor_type);
                }}
              />
            )}
          />
        </View>
      </View>
    </View>
  );
};
export default AttachedSensorPage;
