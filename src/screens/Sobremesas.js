import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity} from 'react-native';

const Sobremesas = ({ navigation }) => {
    return (
        <View style={styles.formatacao} >
        <Text style= {styles.textStyle}>  Algumas opções de receitas de sobremesas para a sua refeição.</Text>

        <TouchableOpacity onPress={() =>navigation.navigate('Pudim') }>
          <View style={styles.botaoStyle}>
               <Text style={styles.text}>PUDIM</Text>
            </View>
         </TouchableOpacity>

         <TouchableOpacity onPress={() =>navigation.navigate('PetitGateau') }>
          <View style={styles.botaoStyle}>
               <Text style={styles.text}>PETIT GATEAU</Text>
            </View>
         </TouchableOpacity>

         <TouchableOpacity onPress={() =>navigation.navigate('BoloDeCenoura') }>
          <View style={styles.botaoStyle}>
               <Text style={styles.text}>BOLO DE CENOURA</Text>
            </View>
         </TouchableOpacity>

    </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 15,
        color:'#000',
        marginHorizontal: 5
    },

    formatacao: {
        backgroundColor:"#FFE4E1",
        flex: 1,
      },

    botaoStyle: {
        backgroundColor: '#FF7F50',
        marginHorizontal: 15,
        marginVertical:50,
        alignContent: 'center',
        alignItems:'center',
        borderRadius: 3,
        padding: 20
      },

      text: {
        fontSize: 20,
        fontWeight:"bold",
        color:"#FFE4E1", 
      },
});

export default Sobremesas;