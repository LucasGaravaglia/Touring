import { StyleSheet, Dimensions } from "react-native";
import { colors } from "../../styles"
import { Roboto_500Medium, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
const widthScreen = Dimensions.get('window').width
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  imagem: {
    width: "100%",
    height: "40%",
  },
  containerDetails: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%",
    paddingLeft: 12,
    paddingRight: 12
  },
  title: {
    fontSize: 30,
    fontFamily: 'Roboto_500Medium',
    color: '#595959',
    marginBottom: 4
  },
  button: {
    flexDirection: "row",
    width: 190,
    height: 60,
    backgroundColor: colors.blueDefault,
    borderRadius: 100,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  textButton: {
    fontSize: 18,
    color: "#fff",
    fontFamily: 'Roboto_700Bold',
  },
  containerButtons: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: 'center',
    height: 80
  },
  loadingContainer: {
    backgroundColor: "#fff"
  },
  textDefault: {
    fontSize: 18,
    fontFamily: 'Roboto_400Regular',
  },
  textSecundary: {
    fontFamily: "Roboto_700Bold",
    fontWeight: "bold",
    fontSize: 18,
    paddingTop: 5
  }

})