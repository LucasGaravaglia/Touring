import { StyleSheet } from "react-native";
import { colors } from "../../../styles"

export default StyleSheet.create({
  container: {
    backgroundColor: colors.blueDefault,
    flex: 1,
    justifyContent: "flex-start"
  },
  title: {
    fontSize: 13,
    color: "#BEBEBE",
    paddingLeft: 6
  },
  picker: {
    height: 30,
    width: 150,
    color: colors.white,
    fontSize: 20,
    fontWeight: "bold"
  },
  containerSettings: {
    justifyContent: "center"
  },
  containerSecundary: {
    marginTop: 60,
    marginLeft: 20
  }
});