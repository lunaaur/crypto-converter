import React, {FC} from "react";
import { View, Text, Image } from "react-native";
import {styles} from './styles';
import Logo from '../../../assets/images/logo.svg';

const Header: FC = () => {

  return (
    <View style={styles.headerContainer}>
      <View style={styles.elements}>
        <Logo width={70} height={70} />
        <Text style={styles.text}>Crypto Converter</Text>
      </View>
    </View>
  )
}


export default Header;