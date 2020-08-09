import { StyleSheet, Dimensions } from "react-native";
import { colors } from "../../styles"

const widthScreen = Dimensions.get('window').width
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
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
    borderRadius: 15,
    elevation: 5
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
  containerOptions: {
    height: 70,
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: colors.blueDefault
  },
  internalContainer: {
    width: "25%",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 7,
    color: "#fff",
    paddingTop: 5
  },
  pressArea: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center"
  }
})