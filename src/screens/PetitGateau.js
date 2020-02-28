import React from 'react';
import { Text, StyleSheet, View, ScrollView, Image, FlatList} from 'react-native';


const PetitGateau = () => {
    const ingredientes = [
        {
            id:'1',
            contentText: " - 2 ovos "

        },
        {
            id:'2',
            contentText: " - 3 dorime "
        },
        {
            id:'3',
            contentText: " - 4 ameno "
        },
        {
            id:'4',
            contentText: " - 90 latire"
        },
        {
            id:'5',
            contentText: " - 90 latire"
        },
        {
            id:'6',
            contentText: " - 90 latire"
        },
        {
            id:'7',
            contentText: " - 90 latire"
        },
        {
            id:'8',
            contentText: " - 90 latire"
        },
        {
            id:'9',
            contentText: " - 90 latire"
        },
        {
            id:'10',
            contentText: " - 90 latire"
        },
        {
            id:'11',
            contentText: " - 90 latire"
        },
        {
            id:'12',
            contentText: " - 90 latire"
        },
        {
            id:'13',
            contentText: " - 90 latire"
        },
        {
            id:'14',
            contentText: " - 90 latire"
        },
        {
            id:'15',
            contentText: " - 90 latire"
        },
        {
            id:'16',
            contentText: " - 90 latire"
        },
        {
            id:'17',
            contentText: " - 90 latire"
        },

       
    ];

    return (
    <View style={styles.container}>    
        <Image 
            style={styles.imageStyle}
            source={require('../../assets/petitFoto.jpg')} />
        <View style={styles.header}>
            <Text style={styles.headerText}>Ingredientes</Text>
        </View>

        <FlatList 
                    data={ ingredientes }
                    
                    renderItem={({item}) => {
                        return (
                            <View>
                                
                                <View style={styles.content}>
                                    <Text style={styles.contentText}>
                                        {"\t"}{item.contentText}
                                    </Text>
                                </View>
                        </View>
                        )
                    }}
                
                />
        <View style={styles.header}>
            <Text style={styles.headerText}>Modo de preparo:</Text>
        </View>
        <View>
            <Text style={styles.contentText}>AMENO AMENO AMENO AMENO AMENO AMENO AMENO AMENO AMENO AMENO AMENO AMENO AMENO AMENO </Text>
        </View>
        
    </View>
    );
}


const styles = StyleSheet.create({
    container: {
        
        flex: 1,
        marginHorizontal: 10,
        marginBottom:25
    },
    header: {
        borderBottomColor: '#FF7F50',
        borderBottomWidth: 1,
        
    },
    headerText: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    content: {
        flex:1
    },
    contentText: {
        fontSize: 18,
        textAlign: "justify"
    },

    imageStyle:{
        marginTop: 5,
        height:168,
        width:299,
    }
});

export default PetitGateau;