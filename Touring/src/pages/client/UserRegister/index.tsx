import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Styles from './style'

const UserRegisterPage = () => {

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
            />
          </View>
          <View>
            <Text style={Styles.descriptionInput}>CPF</Text>
            <TextInput
              style={Styles.inputText}
              placeholder={"Seu CPF aqui..."}
            />
          </View>
          <View>
            <Text style={Styles.descriptionInput}>Telefone</Text>
            <TextInput
              style={Styles.inputText}
              placeholder={"Seu Telefone aqui..."}
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

export default UserRegisterPage;
