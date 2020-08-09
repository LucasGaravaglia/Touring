import React, { useContext } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar'

// import Login from './pages/Login';
import Welcome from './pages/Welcome';
import Videos from './pages/Videos';
import UserItinerary from './pages/UserItinerary';
import PointMap from './pages/PointMap';
import PointDetails from './pages/PointDetails';
import PointAttractions from './pages/PointAttractions';
import Point from './pages/Point';
import Menu from './pages/Menu';
import Comments from './pages/Comments';
import AttractionsDetails from './pages/AttractionsDetails';

// import AuthProvider, { AuthContext } from './contexts/authContext';

const Stack = createStackNavigator();

function Routes() {

<<<<<<< HEAD
  const { authenticated, loading } = useContext(AuthContext);
=======
  // const { authenticated, loading, firstLoginChecker, fisrtLoginChecked } = useContext(AuthContext);
>>>>>>> 1c4098cda45181f22ccc4dd0365cdb53aa0d14dc



  // if (loading)
  //   return (
  //     <View style={Styles.loadingContainer}>
  //       <ActivityIndicator color="#FFF" size={60} />
  //     </View>
  //   );


  // if (!authenticated)
  //   return (<Login />)

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Point" component={Point} />
      <Stack.Screen name="PointDetails" component={PointDetails} />
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Videos" component={Videos} />
      <Stack.Screen name="UserItinerary" component={UserItinerary} />
      <Stack.Screen name="PointMap" component={PointMap} />
      <Stack.Screen name="PointAttractions" component={PointAttractions} />
      <Stack.Screen name="Menu" component={Menu} />
      <Stack.Screen name="Comments" component={Comments} />
      <Stack.Screen name="AttractionsDetails" component={AttractionsDetails} />

<<<<<<< HEAD
  return(
    <Stack.Navigator initialRouteName="FindCity" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="FindCity" component={FindCity} />
      <Stack.Screen name="UserRegister" component={UserRegister} />
=======

>>>>>>> 1c4098cda45181f22ccc4dd0365cdb53aa0d14dc
    </Stack.Navigator>
  );
}

function Router() {
  return (
    <NavigationContainer>
      <StatusBar style='light' />
      {/* <AuthProvider> */}
      <Routes />
      {/* </AuthProvider> */}

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