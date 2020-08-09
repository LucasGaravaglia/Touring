import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import Styles from './styles';
import { StackScreenProps } from '@react-navigation/stack';
import { Roboto_500Medium, useFonts, Roboto_400Regular } from '@expo-google-fonts/roboto';
import { Feather } from '@expo/vector-icons';
// import RouterDefinition from "../../RouterDefinition"


const data = {
  name: "Marco das três fronteiras",
  state: "Aberto - Fecha 18h",
  avaliation: 4,
  key: 5,
  description: "O Parque das Aves é um parque temático localizado na cidade de Foz do Iguaçu, no estado brasileiro do Paraná. Situado próximo às Cataratas do rio Iguaçu, o parque possui 16 hectares de mata nativa, com 1.500 animais entre aves, répteis e mamíferos, ",
  address: "Av. Gen. Meira, s/n - Jardim Eldorado, Foz do Iguaçu - PR, 85853-110",
  phone: "999087584",
  linkImg: "https://www.loumarturismo.com.br/passeios/imagens/00013/1923-show-de-luzes-e-aguas-marco-tres-frontei.jpg",
  attractions: [
    {
      img: "https://cdipg.s3.amazonaws.com/foz_do_iguacu/events/photos/000/000/098/show/ave.jpg?1556805411",
      description: "Quem visita Foz do Iguaçu não pode deixar de viver a experiência de conexão com a Mata Atlântica ",
      name: "Vista panoramica"
    },
    {
      img: "https://cdipg.s3.amazonaws.com/foz_do_iguacu/events/photos/000/000/098/show/ave.jpg?1556805411",
      description: "Quem visita Foz do Iguaçu não pode deixar de viver a experiência de conexão com a Mata Atlântica ",
      name: "vista panoramica"
    },
    {
      img: "https://cdipg.s3.amazonaws.com/foz_do_iguacu/events/photos/000/000/098/show/ave.jpg?1556805411",
      description: "Quem visita Foz do Iguaçu não pode deixar de viver a experiência de conexão com a Mata Atlântica ",
      name: "vista panoramica"
    },
    {
      img: "https://cdipg.s3.amazonaws.com/foz_do_iguacu/events/photos/000/000/098/show/ave.jpg?1556805411",
      description: "Quem visita Foz do Iguaçu não pode deixar de viver a experiência de conexão com a Mata Atlântica ",
      name: "vista panoramica"
    },
  ]


}
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

// type Props = StackScreenProps<RouterDefinition, 'PointDetails'>;
const PointAttractions = () => {
  // navigation.navigate("",)
  const [fontsLoaded] = useFonts({
    Roboto_500Medium,
    Roboto_400Regular
  });
  if (!fontsLoaded)
    return (
      <View style={Styles.loadingContainer}>
        <ActivityIndicator color="#FFF" size={60} />
      </View>
    );
  return (
    <View style={Styles.container}>
      <Image style={Styles.imagem} source={{ uri: data.linkImg }} />

      <View style={Styles.containerDetails}>

        <Text style={Styles.title}>
          {data.name}
        </Text>
        <View style={Styles.containerButtons}>
          <TouchableOpacity
            style={Styles.button}
          >
            <Text style={Styles.textButton}>Videos</Text>
            <Feather name="arrow-right-circle" color="#fff" size={25} />
          </TouchableOpacity>
          <TouchableOpacity
            style={Styles.button}
          >
            <Text style={Styles.textButton}>Comentários</Text>
            <Feather name="arrow-right-circle" color="#fff" size={25} />
          </TouchableOpacity>
        </View>
        <FlatList
          // onRefresh={updatePoints}
          showsVerticalScrollIndicator={false}
          data={data.attractions}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                style={Styles.containerSpot}
              // onPress={() => clickHandler(item)}
              >

                <Image style={Styles.imagemAttractions} source={{ uri: item.img }} />
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
