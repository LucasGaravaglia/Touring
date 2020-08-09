import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import Styles from './styles';
import { StackScreenProps } from '@react-navigation/stack';
import { Roboto_500Medium, useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Feather } from '@expo/vector-icons';
// import RouterDefinition from "../../RouterDefinition"


const data = {
  img: "https://cdipg.s3.amazonaws.com/foz_do_iguacu/events/photos/000/000/098/show/ave.jpg?1556805411",
  description: "A visita panorâmica é um passeio feito em ônibus de dois andares, com a parte de cima aberta para melhor visualização da natureza.",
  name: "Vista panoramica",
  value: "20,00RS Inteira e 10,00RS meia.",
  tourDuration: "1H 30M",
  schedule: "Seg - Sex , 09:00 - 15:00"
}



// type Props = StackScreenProps<RouterDefinition, 'PointDetails'>;
const AttractionsDetails = () => {
  // navigation.navigate("",)
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
      <Image style={Styles.imagem} source={{ uri: data.img }} />

      <Text style={Styles.title}>
        {data.name}
      </Text>

      <View style={Styles.containerButtons}>
        <TouchableOpacity
          style={Styles.button}
        >
          <Text style={Styles.textButton}>Videos</Text>
          <Feather name="arrow-right-circle" color="#fff" size={30} />
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.button}
        >
          <Text style={Styles.textButton}>Comentários</Text>
          <Feather name="arrow-right-circle" color="#fff" size={30} />
        </TouchableOpacity>
      </View>

      <View style={Styles.containerDetails}>
        <Text style={Styles.textDefault}>{data.description}</Text>
      </View>

      <View style={Styles.containerDetails}>
        <Text style={[Styles.textSecundary]}>Valor do ingresso: </Text>
        <Text style={Styles.textDefault}>{data.value}</Text>
        <Text style={[Styles.textSecundary]}>Duração do passeio: </Text>
        <Text style={Styles.textDefault}>{data.tourDuration}</Text>
      </View>

    </View>
  );
}

export default AttractionsDetails;
