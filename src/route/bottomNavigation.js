import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from '@rneui/base';
import {HomePage, IoTMonitoringPage} from '../page';
const BottomNav = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <BottomNav.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#27AE60',
        tabBarInactiveTintColor: '#4F4F4F',
        // not show header in global
        headerShown: false,
        tabBarLabelStyle: {
          color: '#000000',
          fontSize: 12,
          fontWeight: '400',
          fontFamily: 'Roboto',
          bottom: 10,
        },
        tabBarStyle: {
          height: 65,
        },
      }}>
      <BottomNav.Screen
        name="navHome"
        component={HomePage}
        options={{
          tabBarLabel: 'Home',
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => {
            if (!focused) {
              return <Icon name="home" color="#BFBFBF" size={24} />;
            } else {
              return <Icon name="home" color="#27AE60" size={24} />;
            }
          },
        }}
      />
      <BottomNav.Screen
        name="navIotDevice"
        component={IoTMonitoringPage}
        options={{
          tabBarLabel: 'IoT Device',
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => {
            if (!focused) {
              return <Icon name="wifi" color="#BFBFBF" size={24} />;
            } else {
              return <Icon name="wifi" color="#27AE60" size={24} />;
            }
          },
        }}
      />
      <BottomNav.Screen
        name="navTopUp"
        component={HomePage}
        options={{
          tabBarLabel: 'Top Up',
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => {
            if (!focused) {
              return (
                <Icon name="account-balance-wallet" color="#BFBFBF" size={24} />
              );
            } else {
              return (
                <Icon name="account-balance-wallet" color="#27AE60" size={24} />
              );
            }
          },
        }}
      />
      <BottomNav.Screen
        name="navHistory"
        component={HomePage}
        options={{
          tabBarLabel: 'History',
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => {
            if (!focused) {
              return <Icon name="history" color="#BFBFBF" size={24} />;
            } else {
              return <Icon name="history" color="#27AE60" size={24} />;
            }
          },
        }}
      />
      <BottomNav.Screen
        name="navAccount"
        component={HomePage}
        options={{
          tabBarLabel: 'Account',
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => {
            if (!focused) {
              return <Icon name="person" color="#BFBFBF" size={24} />;
            } else {
              return <Icon name="person" color="#27AE60" size={24} />;
            }
          },
        }}
      />
    </BottomNav.Navigator>
  );
};
export default BottomNavigation;
