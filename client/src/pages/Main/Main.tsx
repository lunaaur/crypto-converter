import React, {FC} from "react";
import { View } from "react-native";
import {styles} from './styles'
import Header from "../../components/Header/Header";
import Converter from "../../components/Converter/Converter";


const Main: FC = () => {

  return (
    <View style={styles.container}>
      <Header />
      <Converter />
    </View>
  )
}


export default Main;