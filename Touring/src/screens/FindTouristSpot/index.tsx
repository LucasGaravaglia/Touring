// import React from 'react';
// import { View, Text, FlatList, Image, TextInput } from 'react-native';
// import Styles from "./style"
// import { StackScreenProps } from '@react-navigation/stack';
// // import RouterDefinition from "../../../RouterDefinition"


// const dataList = [
//   {
//     name: "Cataratas",
//     state: "aberto",
//     avaliation: 4,
//     key: 1,
//     linkImg: "https://lh3.googleusercontent.com/proxy/-zfHSNZ35bRWx6RqdhHoN4Lfo8aRXFCtJBuClCJZCfA2hDHuo5eaMimQlh4fyfb2UfmQazRrkudctvXYV3m1GtdxuG8x2BEwGwin7e6LwmE9JkJrLQlb7uEZVdj2ppKcfbQTMvhKZI-sA2vl_m8gy-9BEyOW7IE"
//   },
//   {
//     name: "Marco das três fronteiras",
//     state: "Aberto - Fecha 18h",
//     avaliation: 4,
//     key: 2,
//     linkImg: "https://www.loumarturismo.com.br/passeios/imagens/00013/1923-show-de-luzes-e-aguas-marco-tres-frontei.jpg"
//   },
//   {
//     name: "Marco das três fronteiras",
//     state: "Aberto - Fecha 18h",
//     avaliation: 4,
//     key: 3,
//     linkImg: "https://www.loumarturismo.com.br/passeios/imagens/00013/1923-show-de-luzes-e-aguas-marco-tres-frontei.jpg"
//   },
//   {
//     name: "Marco das três fronteiras",
//     state: "Aberto - Fecha 18h",
//     avaliation: 4,
//     key: 4,
//     linkImg: "https://www.loumarturismo.com.br/passeios/imagens/00013/1923-show-de-luzes-e-aguas-marco-tres-frontei.jpg"
//   },
//   {
//     name: "Marco das três fronteiras",
//     state: "Aberto - Fecha 18h",
//     avaliation: 4,
//     key: 5,
//     linkImg: "https://www.loumarturismo.com.br/passeios/imagens/00013/1923-show-de-luzes-e-aguas-marco-tres-frontei.jpg"
//   }
// ]
// interface PointProps {
//   item: {
//     key: number,
//     linkImg: string,
//     avaliation: number,
//     state: string,
//     name: string
//   }
// }
// // type Props = StackScreenProps<RouterDefinition, 'FindTouristSpot'>;
// const FindTouristSpot = ({ route, navigation }: Props) => {
//   const renderItem = (param: PointProps) => {
//     return (
//       <View style={Styles.containerSpot}>
//         <Image style={Styles.imagem} source={{ uri: param.item.linkImg }} />
//         <View style={Styles.containerText}>
//           <Text style={Styles.FirstLine}>
//             {param.item.name}
//           </Text>
//           <Text style={Styles.SecondLine}>
//             {param.item.avaliation}
//           </Text>
//           <Text style={Styles.ThirdLine}>
//             {param.item.state}
//           </Text>
//         </View>
//       </View>
//     )
//   }
//   function handlerClick(param: PointProps) {

//   }

//   return (
//     <View style={Styles.container}>
//       <TextInput
//         style={Styles.inputText}
//         placeholder={"Lugares, restaurantes..."}
//       />
//       <FlatList
//         showsVerticalScrollIndicator={false}
//         data={dataList}
//         renderItem={renderItem}
//         numColumns={2}
//         style={Styles.Flat}
//       />
//     </View>
//   );
// }

// export default FindTouristSpot;
