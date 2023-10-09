import React, {FC, useEffect} from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import {styles} from './styles';
import axios from "axios";
import Reverse from '../../../assets/images/reverse.svg';

const Converter: FC = () => {

  const getApiData = async () => {
    try {
      const response = await axios.get('https://api.binance.com/api/v3/ticker/price?symbol=ETHUSDT')
      const data = response.data
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
/*     getApiData() */
  }, [])

  return (
    <View style={styles.converterContainer}>
      <View style={styles.elems}>
        <View style={styles.firstBlock}>
          <TouchableOpacity>
            <View style={styles.firstCryptoNumber}>
              <Text>1</Text>
            </View>
            <View style={styles.firstCryptoName}>
              <Text>Eth</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.reverseBlock}>
        <Reverse width={40} height={40} />
        </View>
        <View style={styles.secondBlock}>
        <TouchableOpacity>
            <View style={styles.secondCryptoNumber}>
              <Text>1</Text>
            </View>
            <View style={styles.secondCryptoName}>
              <Text>Eth</Text>
            </View>
          </TouchableOpacity>
          </View>
      </View>
    </View>
  )
}


export default Converter;