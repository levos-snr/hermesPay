import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import Card from './Card';

const HistoryCard = props =>{
    return(
        <Card style = {styles.historyCard}>
            <View style = {styles.content}>
                <View style = {styles.imageContainer}>
                    <Image source = {require('../assets/images/lewisdp.jpg')} style = {styles.image} />
                </View>
                <View style = {styles.middleSection}>
                    <Text style = {styles.name}>Lewis Odero</Text>
                    <Text style = {styles.date}>11 May 2023</Text>
                </View>
                <Text style = {styles.amount}>
                  Ksh.30,000
                </Text>
            </View>
        </Card>
    )
}

const styles = StyleSheet.create({
    historyCard: {
        paddingHorizontal: 15,
        paddingVertical: 9,
        marginBottom: 10
    },
    content:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    imageContainer: {
        height: 50,
        width: 50,
        marginRight: 15,
        overflow: 'hidden',
        borderRadius: 25,
    },
    image:{
        height: '100%',
        width: '100%',
    },
    middleSection: {
        flex: 1
    },
    name: {
        color: 'white',
        fontWeight: '500',
        fontSize: 17,
        opacity: 0.7,
        marginBottom: 5
    },
    date:{
        color: 'white',
        opacity: 0.4
    },
    amount:{
        color: 'green',
        fontSize: 16
    }

})

export default HistoryCard;