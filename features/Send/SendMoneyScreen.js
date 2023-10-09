import React from 'react'
import { View, StyleSheet, Text, FlatList, Image, ScrollView } from 'react-native';
import colors from '../../util/colors';
import RecieverCard from '../../components/RecieverCard';
import HistoryCard from '../../components/HistoryCard';




const SendMoneyScreen = props =>{

    const onSendClick = () =>{
        props.navigation.navigate("RecieverDetails")
    }
    return(
        <View colors = {colors.bgColor} style = {{flex: 1}}>
            <ScrollView style = {{flex: 1}}>
                <View style = {styles.balanceContainer}>
                    <Text style = {styles.availableText}>Available</Text>
                    <Text style = {styles.balanceText}>Ksh.2,000,000</Text>
                </View>
                <View style = {styles.contactSection}>
                    <Text style = {{color: 'black', opacity: 0.5, fontSize: 15, fontWeight: '500', marginBottom: 10}}>Send money to</Text>
                    <ScrollView horizontal = {true}>
                        <RecieverCard onPress = {onSendClick} addContact title = "New contact" />
                        <RecieverCard title = "Lewis Odero" />
                        <RecieverCard title = "Noble Junior" />
                        <RecieverCard title = "Bob Baby"/>
                    </ScrollView>
                </View>
                <View style = {styles.contactSection}>
                    <Text style = {{color: 'white', opacity: 0.5, fontSize: 15, fontWeight: '500', marginBottom: 10}}>Last transactions</Text>
                    <View >
                        <HistoryCard/>
                        <HistoryCard/>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

SendMoneyScreen.navigationOptions = navData =>{
    return({
        headerTitle: "Send Money"
    })
}

const styles = StyleSheet.create({
    balanceContainer: {
        paddingTop: 20,
        paddingBottom: 50,
        width: '100%',
        alignItems: 'center'
    },
    availableText: {
        color: 'black',
        opacity: 0.5,
        fontSize: 15,
    },
    balanceText: {
        color: 'black',
        fontWeight: '500',
        opacity: 0.85,
        marginVertical: 7,
        fontSize: 45
    },
    contactSection:{
        paddingHorizontal: 20,
        marginBottom: 40
    }
})

export default SendMoneyScreen;
