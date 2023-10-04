import React from 'react';
import { View, StyleSheet, StatusBar, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import colors from '../../util/colors';
import CircularButton from '../../components/CircularButton';

const ConfirmDetailsScreen = props =>{
    return(
        <View colors = {colors.bgColor} style = {styles.screen}>
            <View>
                <Text style = {{fontWeight: '600', color: 'green', fontSize: 20, opacity: 0.7}}>Status</Text>
                <View style = {styles.section}>
                    <Text style = {styles.propertyText}>Total amount</Text>
                    <Text style = {styles.valueText}>Ksh. 2,000,000</Text>
                </View>
                <View  style = {styles.section}>
                    <Text style = {styles.propertyText}>You Sent</Text>
                    <Text style = {styles.valueText}>Ksh. 30,000</Text>
                </View>
                <View style = {styles.section}>
                    <Text style = {styles.propertyText}>Transfer charge</Text>
                    <Text style = {styles.valueText}>Ksh 105</Text>
                </View>
            </View>
            <View style = {styles.buttonContainer}>
                <CircularButton/>
            </View>
        </View>
    )
}

ConfirmDetailsScreen.navigationOptions = navData =>{
    return({
        headerTitle: 'Confirm Details'
    })
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 35
    },
    section: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 30,
        borderBottomWidth: 1,
        borderColor: '#000'
    },
    buttonContainer: {
        marginTop: 'auto',
        width: '100%',
        alignItems: 'center',
        marginBottom: 20
    },
    propertyText:{
        color: 'black',
        opacity: 0.7,
        fontSize: 18,
        fontWeight: '600'
    },
    valueText:{
        color: 'black',
        opacity: 0.5,
        fontSize: 16,
        fontWeight: '600'
    }
})

export default ConfirmDetailsScreen;