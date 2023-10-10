import React, {FC, useEffect} from "react";
import { View, Text, Image } from "react-native";
import {styles} from './styles';
import {formattedDate} from '../../helpers'

interface ConverterAnnotationProps {
  firstElement: string | null,
  secondElement: string | null,
  firstInputValue: string,
  secondValue: string | null
}

const ConverterAnnotation: FC<ConverterAnnotationProps> = ({firstElement, secondElement, firstInputValue, secondValue}) => {

  return (
    <View style={styles.annotationContainer}>
     <View style={styles.textBlock}>
        <Text style={styles.firstLine}>{firstInputValue} {firstElement} = {secondValue} {secondElement}</Text>
        <Text style={styles.secondLine}>Данные носят ознакомительный характер{"\n"}{formattedDate} МСК</Text>
      </View>
    </View>
  )
}


export default ConverterAnnotation;