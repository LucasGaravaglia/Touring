import React, { useContext} from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import Styles from "./style"
import { StackScreenProps } from '@react-navigation/stack';
import RouterDefinition from "../../RouterDefinition"
import { UserContext } from '../../contexts/userContext';
import Point from '../../../interfaces/Point'

const local = require("../../resources/LocalIcon.png")
const Restaurante = require("../../resources/RestauranteIcon.png")
const Map = require("../../resources/MapIcon.png")
const Hospedagem = require("../../resources/HospedagemIcon.png")

type Props = StackScreenProps<RouterDefinition, 'PointPage'>;
const PointPage = ({ route, navigation }: Props) => {

  const { updatePoints, points } = useContext(UserContext)

  function clickHandler(item: Point) {
    navigation.navigate('PointDetails', item)
  }

  return (
    <View style={Styles.container}>
      <FlatList
        onRefresh={updatePoints}
        showsVerticalScrollIndicator={false}
        data={points}
        renderItem={( {item} ) => {
          return (
            <TouchableOpacity
              style={Styles.containerSpot}
              onPress={() => clickHandler(item)}
            >
              <Image style={Styles.imagem} source={{ uri: item.linkImg }} />
              <View style={Styles.containerText}>
                <Text style={Styles.FirstLine}>
                  {item.name}
                </Text>
                <Text style={Styles.SecondLine}>
                  {item.rating}
                </Text>
                <Text style={Styles.ThirdLine}>
                  {item.state}
                </Text>
              </View>
            </TouchableOpacity>
          )
        }}
        numColumns={2}
        style={Styles.Flat}
      />
      <View style={Styles.containerOptions}>
        <View style={Styles.internalContainer}>
          <TouchableOpacity style={Styles.pressArea}>
            <Image source={local} />
          </TouchableOpacity>
          <Text style={Styles.text}>Pontos Turísticos</Text>
        </View>
        <View style={Styles.internalContainer}>
          <TouchableOpacity style={Styles.pressArea}>
            <Image source={Restaurante} />
          </TouchableOpacity>
          <Text style={Styles.text}>Restaurante</Text>
        </View>
        <View style={Styles.internalContainer}>
          <TouchableOpacity style={Styles.pressArea}>
            <Image source={Map} />
          </TouchableOpacity>
          <Text style={Styles.text}>Hotéis</Text>
        </View>
        <View style={Styles.internalContainer}>
          <TouchableOpacity style={Styles.pressArea}>
            <Image source={Hospedagem} />
          </TouchableOpacity>
          <Text style={Styles.text}>Mapa</Text>
        </View>
      </View>
    </View>
  );
}

export default PointPage;
