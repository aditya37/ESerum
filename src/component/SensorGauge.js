import React from 'react';
import {Text, View} from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';
const SensorGauge = React.forwardRef((props, ref) => {
  return (
    <View
      style={{
        flexDirection: 'column',
        justifyContent: 'center',
      }}>
      <CircularProgress
        ref={ref}
        value={props.value}
        initialValue={0}
        maxValue={10000}
        radius={50} // adjust the size of the progress circle.
        // duration={1000} // progress animation duration
        progressValueColor={props.progressColor}
        activeStrokeColor={props.progressColor}
        inActiveStrokeColor={"#A8B9C5"}
        title={props.unit}
        progressFormatter={value => {
          'worklet';
          return value.toFixed(2); // 2 decimal places
        }}
        titleColor={'black'}
        titleStyle={{fontWeight: 'bold'}}
      />
      <Text
        style={{
          color: 'black',
          alignSelf: 'center',
          top: 4,
          fontSize: 15,
          fontWeight: '700',
          textAlign: 'center',
          maxWidth: 100,
        }}>
        {props.SensorName}
      </Text>
    </View>
  );
});

export default SensorGauge;
