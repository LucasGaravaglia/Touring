import { StyleSheet } from "react-native";
import { colors } from "../../styles"
import { Rancho_400Regular } from '@expo-google-fonts/rancho';
import { heightPercentageToDP } from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blueDefault
  },
  topo: {
    alignItems: "center",
    marginTop: 40,
  },
  logo: {
    width: 200,
    height: 130,
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: colors.blueDefault
  },
  topText: {
    fontFamily: 'Rancho_400Regular',
    color: '#fff',
    fontSize: 20
  },
  TouristSpot: {
    flexDirection: 'row',
    backgroundColor: colors.blueSecondy,
    height: heightPercentageToDP(23),
    justifyContent: "space-around",
    alignItems: "center",

  },
  IndicatorText: {
    fontFamily: 'Rancho_400Regular',
    color: '#fff',
    fontSize: 30
  },
  containerOptions: {
    flex: 1,
    justifyContent: "flex-end"
  }
});