import React from 'react';
import { View, Text, Image } from 'react-native';
import Styles from './styles';
import { StackScreenProps } from '@react-navigation/stack';
import RouterDefinition from "../../../RouterDefinition"



type Props = StackScreenProps<RouterDefinition, 'TouristSpotAttractions'>;
const TouristSpotAttractions = ({ route, navigation }: Props) => {
  // navigation.navigate("",)
  return (
    <View style={Styles.container}>
      <Image style={Styles.container} source={{ uri: route.params.linkImg }} />
      <View style={Styles.container}>
        <Text style={Styles.container}>
          {route.params.name}
        </Text>
        <Text style={Styles.container}>
          {route.params.avaliation}
        </Text>
        <Text style={Styles.container}>
          {route.params.description}
        </Text>
        <Text style={Styles.container}>
          {route.params.address}
        </Text>
        <Text style={Styles.container}>
          Telefone: {route.params.phone}
        </Text>
        <Text style={Styles.container}>
          {route.params.state}
        </Text>
      </View>
    </View>
  );
}

export default TouristSpotAttractions;
