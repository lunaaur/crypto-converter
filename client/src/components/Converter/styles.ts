import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  converterContainer: {
    width: '100%',
    height: '65%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  elems: {
    width: '100%',
    height: '100%',
    display: 'flex'
  },
  block: {
    width: '100%',
    height: '20%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  blockElems: {
    height: '40%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    width: '90%',
    borderRadius: 8,
  },
  cryptoValue: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '40%',
    height: '100%',
  },
  valueText: {
    marginRight: '8%',
  },
  dropdown: {
    borderLeftWidth: 1,
    margin: 16,
    width: '40%',
    height: '100%',
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    marginLeft: 10,
    fontSize: 16,
  },
  reverseBlock: {
    width: '100%',
    height: '8%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export {styles};