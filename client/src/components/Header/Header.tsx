import React, {FC} from "react";
import { View, Text, Image } from "react-native";
import {styles} from './styles';
import Logo from '../../../assets/images/logo.svg';
import DismissKeyboard from "../DismissKeyboard/DismissKeyboard";

const Header: FC = () => {

  return (
    <DismissKeyboard>
    <View style={styles.headerContainer}>
      <View style={styles.elements}>
        <Logo width={70} height={70} />
        <Text style={styles.text}>Crypto Converter</Text>
      </View>
    </View>
    </DismissKeyboard>
  )
}


export default Header;