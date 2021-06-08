import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Paw from '../assets/paw.png';

const Category = (props) => {
    const {category} = props;
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{category.name}</Text>
            <Image style={styles.categoryImage} source={Paw}/>
        </View>
    )
}

const styles = StyleSheet.create({
    categoryImage: {
        width: 180,
        height: 180,
        //left: 300
    },
    title: {
        textTransform: 'uppercase',
        marginBottom: 8,
        fontWeight: '700',
        fontSize: 75
    },
    container: {
        alignItems: 'center',
        padding: 16,
        borderRadius: 4,
        backgroundColor: '#FFF',
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 50,
        shadowOffset: { width: 0, height: 0},
        marginBottom: 56
    }
});

export default Category;