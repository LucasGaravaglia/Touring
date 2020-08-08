

/**
 * Aqui sao definidos os parametros das paginas, quais parametros as paginas recebem
 */

type RootStackParamList = {
  FindCity: undefined;
  TouristSpotAttractions: {
    key: number,
    linkImg: string,
    avaliation: number,
    state: string,
    name: string,
    description: string,
    address: string,
    phone: string
  }

};

export default RootStackParamList;