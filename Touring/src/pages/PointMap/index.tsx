import React, { useState, useEffect, useContext } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity, Keyboard, TouchableWithoutFeedback} from 'react-native';
import Constants from 'expo-constants';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { Feather } from '@expo/vector-icons';
import { StackScreenProps } from '@react-navigation/stack';
import testData from '../../../data/pontosTuristicos';

import RouterDefinition from '../../RouterDefinition';
import { AuthContext } from '../../contexts/authContext';

interface ItemProps  {
  adress: string,
  schedule: string,
  pictureUrl: string,
  name: string,
  latitude: number,
  longitude: number,
  id: number
}

interface RenderItem {
  item: ItemProps
}


type Props = StackScreenProps<RouterDefinition, 'UserItinerary'>;
const PointMap = ({ route, navigation }: Props) => {

  const { signOut } = useContext(AuthContext);
  
  const initialRegion = {
    latitude: -25.5427,
    longitude: -54.5827,
    latitudeDelta: 0.5,
    longitudeDelta: 0.2,
  }


  const [ locationToShow, setlocationToShow] = useState(initialRegion); 

  

  function handleChangePoint(lat: number, long: number){
    setlocationToShow({
      ...locationToShow,
      latitude: lat,
      longitude:long
    })
  } 

  


  return (
    <View style={styles.container}>

      <View style={styles.headerContainer}>
        <View style={styles.header}>

          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Feather style={styles.menuIcon} name="arrow-left" size={40} color='#FFF'/>
          </TouchableOpacity>            

          <View style={styles.leftHeaderContent}>
            <Text style={styles.headerTitle}>
              Explorador
            </Text>   
            <Feather style={styles.menuIcon} name="compass" size={40} color='#FFF'/>
          </View>
               
        </View>
      </View>

      
      <TouchableWithoutFeedback style={styles.mapStyle} onPress={() => Keyboard.dismiss()}>
        <MapView  style={styles.mapStyle} initialRegion={initialRegion} region={locationToShow} showsUserLocation={true}>
          {
            testData.map( p => {
              return(
                <Marker key={p.id}
                  coordinate={{ latitude: p.latitude, longitude: p.longitude }}
                  title={p.name}
                  description={p.adress}
                />
              );
            })
          }

        </MapView>
      </TouchableWithoutFeedback>

      <View style={styles.bottomListContainer}>

        <FlatList<ItemProps> 
          data={testData}
          keyExtractor={ item => String(item.id)}
          renderItem={({item})=> {
            return (
              <TouchableOpacity onPress={() => handleChangePoint(item.latitude, item.longitude)} style={styles.listItem}>
                <View style={styles.listTextContainer}>
                  <Text style={styles.itemTitle}>{item.name}</Text>
                  <Text style={styles.itemAdress}>{item.adress}</Text>
                  <Text style={styles.itemSchedule}>{item.schedule}</Text>
                </View>
                <Image style={styles.itemImage} source={{uri: item.pictureUrl}}/>
                <Feather style={styles.menuIcon} name="trash-2" size={30} color='#FFF'/>
              </TouchableOpacity>
            )
          }}
        />       
      </View>           
    </View>
  );

}

export default PointMap;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F8DBC',
    alignItems: 'center',
    justifyContent: 'center',
    width: widthPercentageToDP(100),
    height: heightPercentageToDP(100),
    paddingTop: Constants.statusBarHeight
  },
  mapStyle: {
    flex: 1,
    width: widthPercentageToDP(100),
    height: heightPercentageToDP(100)
  },
  listItem: {
    width: '100%',
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderBottomColor: '#FFF',
    borderBottomWidth: 1
  },
  listTextContainer: {
    width: widthPercentageToDP(60),
  },
  itemTitle: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold'
  },  
  itemAdress: {
    color: '#FFF'
  },
  itemSchedule: {
    color: '#FFF',
    fontWeight: 'bold'
  },
  itemImage: {
    width: 75,
    height: 75,
    borderRadius: 10
  },
  bottomListContainer: {
    flexDirection: 'row',
    width: widthPercentageToDP(100),
    height: heightPercentageToDP(30),
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  leftHeaderContent:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContainer: {

    width: widthPercentageToDP(100),
    height: heightPercentageToDP(10),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  header:{
    width: widthPercentageToDP(100),
    flexDirection: 'row',
    alignItems:'flex-end',
    justifyContent:'space-between',
    paddingRight: 10,
    paddingTop: 10
  },
  headerTitle: {
    color:'#FFF',
    fontSize: 25
  },
  instructionText:{
    color:'#FFF',
    fontSize: 15
  },
  inputText:{
    width: '80%'
  },
  menuIcon: {
    marginLeft: 5,
    marginTop: 5
  }
});