import {View, Text, InteractionManager, ActivityIndicator} from 'react-native';
import {useEffect} from 'react';
import {connect} from 'react-redux';
import CircularProgress from 'react-native-circular-progress-indicator';
import {useIsFocused} from '@react-navigation/native';
import pageStyle from './style';
import {HeaderBar, SensorGauge} from '../../component';
import {GetDevicePair} from '../../redux/action/get_device_status';
import IoTMonitoringCase from './usecase';

const IoTMonitoringPage = props => {
  // declare usecase...
  const {
    usecaseState,
    progressRef,
    batteryUsageRef,
    KWHUsageRef,
    tempRef,
    _getDevicePairStatus,
    _ListenMQTTSensorMonitoring,
    ErrorDeviceNoTPair,
    LoadingGetDevicePair,
  } = IoTMonitoringCase(props);

  // refresh if bottom navigation focused/change
  const isFocused = useIsFocused();

  useEffect(() => {
    // get device pair status...
    _getDevicePairStatus();

    // listen here after gauge ready and reanimated
    _ListenMQTTSensorMonitoring();

    // reanimate ref....
    InteractionManager.runAfterInteractions(() => {
      if (progressRef.current != null) {
        progressRef.current.reAnimate();
        tempRef.current.reAnimate();
        batteryUsageRef.current.reAnimate();
        KWHUsageRef.current.reAnimate();
      }
    });
  }, [isFocused]);

  return (
    // container start
    <View style={pageStyle.Container}>
      {/* header bar... */}
      <HeaderBar text="Device Monitoring" type="iot-device" />
      {/*loading device pairing status */}
      {(props.stateGetDevicePair.is_paired_rfid == false &&
        props.stateGetDevicePair.isLoading) ||
      (props.stateGetDevicePair.is_paired_device == false &&
        props.stateGetDevicePair.isLoading) ? (
        <LoadingGetDevicePair />
      ) : (props.stateGetDevicePair.is_paired_rfid == false &&
          !props.stateGetDevicePair.isLoading) ||
        (props.stateGetDevicePair.is_paired_device == false &&
          !props.stateGetDevicePair.isLoading) ? (
        <ErrorDeviceNoTPair /> // {/* check or validate device pairing status */}
      ) : (
        <>
          {/* Content */}
          <View style={pageStyle.ContentContainer}>
            {/*Device Card COntainer... */}
            <View style={pageStyle.DeviceCardContainer}>
              {/* data usage container */}
              <View style={pageStyle.DataUsageContainer}>
                <CircularProgress
                  ref={progressRef}
                  initialValue={0}
                  value={usecaseState.datausage}
                  maxValue={10000}
                  radius={60} // adjust the size of the progress circle.
                  duration={1000} // progress animation duration
                  progressValueColor={'#ecf0f1'}
                  activeStrokeColor={'#F4BE37'}
                  title={'GB'}
                  progressFormatter={value => {
                    'worklet';
                    return value.toFixed(2); // 2 decimal places
                  }}
                  titleColor={'white'}
                  titleStyle={{fontWeight: 'bold'}}
                />
                <Text style={{color: 'white', top: 4}}>Data Usage</Text>
              </View>
              {/* device detail container */}
              <View style={pageStyle.ContainerDeviceDetail}>
                <Text style={pageStyle.TextDeviceId}>Device ID</Text>
                <Text style={pageStyle.TextValueDeviceId}>
                  {usecaseState.device_id}
                </Text>
                <Text style={pageStyle.TextDeviceStatus}>Device Status</Text>
                <Text style={pageStyle.TextValueDeviceStatus}>
                  {usecaseState.status}
                </Text>
                <Text style={pageStyle.TextSignalStatus}>Signal Status</Text>
                <Text style={pageStyle.TextValueSignalStatus}>POOR</Text>
              </View>
            </View>
            {/*Sensor Gauge Container*/}
            <View style={pageStyle.SensorGaugeContainer}>
              <Text style={{color: 'black', fontSize: 20, fontWeight: '700'}}>
                Sensor
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  top: 15,
                  justifyContent: 'space-between',
                }}>
                {tempRef == null ? (
                  <ActivityIndicator
                    size="large"
                    color="white"
                    style={pageStyle.ActivityIndicator}
                  />
                ) : (
                  <SensorGauge
                    ref={tempRef}
                    value={usecaseState.temperature}
                    progressColor={'#27AE60'}
                    unit="C"
                    SensorName={'Temperature'}
                  />
                )}
                {/* batteryUsage gauge */}
                {batteryUsageRef == null ? (
                  <ActivityIndicator
                    size="large"
                    color="white"
                    style={pageStyle.ActivityIndicator}
                  />
                ) : (
                  <SensorGauge
                    ref={batteryUsageRef}
                    value={usecaseState.battery_usage}
                    progressColor={'#5D8FF0'}
                    unit="A"
                    SensorName={'Battery Usage'}
                  />
                )}
                {/* kwh usage */}
                {KWHUsageRef == null ? (
                  <ActivityIndicator
                    size="large"
                    color="white"
                    style={pageStyle.ActivityIndicator}
                  />
                ) : (
                  <SensorGauge
                    ref={KWHUsageRef}
                    value={usecaseState.kwh}
                    progressColor={'#FF0000'}
                    unit="KwH"
                    SensorName={'KwH'}
                  />
                )}
              </View>
            </View>
            {/* network info or detail container... */}
            <View style={pageStyle.CardNetworkDetailContainer}>
              <Text style={{color: 'black', fontSize: 20, fontWeight: '700'}}>
                Network Info
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  top: 10,
                }}>
                <View style={{flexDirection: 'column'}}>
                  <Text
                    style={{color: 'black', fontSize: 15, fontWeight: '600'}}>
                    Phone Number
                  </Text>
                  <Text
                    style={{color: 'black', fontSize: 15, fontWeight: '600'}}>
                    {usecaseState.phone_number}
                  </Text>
                </View>
                <View style={{flexDirection: 'column'}}>
                  <Text
                    style={{color: 'black', fontSize: 15, fontWeight: '600'}}>
                    Provider
                  </Text>
                  <Text
                    style={{color: 'black', fontSize: 15, fontWeight: '600'}}>
                    {usecaseState.provider}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  top: 20,
                }}>
                <View style={{flexDirection: 'column'}}>
                  <Text
                    style={{color: 'black', fontSize: 20, fontWeight: '600'}}>
                    Pulsa
                  </Text>
                  <Text
                    style={{color: 'black', fontSize: 21, fontWeight: '600'}}>
                    Rp {usecaseState.pulsa}
                  </Text>
                </View>
                <View style={{flexDirection: 'column'}}>
                  <Text style={{color: 'black'}}>IMEI</Text>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 15,
                      fontWeight: '600',
                      maxWidth: 75,
                    }}>
                    {usecaseState.imei}
                  </Text>
                </View>
              </View>
            </View>
            {/* TODO: unpair button */}
          </View>
        </>
      )}
      {/* container stop */}
    </View>
  );
};
const mapStateToProps = state => {
  return {
    stateGetDevicePair: state.GetDevicePairReducer,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getDevicePair: uuid => {
      dispatch(GetDevicePair(uuid));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(IoTMonitoringPage);
