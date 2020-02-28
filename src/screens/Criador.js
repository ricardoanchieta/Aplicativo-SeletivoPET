import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity, Image } from "react-native";

const Criador = ({ navigation }) => {
  return (
    <View style={styles.formatacao} >
        <Image 
            style={styles.imageStyle}
            source={require('../../assets/ricjunio.png')} />
      
        <Text style={styles.text}>Criado por: </Text>
        <Text style={styles.text}>Ricardo Anchieta</Text>
        <Text>Criado para o seletivo do PETComp2020</Text>
      
      
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20, 
    fontWeight: "bold",
    color:"#FF7F50",
    marginBottom: 15,
    
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
    alignContent: 'center',
    alignItems:'center',
    backgroundColor:"#FFE4E1",
    flex: 1,
  },

  imageStyle:{
    borderWidth: 5,
    borderColor:'#FF7F50',
    borderRadius: 10,
    
    marginBottom: 50,
    marginHorizontal: 70,
    marginTop: 50,
    height:300,
    width:220,
}
});

export default Criador;
