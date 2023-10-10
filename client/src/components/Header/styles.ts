import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  headerContainer : {
    width: '100%',
    height: '30%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  elements: {
    width: '90%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  text: {
    fontSize: 28,
    color: '#0B61A4',
    fontWeight: '600'
  }
})

export {styles};