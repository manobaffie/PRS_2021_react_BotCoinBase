import { ActivityIndicator, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  Button: {
    alignItems: "center",
    backgroundColor: '#21262d',

    padding: 10,

    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#242c35',
  },

  Text: {
    color: '#ffffff'
  },

  TextError: {
    color: '#800020',
    marginTop: 10
  },

  Input: {
    alignItems: "center",
    backgroundColor: '#21262d',

    padding: 10,
    marginVertical: 10,

    color: 'white',

    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#242c35',
  },

  View: {
    padding: 30,
    backgroundColor: '#0d1117',

    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#242c35',
  },

  MainView: {
    height: '100%',
    backgroundColor: '#010409',
    justifyContent: "center",
    alignItems: "center",
  },

  ActivityIndicator: {
    marginTop: 10,
  }
})
