import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Styles from './style'

const TouristSpotRegistration = () => {

  return (
    <>
      <View style={Styles.container}>
        <View style={Styles.containerTitle}>
          <Text style={Styles.title}>Cadastro de ponto Turístico</Text>
        </View>
        <View style={Styles.containerBox}>
          <View>
            <Text style={Styles.descriptionInput}>Nome do ponto turístico</Text>
            <TextInput
              style={Styles.inputText}
              placeholder={"Nome do ponto aqui"}
            />
          </View>
          <View>
            <Text style={Styles.descriptionInput}>Endereço</Text>
            <TextInput
              style={Styles.inputText}
              placeholder={"Endereço do ponto aqui"}
            />
          </View>
          <View>
            <Text style={Styles.descriptionInput}>Descrição</Text>
            <TextInput
              style={Styles.inputText}
              placeholder={"Descrição do ponto aqui"}
            />
          </View>
          <View>
            <Text style={Styles.descriptionInput}>Horários</Text>
            <TextInput
              style={Styles.inputText}
              placeholder={"Horários de funcionamento"}
            />
          </View>
          <TouchableOpacity style={Styles.button}>
            <Text style={Styles.buttonText}>Registrar</Text>
          </TouchableOpacity>

        </View>

      </View>
    </>
  );
}

export default TouristSpotRegistration;
