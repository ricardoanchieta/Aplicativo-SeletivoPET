import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity} from 'react-native';

const PratosPrincipais = ({ navigation }) => {
    return (
        <View style={styles.formatacao} >
        <Text style= {styles.textStyle}>  Algumas opções de receitas de pratos principais para a sua refeição.</Text>

        <TouchableOpacity onPress={() =>navigation.navigate('Mocoto') }>
          <View style={styles.botaoStyle}>
               <Text style={styles.text}>MOCOTÓ</Text>
            </View>
         </TouchableOpacity>

         <TouchableOpacity onPress={() =>navigation.navigate('Feijoada') }>
          <View style={styles.botaoStyle}>
               <Text style={styles.text}>FEIJOADA</Text>
            </View>
         </TouchableOpacity>

         <TouchableOpacity onPress={() =>navigation.navigate('Lasanha') }>
          <View style={styles.botaoStyle}>
               <Text style={styles.text}>LASANHA</Text>
            </View>
         </TouchableOpacity>

    </View>

    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 15,
        color:'#000',
        marginHorizontal: 5,
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

export default PratosPrincipais;