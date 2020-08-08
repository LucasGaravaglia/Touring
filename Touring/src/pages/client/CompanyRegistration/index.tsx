import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Styles from './style'

const CompanyRegistration = () => {

  return (
    <>
      <View style={Styles.container}>
        <View style={Styles.containerTitle}>
          <Text style={Styles.title}>Cadastro de empresas</Text>
        </View>
        <View style={Styles.containerBox}>
          <View>
            <Text style={Styles.descriptionInput}>Nome da empresa</Text>
            <TextInput
              style={Styles.inputText}
              placeholder={"Digite o nome aqui"}
            />
          </View>
          <View>
            <Text style={Styles.descriptionInput}>Endereço</Text>
            <TextInput
              style={Styles.inputText}
              placeholder={"Endereço da empresa aqui"}
            />
          </View>
          <View>
            <Text style={Styles.descriptionInput}>Cnpj</Text>
            <TextInput
              style={Styles.inputText}
              placeholder={"Digite o CNPJ aqui"}
            />
          </View>
          <View>
            <Text style={Styles.descriptionInput}>Descrição</Text>
            <TextInput
              style={Styles.inputText}
              placeholder={"Digite a descrição aqui"}
            />
          </View>
          <View>
            <Text style={Styles.descriptionInput}>Email para contato</Text>
            <TextInput
              style={Styles.inputText}
              placeholder={"Digite o email aqui"}
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

export default CompanyRegistration;
