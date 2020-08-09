
import React from 'react';
import { View, Text, FlatList, Image, ActivityIndicator } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Styles from "./style"
import { Feather } from '@expo/vector-icons';
import { Roboto_500Medium, useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';


const data = [
  {
    name: "Laura",
    Like: true,
    key: 1,
    date: "07/08/2020",
    comment: "Recomendo, muito bom o passeio e os preços são ótimos",
    avatar: "https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png"
  },
  {
    name: "Laura",
    Like: true,
    key: 2,
    date: "07/08/2020",
    comment: "Recomendo, muito bom o passeio e os preços são ótimos",
    avatar: "https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png"
  },
  {
    name: "Laura",
    Like: true,
    key: 3,
    date: "07/08/2020",
    comment: "Recomendo, muito bom o passeio e os preç",
    avatar: "https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png"
  },
  {
    name: "Laura",
    Like: true,
    key: 3,
    date: "07/08/2020",
    comment: "Recomendo, muito bom o passeio e os preços são ótimos",
    avatar: "https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png"
  },
  {
    name: "Laura",
    Like: true,
    key: 3,
    date: "07/08/2020",
    comment: "Recomendo, muito bom o passeio e os preços são ótimos",
    avatar: "https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png"
  }
]
const Comments = () => {

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
      <StatusBar style='dark' />
      <FlatList
        keyExtractor={item => String(item.key)}
        showsVerticalScrollIndicator={false}
        data={data}
        numColumns={1}
        // style={Styles.Flat}
        renderItem={({ item }) => {
          return (
            <View style={Styles.containerFlat}>
              <Image style={Styles.avatar} source={{ uri: item.avatar }} />

              <View style={Styles.containerText}>
                <Text style={Styles.textName}>{item.name}</Text>
                <View style={Styles.containerDate}>
                  <Feather name="thumbs-up" color="#000" size={10} />
                  <Text style={Styles.textDate}>{item.date}</Text>
                </View>
                <Text style={Styles.textComment}>{item.comment}</Text>
              </View>



            </View>

          )
        }}

      />
    </View>
  );
}

export default Comments;

