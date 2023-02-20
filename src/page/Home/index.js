import {View, Text, ScrollView} from 'react-native';
import {DataTable} from 'react-native-paper';
import {HeaderBar} from '../../component';
import PageStyle from './PageStyle';
import mqttinstance from '../../mqtt';
import {DeviceEventEmitter} from 'react-native';
import {useEffect, useState} from 'react';

const HomePage = props => {
  useState;
  const [state, setstate] = useState({
    temperature: 0,
    electrical_usage: 0,
    rfid_value: '',
    saldo: 0,
  });
  useEffect(() => {
    mqttinstance._subscribe(
      '/user/monitoring/0b062996-10f0-434c-8d8c-128bbfacee37/device/iot.3f65ac60-f03c-40ab-bc0a-1bbbe965f68b',
      0,
    );
    DeviceEventEmitter.addListener(
      'subscribe_event_type_device_monitoring',
      payload => {
        console.log('from emiter', payload);
        const resp = JSON.parse(payload);
        setstate({
          ...state,
          saldo: resp.saldo,
          temperature: resp.temperature,
          electrical_usage: resp.kwh,
          rfid_value: resp.rfid_value,
        });
      },
    );
  }, []);
  return (
    <View style={PageStyle.Container}>
      <HeaderBar text="Hallo,User" />
      {/* content container start*/}
      <View style={PageStyle.Content}>
        {/* Card Debt start */}
        <View style={PageStyle.ContainerCard}>
          <View>
            <Text style={PageStyle.TextCardNumber}>Card Number</Text>
            <Text style={PageStyle.TextValCardNumber}>{state.rfid_value}</Text>
            <Text style={PageStyle.TextCardSaldo}>Saldo</Text>
            <Text style={PageStyle.TextValSaldo}>Rp. {state.saldo}</Text>
          </View>
          <View style={{marginLeft: 50}}>
            <Text style={PageStyle.TextElectricalUsage}>Electrical Usage</Text>
            <Text style={PageStyle.TextValElectricalUsage}>
              {state.electrical_usage} KWH
            </Text>
            <Text style={PageStyle.TextDeviceTemp}>Device Temp</Text>
            <Text style={PageStyle.TextValDeviceTemp}>
              {state.temperature} C
            </Text>
            <Text style={PageStyle.TextDeviceStatus}>Status</Text>
            <Text style={PageStyle.TextValDeviceStatus}>UNPLUGGED</Text>
          </View>
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
          </DataTable>
        </View>
        {/* History Transaction stop*/}
      </View>
      {/* content container stop*/}
    </View>
  );
};

export default HomePage;
