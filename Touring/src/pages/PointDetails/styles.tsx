import { StyleSheet } from "react-native";
import { colors } from "../../styles"


export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  imagem: {
    width: "100%",
    height: "45%",
  },
  containerDetails: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  text: {
    fontSize: 10
  },
  title: {
    fontSize: 20
  },
  description: {
    marginLeft: 10,
    fontSize: 15
  },
  additional: {
    paddingTop: 5,
    fontSize: 17
  },
  additionalContainer: {
    marginTop: 5,
    marginLeft: 10
  },
  button: {
    flexDirection: "row",
    width: 250,
    height: 50,
    backgroundColor: colors.blueDefault,
    borderRadius: 100,
    justifyContent: "space-evenly",
    alignItems: "center",
    marginBottom: 15
  },
  textButton: {
    fontSize: 15,
    color: "#fff"
  }
})