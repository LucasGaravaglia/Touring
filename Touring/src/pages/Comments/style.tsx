import { StyleSheet, Dimensions } from "react-native";
import { colors } from "../../styles"
import { Roboto_500Medium, Roboto_400Regular } from '@expo-google-fonts/roboto';

const widthScreen = Dimensions.get('window').width
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blueDefault,
    justifyContent: "center",
    alignItems: "center"
  },
  Flat: {
    width: "100%",
    height: 50,
    flex: 1,
    // alignItems: "center"
  },
  avatar: {
    width: 40,
    height: 40,
  },
  containerFlat: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 5,
    height: 90,
    width: widthScreen * 0.9,
    backgroundColor: "#fff",
    borderRadius: 13,
    elevation: 5,
  },
  containerDate: {
    flexDirection: "row",
    alignItems: "center",
    width: "30%",
    justifyContent: "space-between",
  },
  loadingContainer: {

  },
  textDate: {
    fontFamily: "Roboto_400Regular",
    fontSize: 10
  },
  textName: {
    fontFamily: "Roboto_400Regular",
    color: "#636363",
    fontSize: 14
  },
  textComment: {
    fontFamily: "Roboto_400Regular",
    color: "#636363",
    fontSize: 12
  },
  containerText: {
    marginLeft: "2%",
    width: widthScreen * 0.7,

  }
})