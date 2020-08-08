import React, { createContext, useState, useEffect } from 'react';
import * as Facebook from 'expo-facebook';
import * as Google from 'expo-google-app-auth';
import Axios from 'axios';
import { Alert } from 'react-native';
import AsyncStorage, {  } from '@react-native-community/async-storage';

interface AuthContextData {
  authenticated: boolean,
  loading: boolean,
  facebookLogin: () => void,
  googleLogin: () => void
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
  accessToken: string
}

interface UserProps {
  name: string,
  email: string,
  profilePicture: string,
  token: string,
  tokenType: 'Google' | 'Facebook'
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const MainProvider: React.FC = ({ children }) => { 
  
  const [loading, setLoading] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState<UserProps>();

  async function signOut(){
    setLoading(true);
    await AsyncStorage.removeItem('TouringUserCredential');
    setAuthenticated(false);
    setLoading(false);
  }

  async function auth(user: UserProps){
    setLoading(true);
    const userString = JSON.stringify(user);
    await AsyncStorage.setItem('TouringUserCredential', userString);
    setAuthenticated(true);
    setLoading(false);
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
          
          const user: UserProps= {
            profilePicture,
            name: nameEmailReponse.data.name,
            email: nameEmailReponse.data.email,
            token: response.token,
            tokenType: 'Facebook'
          }  
          auth(user);
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
    const user: UserProps = {
      name: String(googleUser?.name),
      profilePicture: String(googleUser?.photoUrl),
      email: String(googleUser?.email),
      token: (response as GoogleResponse).accessToken,
      tokenType: 'Google'
    }
    auth(user)
    setLoading(false);
  }


  async function initAuth(){
    setLoading(true);
    const stringUserCredential = await AsyncStorage.getItem('TouringUserCredential');
    if(stringUserCredential){      
      const user = JSON.parse(stringUserCredential);
      setUser(user);
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
        googleLogin
      }
    }>
      {children}
    </AuthContext.Provider>
  )
}

export default MainProvider;
