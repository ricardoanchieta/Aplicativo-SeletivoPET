import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.formatacao} >
      <Text style={styles.fonteBranca}>     As melhores receitas você encontra aqui.</Text>

      <TouchableOpacity onPress={() =>navigation.navigate('Entradas') }>
        <View style={styles.botaoStyle}>
          <Text style={styles.text}>ENTRADAS</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() =>navigation.navigate('PratosPrincipais') }>
        <View style={styles.botaoStyle}>
          <Text style={styles.text}>PRATOS PRINCIPAIS</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() =>navigation.navigate('Sobremesas') }>
        <View style={styles.botaoStyle}>
          <Text style={styles.text}>SOBREMESAS</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color:"#FFE4E1",
  },

  botaoStyle: {
    backgroundColor: '#FF7F50',
    marginHorizontal: 15,
    marginVertical:50,
    alignContent: 'center',
    alignItems:'center',
    borderRadius: 7,
    padding: 20
  },

  formatacao: {
    
    backgroundColor:"#FFE4E1",
    flex: 1,
  },

  fonteBranca: {
    color:'#000',
    fontSize: 15,
    marginVertical:5
  },
});

export default HomeScreen;
