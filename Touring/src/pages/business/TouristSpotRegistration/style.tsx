import { StyleSheet } from "react-native";
import { colors } from "../../../styles"

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blueDefault,
    justifyContent: "center"
  },
  inputText: {
    fontSize: 14,
    borderRadius: 100,
    width: 330,
    height: 55,
    paddingLeft: 20,
    backgroundColor: colors.white

  },
  containerBox: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: "8%"
  },
  descriptionInput: {
    marginLeft: 20,
    color: colors.white,
    marginTop: 10
  },
  button: {
    backgroundColor: colors.colorButton,
    width: 330,
    height: 55,
    borderRadius: 100,
    marginTop: 17,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    fontSize: 14,
    color: colors.white,
    fontWeight: "bold"
  },
  containerTitle: {
    alignItems: "center"
  },
  title: {
    fontSize: 25,
    color: colors.white
  }
})