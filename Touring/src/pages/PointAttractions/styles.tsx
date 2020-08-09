import { StyleSheet, Dimensions } from "react-native";
import { colors } from "../../styles"
import { Roboto_500Medium, Roboto_400Regular } from '@expo-google-fonts/roboto';
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
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  text: {
    fontSize: 10
  },
  title: {
    fontSize: 25,
    fontFamily: 'Roboto_500Medium',
    color: '#595959',
    marginBottom: 4
  },
  description: {
    marginLeft: 10,
    fontSize: 15,
    fontFamily: 'Roboto_400Regular',
  },
  additional: {
    paddingTop: 5,
    fontSize: 17,
    fontFamily: 'Roboto_400Regular',
  },
  additionalContainer: {
    marginTop: 5,
    marginLeft: 10
  },
  button: {
    flexDirection: "row",
    width: 150,
    height: 50,
    backgroundColor: colors.blueDefault,
    borderRadius: 100,
    justifyContent: "space-evenly",
    alignItems: "center",
    marginBottom: 15
  },
  textButton: {
    fontSize: 15,
    color: "#fff",
    fontFamily: 'Roboto_400Regular',
  },
  containerButtons: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly"
  },
  containerSpot: {
    width: widthScreen / 2 - 20,
    height: widthScreen / 2 - 20,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#fff",
    margin: 10,
    borderRadius: 15,
    elevation: 5
  },
  containerText: {
    justifyContent: "center",
    alignItems: "center"
  },
  titleInformation: {
    fontSize: 13,
    fontFamily: 'Roboto_400Regular',
  },
  descriptionAttractions: {
    textAlign: "center",
    padding: 4,
    fontSize: 8,
    fontFamily: 'Roboto_400Regular',
  },
  imagemAttractions: {
    width: "100%",
    height: "55%",
    borderRadius: 15,
  },
  loadingContainer: {
    backgroundColor: "#fff"
  },
  Icon: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  containerPlusAttractions: {
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
  }

})