import React from 'react'
import { View, StyleSheet, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import colors from '../../util/colors';
import NotificationCard from '../../components/Notification';

const UserNotifications = props =>{
    return(

        <View colors = {colors.bgColo} style = {{flex: 1}}>
            <ScrollView style = {{flex: 1}}>
                <View>
                    <Text style = {styles.date}>12 Nov 2018</Text>
                    <View> 
                        <NotificationCard message ="Transfer of Ksh.30,000 done by Lewis " time ="08.30 AM"/>
                        <NotificationCard message ="User name has bee changed " time ="13.30 PM"/>
                        <NotificationCard message ="Transfer of Ksh.10,000 done by Lewis " time ="21.30 PM"/>
                    </View>
                </View>
            </ScrollView>            
        </View>

    )
}

const styles = StyleSheet.create({
    date: {
        color: 'white',
        fontSize: 17,
        opacity: 0.3,
        marginLeft: 20,
        marginTop: 20
    }
})

export default UserNotifications;