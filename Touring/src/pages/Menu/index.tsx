import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { colors } from '../../styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import style from '../Welcome/style';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

import { AuthContext } from '../../contexts/authContext';
const profile = require('../../../assets/profile.jpeg');

const PageNameHere = () => {

  const { signOut } = useContext(AuthContext);

  return(
    <View style={styles.container}>
      <StatusBar style="light"/>
      <View style={styles.topContent}>

        <View style={styles.rightContent}>
          <Image style={styles.image} source={profile}/>
        </View>

        <View style={styles.leftContent}>         
          <TouchableOpacity style={styles.param}>
            <Text style={styles.label}>Nome</Text>
            <Text style={styles.configText}>Filipe Martins Santos Moreira da Silva</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.param}>
            <Text style={styles.label}>Email</Text>
            <Text style={styles.configText}>martinsSnatos@gmail.com</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={signOut} style={styles.signOutButton}>           
            <Text style={styles.configText}>Sair</Text>
            <Feather name="log-out" color="#FFF" size={40} />
          </TouchableOpacity>
        </View>
        
      </View>

      <View>
        <TouchableOpacity style={styles.bottomButton}>
          <Text style={styles.bottomButtonText}>Meus Roteiros</Text>
          <Feather name="compass" color="#FFF" size={40} />
        </TouchableOpacity>

      </View>
    </View>
  );
}

export default PageNameHere;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: colors.blueDefault,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  topContent: {
    justifyContent: 'center',
    alignItems:'center'
  },
  leftContent:{
    width: widthPercentageToDP(100),
    paddingLeft: 10,
    marginTop: 10,
  },
  label: {
    color: '#BEBEBE'
  },
  param:{
    marginBottom: 20
  },
  signOutButton:{
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems:'center',
  },
  configText: {
    fontSize: 20,
    color: '#FFF',
    fontWeight: 'bold'
  },
  rightContent: {
    width: widthPercentageToDP(100),
    alignItems: 'center',
    marginTop: 20
  },
  image: {
    width: 180,
    height: 180,
    borderRadius: 100,
    marginLeft: 10
  },
  bottomContent: {

  },bottomButton:{
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor: '#3497C1',
    width: 250,
    marginBottom: 80,
    borderRadius: 100,
    height: 60
  },bottomButtonText:{
    marginRight: 10,
    color: colors.white,
    fontWeight: 'bold',

  }
})