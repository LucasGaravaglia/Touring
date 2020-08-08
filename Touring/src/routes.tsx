import React, { useContext } from 'react';
import { View, ActivityIndicator, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar'

import FindCity from './pages/client/UserItinerary';
import UserRegister from './pages/client/UserRegister';
import Login from './pages/Login';

import AuthProvider, { AuthContext } from './contexts/authContext';

const Stack = createStackNavigator();

function Routes(){

  const { authenticated, loading, firstLoginChecker, fisrtLoginChecked } = useContext(AuthContext);


  if(loading)
    return (      
      <View style={Styles.loadingContainer}>
        <ActivityIndicator color="#FFF" size={60}/>
      </View>   
    );

  if(!authenticated)
    return (<Login />);

  if(!fisrtLoginChecked)
    firstLoginChecker();

  return(
    <Stack.Navigator initialRouteName="FindCity" screenOptions={{ headerShown: false }}>
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