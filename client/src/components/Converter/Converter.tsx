import React, {FC, useEffect, useState} from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import {styles} from './styles';
import axios from "axios";
import Reverse from '../../../assets/images/reverse.svg';
import { Dropdown } from "react-native-element-dropdown";
import { IApiResponse, IConverter } from "../../types/converter";
import DismissKeyboard from "../DismissKeyboard/DismissKeyboard";
import ConverterAnnotation from "../ConverterAnnotation/ConverterAnnotation";

const options: IConverter[] = [
{
  label: 'ETH',
  value: '1'
}, 
{
  label: 'BTC',
  value: '1'
},
{
  label: 'USDT',
  value: '2'
}
]

const Converter: FC = () => {
  const [dropdownFirstValue, setDropdownFirstValue] = useState<null | string>(null)
  const [dropdownSecondValue, setDropdownSecondValue] = useState<null | string>(null)
  const [firstInputValue, setFirstInputValue] = useState<string>('1')
  const [secondValue, setSecondValue] = useState<string | null>(null)

  const calculateCurrentPrice = (currentPrice: number) => {
    let value = currentPrice * Number(firstInputValue)
    setSecondValue(value.toFixed(6).toString())
  }

  const getApiData =  async (firstOption: string, secondOption: string) => {
    try {
      const response = await axios.get<IApiResponse>(`https://api.coinbase.com/v2/prices/${firstOption}-${secondOption}/spot`)
      const data = response.data.data
      calculateCurrentPrice(Number(data.amount))
    } catch (error) {
      console.log(error)
    }
  }

  const handleConverter = async (firstOption: string, secondOption: string) => {
    try {
      if (firstOption == secondOption) {
        setSecondValue('')
      }

      getApiData(firstOption, secondOption)
    } catch (error) {
      console.log(error)
    }
  }

  const inputHandler = (number: string) => {
    setFirstInputValue(number);
  }

  const handleReverse = (firstOption: string | null, secondOption: string | null) => {
    setDropdownFirstValue(secondOption)
    setDropdownSecondValue(firstOption)
  }


  useEffect(() => {
    if (dropdownFirstValue && dropdownSecondValue) {
      handleConverter(dropdownFirstValue, dropdownSecondValue)
    }
  }, [dropdownFirstValue, dropdownSecondValue, firstInputValue])


  return (
    <DismissKeyboard>
    <View style={styles.converterContainer}>
      <View style={styles.elems}>
        <View style={styles.block}>
          <View style={styles.blockElems}>
            <TouchableOpacity style={styles.cryptoValue}>
              <TextInput style={styles.valueText} value={firstInputValue} onChangeText={number => inputHandler(number)} keyboardType="numeric"/>
            </TouchableOpacity>
        <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        data={options}
        maxHeight={300}
        labelField={'label'}
        valueField={'label'}
        value={dropdownFirstValue}
        onChange={item => {
          setDropdownFirstValue(item.label);
        }}
        />
        </View>
        </View>
        <TouchableOpacity style={styles.reverseBlock} onPress={() => handleReverse(dropdownFirstValue, dropdownSecondValue)}>
        <Reverse width={40} height={40} />
        </TouchableOpacity>
        <View style={styles.block}>
          <View style={styles.blockElems}>
            <TouchableOpacity style={styles.cryptoValue}>
              <Text style={styles.valueText}>{secondValue}</Text>
            </TouchableOpacity>
        <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        data={options}
        maxHeight={300}
        labelField={'label'}
        valueField={'label'}
        value={dropdownSecondValue}
        onChange={item => {
          setDropdownSecondValue(item.label);
        }}
        />
        </View>
        </View>
          {dropdownFirstValue && dropdownSecondValue ? (
          <ConverterAnnotation 
          firstElement={dropdownFirstValue} 
          secondElement={dropdownSecondValue} 
          firstInputValue={firstInputValue} 
          secondValue={secondValue}
          />
          ) : (
            <></>
          )
          }
      </View>
    </View>
    </DismissKeyboard>
  )
}


export default Converter;