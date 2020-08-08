import React, { useState, useEffect } from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, TouchableWithoutFeedback} from 'react-native';
import Constants from 'expo-constants';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { Feather } from '@expo/vector-icons';

import municipios from '../../../../data/municipios.json';

interface CitySearchProps {
  name: string,
  code: number
}

interface CityToShowProps {
  name: string,
  code: number,
  latitude: number,
  longitude: number
}

interface IBGECitiesProps{
  codigo_ibge :number,
	nome : string,
	latitude : number,
	longitude :number,
	capital : boolean,
	codigo_uf: number,
}


const FindCity = () => {


  const [search, setSearch] = useState('');
  const [ Searchflag, setSearchFlag] = useState(false);
  const [ citySearch, setCitySearch] = useState<IBGECitiesProps[]>();
  const [ locationToShow, setlocationToShow] = useState({
    latitude: -23.5329,
    longitude: -46.6395,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });


  function handleSearch (){
    const filtered = municipios.filter(m => {
      return m.nome.toLowerCase().includes(search.toLowerCase());
    });

    let newSearchValues:IBGECitiesProps[] = [];

    for(let i = 0; i < 10; i++){
      if(filtered[i]){
        newSearchValues.push(filtered[i]);
      }
    }
    setCitySearch(newSearchValues);
      
  }

  function handleLocationChange(city: IBGECitiesProps){
    setlocationToShow({
      ...locationToShow,
      latitude: city.latitude,
      longitude: city.longitude
    });
  }

  useEffect(() => {
    if(search.length > 0){
      setSearchFlag(true);
      handleSearch();
    }      
    else{
      setSearchFlag(false);
    }
      
  }, [search]);

  useEffect(() => {
    if(locationToShow){
      setSearchFlag(false);
      setSearch('');
    }
  },[locationToShow])


  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <View style={styles.menuAndInstructions}>
          <TouchableOpacity>
            <Feather style={styles.menuIcon} name="menu" size={40} color='#FFF'/>
          </TouchableOpacity>
          
          <View style={styles.textContainer}>
            <Text style={styles.instructionTitle}>
              Para começar
            </Text>
            <Text style={styles.instructionText}>
              Insira a cidade que você deseja visitar
            </Text>
          </View>
         
        </View>

        <View style={styles.searchBar}>
        <TextInput onChangeText={setSearch} style={styles.inputText} placeholder="Cidade aqui..."/>
          <Feather name="search" size={25}/>
        </View>

      </View>

      {
        Searchflag
        ? (
            <View style={styles.sugestionsContainer}>
              {
                citySearch?.map( c => {
                  return (
                    <TouchableOpacity onPress={() => handleLocationChange(c)} key={c.codigo_ibge} style={styles.sugestionBox}>
                      <Text style={styles.sugestionText}>{c.nome}</Text>
                    </TouchableOpacity>
                  )
                })
              }
              
            </View>
          )
        : (
            <TouchableWithoutFeedback style={styles.mapStyle} onPress={() => Keyboard.dismiss()}>
              <MapView style={styles.mapStyle} region={locationToShow}/>
            </TouchableWithoutFeedback>
          )
      }      
    </View>
  );

}

export default FindCity;



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
  sugestionsContainer: {
    flex: 1,
    width: widthPercentageToDP(100),
    height: heightPercentageToDP(100),
    backgroundColor: '#ECECEC'
  },
  sugestionBox:{
    paddingLeft: 10,
    justifyContent: 'center',
    height: 60,
    borderBottomWidth: 0.5,
    borderBottomColor: '#A4A4A4'
  },
  sugestionText: {

  },
  searchContainer: {
    width: widthPercentageToDP(100),
    height: heightPercentageToDP(20),
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  searchBar: {
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    width: widthPercentageToDP(85),
    height: heightPercentageToDP(7),
    borderRadius: 100,
    marginBottom: 15
  },
  menuAndInstructions:{
    width: widthPercentageToDP(100),
    flexDirection: 'row',
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: widthPercentageToDP(100),
    paddingRight: widthPercentageToDP(22),
    marginTop: 8
  },
  instructionTitle: {
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