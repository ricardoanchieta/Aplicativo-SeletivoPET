import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity, Image } from "react-native";

const Primeiramente = ({ navigation }) => {
  return (
    <View style={styles.formatacao} >
        <Image 
            style={styles.imageStyle}
            source={require('../../assets/jacquin.png')} />
      

      <TouchableOpacity onPress={() =>navigation.navigate('Home') }>
        <View style={styles.botaoStyle}>
          <Text style={styles.text}>RECEITAS</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() =>navigation.navigate('Criador') }>
        <View style={styles.botaoStyle}>
          <Text style={styles.text}>SOBRE O CRIADOR</Text>
        </View>
      </TouchableOpacity>

      
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20, 
    fontWeight: "bold",
    color:"#FFE4E1"
  },

  botaoStyle: {
    backgroundColor: '#FF7F50',
    marginHorizontal: 60,
    marginVertical:10,
    alignContent: 'center',
    alignItems:'center',
    borderRadius: 100,
    padding: 20
    
  },

  formatacao: {
    
    backgroundColor:"#FFE4E1",
    flex: 1,
  },

  imageStyle:{
    marginBottom: 50,
    marginHorizontal: 110,
    marginTop: 50,
    height:168,
    width:299,
}
});

export default Primeiramente;
