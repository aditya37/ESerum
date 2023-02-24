import {View, Text} from 'react-native';
import {useEffect} from 'react';
import {connect} from 'react-redux';
import {DataTable} from 'react-native-paper';
import {useIsFocused} from '@react-navigation/native';
import {HeaderBar, AlertDialog} from '../../component';
import PageStyle from './PageStyle';
import {GetDevicePair} from '../../redux/action/get_device_status';
import homepageUsecase from './usecase';

const HomePage = props => {
  const {_getDevicePairStatus, _subscribeDeviceMonitoring, usecaseState} =
    homepageUsecase(props);

  // refresh if bottom navigation focused/change
  const isFocused = useIsFocused();
  useEffect(() => {
    _getDevicePairStatus();
    _subscribeDeviceMonitoring();
  }, [isFocused]);
  return (
    <View style={PageStyle.Container}>
      <HeaderBar text="Hallo,User" type="home" />
      {/* content container start*/}
      <View style={PageStyle.Content}>
        {/* Card Debt start */}
        <View style={PageStyle.ContainerCard}>
          {/* alert user not paired to device */}
          {!props.stateGetDevicePair.is_paired_device &&
          !props.stateGetDevicePair.is_paired_rfid ? (
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: '#FFFFFF',
                  fontSize: 19,
                  fontWeight: '500',
                }}>
                User Not Paired To IoT Device
              </Text>
              <Text
                style={{
                  color: '#FFFFFF',
                  fontSize: 15,
                }}>
                Please Pair it..
              </Text>
            </View>
          ) : (
            // if device paired...
            <>
              <View>
                <Text style={PageStyle.TextCardNumber}>Card Number</Text>
                <Text style={PageStyle.TextValCardNumber}>
                  {usecaseState.rfid_value}
                </Text>
                <Text style={PageStyle.TextCardSaldo}>Saldo</Text>
                <Text style={PageStyle.TextValSaldo}>
                  Rp. {usecaseState.saldo}
                </Text>
              </View>
              <View style={{marginLeft: 50}}>
                <Text style={PageStyle.TextElectricalUsage}>
                  Electrical Usage
                </Text>
                <Text style={PageStyle.TextValElectricalUsage}>
                  {usecaseState.electrical_usage} KWH
                </Text>
                <Text style={PageStyle.TextDeviceTemp}>Device Temp</Text>
                <Text style={PageStyle.TextValDeviceTemp}>
                  {usecaseState.temperature} C
                </Text>
                <Text style={PageStyle.TextDeviceStatus}>Status</Text>
                <Text style={PageStyle.TextValDeviceStatus}>UNPLUGGED</Text>
              </View>
            </>
          )}
        </View>
        {/* Card Debt stop */}
        {/* History Transaction start*/}
        <View
          style={{
            flexDirection: 'column',
            top: 50,
            width: 320,
            marginLeft: 30,
            marginRight: 20,
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 20,
              fontWeight: '800',
              fontStyle: 'normal',
              fontFamily: 'Roboto',
            }}>
            Transaction History
          </Text>
          {/* table */}
          <DataTable style={{top: 10}}>
            <DataTable.Header>
              <DataTable.Title>
                <Text
                  style={{
                    fontWeight: '400',
                    fontFamily: 'Roboto',
                    fontStyle: 'normal',
                    fontSize: 15,
                  }}>
                  Datetime
                </Text>
              </DataTable.Title>
              <DataTable.Title numeric>
                <Text
                  style={{
                    fontWeight: '400',
                    fontFamily: 'Roboto',
                    fontStyle: 'normal',
                    fontSize: 15,
                  }}>
                  Nominal
                </Text>
              </DataTable.Title>
              <DataTable.Title numeric>
                <Text
                  style={{
                    fontWeight: '400',
                    fontFamily: 'Ubuntu',
                    fontStyle: 'normal',
                    fontSize: 15,
                  }}>
                  KwH
                </Text>
              </DataTable.Title>
              <DataTable.Title numeric>
                <Text
                  style={{
                    fontWeight: '400',
                    fontFamily: 'Roboto',
                    fontStyle: 'normal',
                    fontSize: 15,
                  }}>
                  Status
                </Text>
              </DataTable.Title>
            </DataTable.Header>
            {/* TODO: Set data with endpoint */}
            {/* SHOW Alert no data */}
            <DataTable.Row>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{color: 'black', fontSize: 15}}>No Data</Text>
              </View>
            </DataTable.Row>
            {/*             
            TODO:Parse row and cell in tabel
            <DataTable.Row>
              <DataTable.Cell>2022-01-11 11:00</DataTable.Cell>
              <DataTable.Cell>Rp 11.000</DataTable.Cell>
              <DataTable.Cell numeric>6.0</DataTable.Cell>
              <DataTable.Cell numeric>Paid</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>2022-01-11 11:00</DataTable.Cell>
              <DataTable.Cell>Rp 11.000</DataTable.Cell>
              <DataTable.Cell numeric>6.0</DataTable.Cell>
              <DataTable.Cell numeric>Paid</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>2022-01-11 11:00</DataTable.Cell>
              <DataTable.Cell>Rp 11.000</DataTable.Cell>
              <DataTable.Cell numeric>6.0</DataTable.Cell>
              <DataTable.Cell numeric>Paid</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>2022-01-11 11:00</DataTable.Cell>
              <DataTable.Cell>Rp 11.000</DataTable.Cell>
              <DataTable.Cell numeric>6.0</DataTable.Cell>
              <DataTable.Cell numeric>Paid</DataTable.Cell>
            </DataTable.Row> */}
          </DataTable>
        </View>
        {/* History Transaction stop*/}
      </View>
      {/* content container stop*/}
    </View>
  );
};
// redux mapping...
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
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
