import React from 'react';

//Library
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//Page
import Home from './src/Home/Home';
import Location from './src/Location/Location';
import ViewHistory from './src/History/ViewHistory';
import ManualInfo from './src/Location/ManualInfo';
import ChangeLanguage from './src/Language/ChangeLanguage';

export default function App() {
  const RootStack = createStackNavigator();
  const RootStackScreen = () => {
    return (
      <RootStack.Navigator screenOptions={{headerShown: false}}>
        <RootStack.Screen name="Home" component={Home} />
        <RootStack.Screen name="Location" component={Location} />
        <RootStack.Screen name="ViewHistory" component={ViewHistory} />
        <RootStack.Screen name="ManualInfo" component={ManualInfo} />
        <RootStack.Screen name="ChangeLanguage" component={ChangeLanguage} />
      </RootStack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  );
}
