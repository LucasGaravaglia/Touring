import React, { useContext } from 'react';
import { View, ActivityIndicator, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { Feather } from '@expo/vector-icons';

import Login from './pages/Login';
import Welcome from './pages/Welcome';
import Videos from './pages/Videos';
import UserItinerary from './pages/UserItinerary';
import PointMap from './pages/PointMap';
import PointDetails from './pages/PointDetails';
import PointAttractions from './pages/PointAttractions';
import PointPage from './pages/PointPage';
import Menu from './pages/Menu';
import Comments from './pages/Comments';
import AttractionsDetails from './pages/AttractionsDetails';

const logo = require('../assets/Touring.png');

import AuthProvider, { AuthContext } from './contexts/authContext';
import UserProvider from './contexts/userContext';

const Stack = createStackNavigator();

function Routes() {

  const { authenticated, loading } = useContext(AuthContext);

  if (loading)
    return (
      <View style={Styles.loadingContainer}>
        <ActivityIndicator color="#FFF" size={60} />
      </View>
    );
/*

  if (!authenticated)
    return (<Login />)
*/
  return (
    <Stack.Navigator initialRouteName="Welcome" >
      <Stack.Screen name="PointPage" component={PointPage} options={{headerRight:(headerLogo), headerTitle: (''), headerLeft: (headerIcon), headerStyle: { backgroundColor: '#1F8DBC'}}} />
      <Stack.Screen name="PointDetails" component={PointDetails} />
      <Stack.Screen name="Welcome" component={Welcome} options={{headerShown: false}}/>
      <Stack.Screen name="Videos" component={Videos} />
      <Stack.Screen name="UserItinerary" component={UserItinerary} />
      <Stack.Screen name="PointMap" component={PointMap} />
      <Stack.Screen name="PointAttractions" component={PointAttractions} />
      <Stack.Screen name="Menu" component={Menu} />
      <Stack.Screen name="Comments" component={Comments} />
      <Stack.Screen name="AttractionsDetails" component={AttractionsDetails} />

    </Stack.Navigator>
  );
}

function Router() {
  return (
    <NavigationContainer>
      <StatusBar style='dark' />
      <AuthProvider>
        <UserProvider>
          <Routes />
        </UserProvider>
      </AuthProvider>
    </NavigationContainer>
  );
}

const headerIcon = () => {
  return <Feather style={{marginLeft: 10}} name="menu" color="#FFF" size={30} />
}


const headerLogo = () => {
  return <Image style={{marginRight: 10}} source={logo}/>
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