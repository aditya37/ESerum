import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import 'react-native-reanimated';
import {useCameraDevices, Camera} from 'react-native-vision-camera';

const ScanQr = props => {
  const [hasPermission, setHasPermission] = React.useState(false);
  const devices = useCameraDevices();
  const device = devices.back;

  React.useEffect(() => {
    (async () => {
      const status = await Camera.requestCameraPermission();
      setHasPermission(status === 'authorized');
    })();
  }, []);

  const {value} = props;
  return (
    device != null &&
    hasPermission && (
      <View style={CameraStyle.CameraContainer}>
        <Camera
          device={device}
          isActive={true}
          frameProcessorFps="auto"
          frameProcessor={value}
          style={{height: '70%', width: '100%'}}
        />
        {/* return barcodes value to props */}
      </View>
    )
  );
};

const CameraStyle = StyleSheet.create({
  CameraContainer: {
    width: '80%',
    top: 65,
    height: 500,
  },
});
export default ScanQr;
