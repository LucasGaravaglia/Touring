import React, { useContext, useState } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import constants from 'expo-constants';
import { Feather } from '@expo/vector-icons';
import { useFonts } from '@expo-google-fonts/ubuntu';
import { Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import RootStackParamList from '../../RouterDefinition';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

import { AuthContext } from '../../contexts/authContext';

import { 
  View, 
  Text, 
  StyleSheet, 
  Image, 
  TouchableOpacity, 
  ActivityIndicator,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';


const logo = require('../../../assets/splash.png');
const facebookIcon = require('../../../assets/facebookIcon.png');
const googleIcon = require('../../../assets/google.png');


const LoginPage = () => {

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  });

  const { googleLogin, facebookLogin, loading } = useContext(AuthContext);
 

  if(loading || !fontsLoaded)
    return (
      <View style={Styles.loadingContainer}>
        <ActivityIndicator color="#FFF" size={60}/>
      </View>      
    );
 
  return(
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={Styles.container}>

        <TouchableOpacity style={Styles.langButton}>
          <Feather style={Styles.langIcon} name="globe" color="#727582" size={25} />
          <Text style={Styles.langButtonText}>Português BR</Text>        
        </TouchableOpacity>
        
        <Image source={logo} style={Styles.mainLogo} />

        <Text style={Styles.instrucctionsTitle}>
          Bem Vindo
        </Text>

        <Text style={Styles.instrucctionsText}>
          Faça login para continuar
        </Text>    

        <TouchableOpacity onPress={facebookLogin} style={Styles.facebookButton}>
          <Image style={Styles.facebookIcon} source={facebookIcon}/>
          <Text style={Styles.facebookButtonText}>Continuar com o Facebook</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={googleLogin} style={Styles.googleButton}>
          <Image style={Styles.googleIcon} source={googleIcon} />
          <Text style={Styles.googleButtonText}>Continuar com o Google</Text>
        </TouchableOpacity>

      </View>
    </TouchableWithoutFeedback>
  );
}

export default LoginPage;

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
  },
  langButton: {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
    marginTop: constants.statusBarHeight + 10
  },
  langButtonText:{
    color: '#FFF',
    fontSize: 16
  },
  langIcon:{
    marginRight: 5,
    color: '#FFF'
  },
  mainLogo: {    
    marginTop: heightPercentageToDP(7),
    width: widthPercentageToDP(100),
    height: heightPercentageToDP(30), 
  },
  instrucctionsTitle: {
    color: '#FFFFFF',
    fontSize: 25,
    fontFamily: 'Roboto_400Regular',
  },
  instrucctionsText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontFamily: 'Roboto_400Regular',
    marginBottom: heightPercentageToDP(5)
  },
  facebookButton: {
    marginTop: heightPercentageToDP(3),
    width: widthPercentageToDP(85),
    height: heightPercentageToDP(9),
    backgroundColor: '#4E598F',
    borderRadius: 100,
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: widthPercentageToDP(5)
  },
  facebookButtonText: {
    color: '#FFF',
    fontFamily: 'Roboto_700Bold',
    fontSize: 18
  },
  facebookIcon:{
    width: 40,
    height: 40,
    marginRight: 10
  },
  googleButton: {
    marginTop: heightPercentageToDP(3),
    width: widthPercentageToDP(85),
    height: heightPercentageToDP(9),
    backgroundColor: '#EA4335',
    borderRadius: 100,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: widthPercentageToDP(5)
  },
  googleButtonText: {
    color: '#FFF',
    fontFamily: 'Roboto_700Bold',
    fontSize: 18
  },
  googleIcon: {
    width: 40,
    height: 40,
    marginRight: 10
  }
});