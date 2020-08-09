
import React from 'react';
import { View, Text, Image, ActivityIndicator } from 'react-native';
import Styles from "./style";
import { Rancho_400Regular, useFonts } from '@expo-google-fonts/rancho';
import { colors } from "../../styles"

const Logo = require("../../../assets/splash.png")
const Marker = require("../../resources/Local.png")
const Restaurante = require("../../resources/Restaurante.png")
const Hospedagem = require("../../resources/Hospedagem.png")


const Welcome = () => {

  const [fontsLoaded] = useFonts({
    Rancho_400Regular
  });
  if (!fontsLoaded)
    return (
      <View style={Styles.loadingContainer}>
        <ActivityIndicator color="#FFF" size={60} />
      </View>
    );

  return (
    <View style={Styles.container}>
      <View style={Styles.topo}>
        <Image style={Styles.logo} source={Logo} />
        <Text style={Styles.topText}>O que você está procurando na nossa cidade?</Text>
      </View>
      <View style={Styles.containerOptions}>
        <View style={Styles.TouristSpot}>
          <Image source={Marker} />
          <Text style={Styles.IndicatorText}>Ponto Turístico</Text>
        </View>
        <View style={[Styles.TouristSpot, { backgroundColor: colors.blueDefault }]}>
          <Image source={Restaurante} />
          <Text style={Styles.IndicatorText}>Restaurantes</Text>
        </View>
        <View style={Styles.TouristSpot}>
          <Image source={Hospedagem} />
          <Text style={Styles.IndicatorText}>Hospedagem</Text>
        </View>
      </View>
    </View>
  );
}

export default Welcome;

