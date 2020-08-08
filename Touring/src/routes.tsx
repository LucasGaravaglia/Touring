import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar'

import FindCity from './pages/client/FindCity';
import UserRegister from './pages/client/UserRegister';

import Login from './pages/Login';

import AuthProvider, { AuthContext } from './contexts/authContext';

const Stack = createStackNavigator();

function Routes(){

  const { authenticated } = useContext(AuthContext);

  if(!authenticated)
    return (<Login />)

  return(
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="FindCity" component={FindCity} />
      <Stack.Screen name="UserRegister" component={UserRegister} />
    </Stack.Navigator>
  );
}


function Router() {
  return (
    <NavigationContainer>
      <StatusBar style='light'/>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}

export default Router;