import React from 'react';
import { Text, StyleSheet, View, ScrollView, Image, Linking, Button } from 'react-native';

 
const SaladaCeasar = () => {
    return (
        <ScrollView style={styles.formata} >
            <Image 
            source={require('../../assets/Salada.jpg')} />
            <View  style={styles.sublinha} >
                <Text style={styles.titulo}>Ingredientes:</Text>  
            </View>
            <Text style={styles.fonte}>   - 1 alface americana lavada, higienizada e picada grosseiramente</Text>
            <Text style={styles.fonte}>   - 1 peito de frango sem osso, temperado, grelhado e picado em tiras (opcional)</Text>
            <Text style={styles.fonte}>   - 1 xícara de parnesão ralado grosseiramente</Text>
            <Text style={styles.fonte}>   - 2 xícaras de croutons bem crocantes (feitos com pão de forma sem casca)</Text>
            <Text style={styles.fonte}>   Para o molho:</Text>
            <Text style={styles.fonte}>   - 1/2 xícara de óleo (milho, canola ou girasol)</Text>
            <Text style={styles.fonte}>   - 1/2 xícara de azeite de boa qualidade</Text>
            <Text style={styles.fonte}>   - 1 gema</Text>
            <Text style={styles.fonte}>   - 2 dentes de alho amassados</Text>
            <Text style={styles.fonte}>   - 5 filés de anchovas</Text>
            <Text style={styles.fonte}>   - 2 colheres de sopa de maionese caseira</Text>
            <Text style={styles.fonte}>   - 1 colher de sopa mostarda</Text>
            <Text style={styles.fonte}>   - 1 colher de sopa de suco de limão</Text>
            <View  style={styles.sublinha} >
                <Text style={styles.titulo}>Modo de preparo:</Text>  
            </View>
            <Text style={styles.fonte}>   - Molho:</Text>
            <Text style={styles.fonte}>* PRIMEIRO PASSO: Coloque todos os ingredientes no liquidificador,
             bata bem pouco, somente para unir os ingredientes, se bater demais irá virar uma maionese.</Text>
            <Text style={styles.fonte}>* SEGUNDO PASSO: Arrume a alface em uma saladeira funda,
                 coloque o frango em tiras (opcional) e regue com o molho, polvilhe o parmesão.</Text>
            <Text style={styles.fonte}>* TERCEIRO PASSO: Cubra com os croutons somente na hora de servir para não amolecer.</Text>
            <Text style={styles.fonte}>* OBS: O molho é feito com a gema crua,
                 mas para os mis impressionados poderá ser utilizada a gema do ovo cozido e frio. </Text>
            <Text></Text>

           <Button
                title="Video de tutorial de preparo"
                onPress={() => {
              Linking.openURL('https://www.youtube.com/watch?v=u4NDlEJt2YM');
            }}
                style={styles.button}
            />

          

        </ScrollView>
    );
};

const styles= StyleSheet.create({
    titulo: {
        fontSize: 22,
        fontWeight: "bold", 
    },

    sublinha: {
        borderBottomWidth: 1,
        borderBottomColor: "#FF7F50",
        marginHorizontal: 10,
        marginVertical: 10
    },

    formata: {
        marginHorizontal:5,
    },

    fonte: {
        fontSize: 18,
    },

    button: {
    marginVertical: 10,
    
  },

});

export default SaladaCeasar;