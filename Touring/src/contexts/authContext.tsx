import React, { createContext, useState, useEffect } from 'react';
import * as Facebook from 'expo-facebook';
import * as Google from 'expo-google-app-auth';
import Axios from 'axios';
import { Alert } from 'react-native';
import AsyncStorage, {  } from '@react-native-community/async-storage';

import api from '../../services/api';


interface AuthContextData {
  authenticated: boolean,
  loading: boolean,
  facebookLogin: () => void,
  googleLogin: () => void,
  signOut: () => void,
  credential?: credentialProps
}

interface GoogleResponse {
  user?:  {
    email:string,
    familyName:string,
    givenName:string,
    id:string,
    name:string,
    photoUrl:string,
  },
  type: string,
  accessToken: string,
}

interface credentialProps {
  name: string,
  email: string,
  profilePicture: string,
  token: string,
  tokenType?: 'Google' | 'Facebook'
}

interface User {
  user_token: string,
  user_first_login: number,
  user_id: number,
  user_firstname: string,
  user_lastname: string,
  user_cpf: string,
  user_phone: string,
  user_address: string,
  user_email: string,
  user_image: string,
  user_type: number,
  user_creation_datetime: string,
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const MainProvider: React.FC = ({ children }) => { 
  
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const [credential, setCredential] = useState<credentialProps>();
  const [userToken, setUserToken] = useState('');
  
  async function signOut(){
    await AsyncStorage.removeItem('TouringToken');
    setAuthenticated(false);
  }  

  async function auth(user: credentialProps){

    var data = new FormData();

    data.append('name', user.name);
    data.append('email', user.email);
    data.append('user_image', user.profilePicture);
    data.append('login_method', String(user.tokenType));    

    try {
      const response = await api.post('/login.php', data);
      setUserToken(response.data[0].token);
      console.log('Token aqui: ',response.data)
      await AsyncStorage.setItem('TouringToken', response.data[0].token);
    } catch (error) {
      console.log(error);
    }
  }

  async function facebookLogin() {
    setLoading(true);
    try {

      await Facebook.initializeAsync('296767771554939');

      const response = await Facebook.logInWithReadPermissionsAsync({permissions: ['public_profile', 'email']});
            
      if (response.type === 'success') {
        
        const res = await  Axios.get(`https://graph.facebook.com/me?access_token=${response.token}`);
        
        if(res.data){
          const nameEmailReponse = await Axios.get(`https://graph.facebook.com/${res.data.id}?fields=id,name,email&access_token=${response.token}`)
          const profileResponse = await Axios.get(`https://graph.facebook.com/${res.data.id}/picture?type=large`)
          const profilePicture = profileResponse.request.responseURL;
          
          const user: credentialProps= {
            profilePicture,
            name: nameEmailReponse.data.name,
            email: nameEmailReponse.data.email,
            token: response.token,
            tokenType: 'Facebook'
          }
          await auth(user);
          setCredential(user);
          setAuthenticated(true);
        }else{
          throw new Error("Cant get data from Facebook"); 
        }
      } else {
        throw new Error("Cant login with Facebook");        
      }     
    } catch ({ message }) {
      Alert.alert(`Não foi possível logar no momento`);
    }
   
    setLoading(false);      
  }

  async function googleLogin(){
    setLoading(true);

    const config = {
      androidClientId:'382194043675-ma176djt2pkabkslcqlibjadu0tfonqi.apps.googleusercontent.com',
      sucess: ['profile', 'email']
    }
    const response = await Google.logInAsync(config);
    const googleUser = (response as GoogleResponse).user ;
    const user: credentialProps = {
      name: String(googleUser?.name),
      profilePicture: String(googleUser?.photoUrl),
      email: String(googleUser?.email),
      token: (response as GoogleResponse).accessToken,
      tokenType: 'Google'
    }


    if(response.type !== 'cancel'){
      await auth(user);
      setCredential(user);
      setAuthenticated(true);
    }
      
    setLoading(false);
  }

  async function verifyToken(tok: string){

    var data = new FormData();
    data.append('token', tok);

    const response = await api.post('/login', data);
    if(response){

      
      setCredential({
        name: response.data[0].user_firstname,
        email: response.data[0].user_email,
        profilePicture: response.data[0].user_image,
        token: tok
      });

     
      return true
    }      
    return false;
  }


  async function initAuth(){

    const storagedToken = await AsyncStorage.getItem('TouringToken');

    if(storagedToken){      
      const tokenIsValid = verifyToken(storagedToken);
      if(tokenIsValid)
        setAuthenticated(true);
    }
    
    setLoading(false);    
  }

  useEffect(() => {
    initAuth();
  }, []);

  return (
    <AuthContext.Provider value={
      {
        authenticated,
        loading,
        facebookLogin,
        googleLogin,
        signOut,
        credential
      }
    }>
      {children}
    </AuthContext.Provider>
  )
}

export default MainProvider;
