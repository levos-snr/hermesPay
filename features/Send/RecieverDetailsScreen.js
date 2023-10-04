import React from 'react';
import { View, StyleSheet, Text, ScrollView, TextInput, KeyboardAvoidingView, Platform} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import colors from '../../util/colors';
import { useState } from 'react';
import FormContainer from '../../components/FormContainer';
import AuthFormInput from '../../components/AuthFormInput';

const RecieverDetailsScreen = props =>{
    const [amount, setAmount] = useState('30,000');

    const textChangeHandler = (text) =>{
        if(isNaN(text))return;
        console.log(!(text.length))
        if(!text.length){
            console.log(text)
            setAmount('00');
            return;
        }
        setAmount(text)
    }

    const onProceed = () =>{
        props.navigation.navigate('ConfirmDetails')
    }

    return(
        <View colors = {colors.bgColor} style = {styles.screen}>
            <KeyboardAvoidingView style = {{flex: 1}}>
                <ScrollView style = {{flex: 1, width: '100%'}}>
                    <View style = {styles.balanceContainer}>
                        <Text style = {styles.labelText}>Enter Amount</Text>
                        <View style = {styles.amountContainer}>
                        <Text style = {styles.amountText} >Ksh.</Text>                        
                        <TextInput 
                            style = {{...styles.amountText, ...styles.amountInput}} 
                            value = {amount} 
                            onChangeText = {textChangeHandler}
                            keyboardType = "numeric"
                        />                        
                        </View>
                    </View>
                    <FormContainer style = {styles.form} onSubmit = {onProceed}>
                    <AuthFormInput 
                        placeholder = "Bank Name"
                    />
                    <AuthFormInput
                        placeholder = "Account Number"
                    />
                    <AuthFormInput
                        placeholder = "Account Name"
                    />
                    <AuthFormInput
                        placeholder = "Description"
                    />
                    </FormContainer>
                </ScrollView>
            </KeyboardAvoidingView>
        </View>
    )
}

RecieverDetailsScreen.navigationOptions = navData =>{
    return({
        headerTitle: "Enter Details"
    })
}

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        paddingHorizontal: 20,
    },
    balanceContainer: {
        paddingTop: 20,
        width: '100%',
        alignItems: 'center'
    },
    labelText: {
        color: 'black',
        opacity: 0.5,
        fontSize: 15,
    },
    amountContainer:{
        flexDirection: 'row'
    },
    amountText: {
        color: 'black',
        fontWeight: '500',
        opacity: 0.85,
        marginVertical: 7,
        fontSize: 45
    },
    amountInput:{
        minWidth: 100,
        borderBottomWidth: 1,
    },
    form: {
        marginTop: 35,
        marginBottom: 60,
        flex: 1,
        paddingBottom: 40
    }
})

export default RecieverDetailsScreen;