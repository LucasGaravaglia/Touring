import { StyleSheet, Dimensions } from "react-native";
import { colors } from "../../../styles"

const widthScreen = Dimensions.get('window').width
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blueDefault,
    justifyContent: "center",
    alignItems: "center",
  },
  containerSpot: {
    width: widthScreen / 2 - 20,
    height: widthScreen / 2,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#fff",
    margin: 10,
    borderRadius: 15
  },
  Flat: {
    marginTop: 10
  },
  imagem: {
    width: "100%",
    height: "50%",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  FirstLine: {
    fontSize: 15,
    paddingLeft: 5
  },
  SecondLine: {
    fontSize: 10,
    paddingLeft: 5
  },
  ThirdLine: {
    fontSize: 13,
    paddingLeft: 5
  },
  containerText: {
    flex: 1,
    width: widthScreen / 2 - 20,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  inputText: {
    marginTop: 40,
    backgroundColor: colors.white,
    color: "#000",
    width: "90%",
    height: 55,
    borderRadius: 100,
    paddingLeft: 15
  }
})