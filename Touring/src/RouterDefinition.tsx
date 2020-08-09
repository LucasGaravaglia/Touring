
import Point from "../interfaces/Point"
/**
 * Aqui sao definidos os parametros das paginas, quais parametros as paginas recebem
 */

type RootStackParamList = {
  FindCity: undefined;
  PointDetails: Point;
  PointPage: undefined;
  Menu: undefined,
  UserItinerary: undefined,
  PointMap: undefined,
  PointAttractions: Point,
  Videos: undefined,
  Comment: undefined
};

export default RootStackParamList;