import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Styles from './styles';
import { StackScreenProps } from '@react-navigation/stack';
// import RouterDefinition from "../../RouterDefinition"

const ArrowRight = require("../../resources/RightArrow.png")

const data = {
  name: "Marco das três fronteiras",
  state: "Aberto - Fecha 18h",
  avaliation: 4,
  key: 5,
  description: "O Parque das Aves é um parque temático localizado na cidade de Foz do Iguaçu, no estado brasileiro do Paraná. Situado próximo às Cataratas do rio Iguaçu, o parque possui 16 hectares de mata nativa, com 1.500 animais entre aves, répteis e mamíferos, ",
  address: "Av. Gen. Meira, s/n - Jardim Eldorado, Foz do Iguaçu - PR, 85853-110",
  phone: "999087584",
  linkImg: "https://www.loumarturismo.com.br/passeios/imagens/00013/1923-show-de-luzes-e-aguas-marco-tres-frontei.jpg"


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
  }
}

// type Props = StackScreenProps<RouterDefinition, 'PointDetails'>;
const PointDetails = () => {
  // navigation.navigate("",)
  return (
    <View style={Styles.container}>
      <Image style={Styles.imagem} source={{ uri: data.linkImg }} />

      <View style={Styles.containerDetails}>

        <Text style={Styles.title}>
          {data.name}
        </Text>
        <Text style={Styles.text}>
          {data.avaliation}
        </Text>
        <Text style={Styles.description}>
          {data.description}
        </Text>
        <View style={Styles.additionalContainer}>
          <Text style={Styles.additional}>
            {data.address}
          </Text>
          <Text style={Styles.additional}>
            Telefone: {data.phone}
          </Text>
          <Text style={Styles.additional}>
            {data.state}
          </Text>
        </View>
      </View>


      <TouchableOpacity
        style={Styles.button}
      >
        <Text style={Styles.textButton}>Atrações</Text>
        <Image source={ArrowRight} />
      </TouchableOpacity>



    </View>
  );
}

export default PointDetails;
