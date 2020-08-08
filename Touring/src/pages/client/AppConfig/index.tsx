import React from 'react';
import { View, Text, Picker } from 'react-native';
import Styles from './style'

const AppConfig = () => {
  return (
    <>
      <View style={Styles.container}>
        <View style={Styles.containerSecundary}>
          <View style={Styles.containerSettings}>
            <Text style={Styles.title}>Tema</Text>
            <Picker
              style={Styles.picker}
              selectedValue={0}
              onValueChange={(itemValue, itemPosition) => {
              }}
            >
              <Picker.Item label="Claro" />
              <Picker.Item label="Escuro Manual" />
            </Picker>
          </View>
          <View style={Styles.containerSettings}>
            <Text style={Styles.title}>Idioma</Text>
            <Picker
              style={Styles.picker}
              selectedValue={0}
              onValueChange={(itemValue, itemPosition) => {
              }}
            >
              <Picker.Item label="Português" />
              <Picker.Item label="Inglês" />
              <Picker.Item label="Espanhol" />
            </Picker>
          </View>

        </View>
      </View>
    </>
  );
}

export default AppConfig;
