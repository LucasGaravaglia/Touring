import React, { useContext } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar'

import UserRegister from './pages/PointDetails';

import Login from './pages/Login';

import AuthProvider, { AuthContext } from './contexts/authContext';
import UserProvider from './contexts/userContext';
const Stack = createStackNavigator();

function Routes() {

  const { authenticated, loading, firstLoginChecker, fisrtLoginChecked } = useContext(AuthContext);

  if (loading)
    return (
      <View style={Styles.loadingContainer}>
        <ActivityIndicator color="#FFF" size={60} />
      </View>
    );

  if (!authenticated)
    return (<Login />)

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="UserRegister" component={UserRegister} />
    </Stack.Navigator>
  );
}

function Router() {
  return (
    <NavigationContainer>
      <StatusBar style='light' />
      <AuthProvider>
        <UserProvider>
          <Routes />
        </UserProvider>
      </AuthProvider>
    </NavigationContainer>
  );
}

export default Router;



const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F8DBC',
    alignItems: 'center',
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: '#1F8DBC',
    alignItems: 'center',
    justifyContent: 'center'
  }
});