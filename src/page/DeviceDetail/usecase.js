import {useNavigation} from '@react-navigation/native';
const DeviceDetailUseCase = props => {
  const navigation = useNavigation();
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
  ];
  const _showAllAttachedSensor = () => {
    props.navigation.replace('attachedSensorPage');
  };
  return {
    _showAllAttachedSensor,
    DumyData,
  };
};
export default DeviceDetailUseCase;
