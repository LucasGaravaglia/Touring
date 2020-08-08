import React, { useContext, useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import Styles from './style'
import { ClienteContext } from '../../../contexts/clientContext'

const UserRegisterPage = () => {

  const { registerUser,registerCompany,updateUserProfileImage,updateUserEmail,updateUserPhone,updateAddress,updateUserName } = useContext(ClienteContext)

  const [ address, setAddress ] = useState('')
  const [ cpf, setCpf ] = useState('')
  const [ phone, setPhone ] = useState('')

  return (
    <>
      <View style={Styles.container}>
        <View style={Styles.containerTitle}>
          <Text style={Styles.title}>Dados do usuario</Text>
        </View>
        <View style={Styles.containerBox}>
          <View>
            <Text style={Styles.descriptionInput}>Endereço</Text>
            <TextInput
              style={Styles.inputText}
              placeholder={"Seu endereço aqui..."}
              onEndEditing={ text => {
                setAddress(text.nativeEvent.text)
              }}
            />
          </View>
          <View>
            <Text style={Styles.descriptionInput}>CPF</Text>
            <TextInput
              style={Styles.inputText}
              placeholder={"Seu CPF aqui..."}
              onEndEditing={ text => {
                setCpf(text.nativeEvent.text)
              }}
            />
          </View>
          <View>
            <Text style={Styles.descriptionInput}>Telefone</Text>
            <TextInput
              style={Styles.inputText}
              placeholder={"Seu Telefone aqui..."}
              onEndEditing={ text => {
                setPhone(text.nativeEvent.text)
              }}
            />
          </View>
          <TouchableOpacity
            onPress={() => {
              try{
                registerUser(address,cpf,phone)
              } catch(err) {
                Alert.alert(err)
              }
            }}
           style={Styles.button}>
            <Text style={Styles.buttonText}>Registrar</Text>
          </TouchableOpacity>

        </View>

      </View>
    </>
  );
}

export default UserRegisterPage;
