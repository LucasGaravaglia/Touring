import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import Styles from './styles';
import { StackScreenProps } from '@react-navigation/stack';
import { Roboto_500Medium, useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Feather } from '@expo/vector-icons';
import RouterDefinition from "../../RouterDefinition"

const atra1 = require('../../../assets/atra1.png');
const atra2 = require('../../../assets/ata2.png');
const atra3 = require('../../../assets/atra3.png');
const atra4 = require('../../../assets/atra1.png');

const data = [
  
    { 
      key: 1,
      img: atra1,
      description: "Quem visita Foz do Iguaçu não pode deixar de viver a experiência de conexão",
      name: "Tour Historico"
    },
    {
      key: 2,
      img: atra2,
      description: "Quem visita Foz do Iguaçu não pode deixar de viver a experiência de conexão",
      name: "Vista interna"
    },
    {
      key: 3,
      img: atra3,
      description: "Quem visita Foz do Iguaçu não pode deixar de viver a experiência de conexão",
      name: "vista panoramica"
    },
    {
      key: 4,
      img: atra4,
      description: "Quem visita Foz do Iguaçu não pode deixar de viver a experiência de conexão",
      name: "Paseio explorador"
    },
  ]



interface PointProps {
  item: {
    key: number,
    linkImg: string,
    avaliation: number,
    state: string,
    name: string,
    description: string,
    address: string,
    phone: string
    attractions: [
      {
        img: string,
        description: string,
        name: string
      }
    ]
  }
}

 type Props = StackScreenProps<RouterDefinition, 'PointAttractions'>;
const PointAttractions = ({ route, navigation } : Props) => {
  const [fontsLoaded] = useFonts({
    Roboto_500Medium,
    Roboto_400Regular,
    Roboto_700Bold
  });
  if (!fontsLoaded)
    return (
      <View style={Styles.loadingContainer}>
        <ActivityIndicator color="#FFF" size={60} />
      </View>
    );
  return (
    <View style={Styles.container}>
      <Image style={Styles.imagem} source={{ uri: route.params.linkImg }} />

      <View style={Styles.containerDetails}>

        <Text style={Styles.title}>
          {route.params.name}
        </Text>
        <View style={Styles.containerButtons}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Videos')}
            style={Styles.button}
          >
            <Text style={Styles.textButton}>Videos</Text>
            <Feather name="arrow-right-circle" color="#fff" size={25} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Videos')}
            style={Styles.button}
          >
            <Text style={Styles.textButton}>Comentários</Text>
            <Feather name="arrow-right-circle" color="#fff" size={25} />
          </TouchableOpacity>
        </View>
        <FlatList
          // onRefresh={updatePoints}
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                style={Styles.containerSpot}
              
              >

                <Image style={Styles.imagemAttractions} source={item.img} />
                <View style={Styles.containerText}>

                  <View style={Styles.containerPlusAttractions}>
                    <Text style={Styles.titleInformation}>
                      {item.name}
                    </Text>
                    <TouchableOpacity style={Styles.Icon}>
                      <Feather name="plus-circle" color="#000" size={15} />
                    </TouchableOpacity>
                  </View>

                  <Text style={Styles.descriptionAttractions}>
                    {item.description}
                  </Text>
                </View>
              </TouchableOpacity>
            )
          }}
          numColumns={2}
        // style={Styles.Flat}
        />

      </View>
    </View>
  );
}

export default PointAttractions;
