import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, SafeAreaView } from 'react-native';
import AccountCard from '../../components/AccountCard';
import TransactionCard from '../../components/TransactionCard';
import NewsCard from '../../components/NewsCard';
import colors from '../../util/colors';
import { Searchbar } from "react-native-paper";

const Home = props =>{
    const onSendPress = () =>{
        props.navigation.navigate('Send')
    }
    return(
        <View colors = {colors.bgColor} style = {{flex: 1}}>
            <SafeAreaView style = {{flex: 1}}>
            
                <ScrollView>
                <View style = {{flex: 1}}>
                <View style = {styles.topSection}>
                    <View colors = {[colors.bgColor, '#fff']} style = {styles.topSectionContent}>
                        {/* <View style = {styles.profileInfoContainer}>
                            <View >
                                <Text style = {{color: 'black', opacity: 0.7, fontSize: 16}}>Good Evening,</Text>
                                <Text style = {{color: 'black', opacity: 0.8, fontSize: 20, fontWeight: '600'}}>Lewis Odero</Text>
                            </View>
                            <View style = {styles.profileImgContainer}>
                                <Image resizeMode = 'contain' style = {styles.profileImg} source = {require('../../assets/images/lewisdp.jpg')}/>
                            </View>
                        </View> */}
                        {/* <Text style = {styles.accountTitle}>MY ACCOUNTS</Text>
                        <View style = {styles.accountCardContainer}>
                                <AccountCard style = {styles.accountCard}/>
                        </View> */}
                       
        <View style={styles.heroSection}>
        <Text style={styles.heroHeader}>Hermes Pay</Text>
        <View style={styles.heroBody}>
          <View style={styles.heroContent}>
            <Text style={styles.heroHeader2}>Fast</Text>
            <Text style={styles.heroText}>
                        Pay ,Ivent and swap money fast
            </Text>
          </View>
          <Image
            style={styles.heroImage}
            source={require("../../assets/favicon.png")}
            accessible={true}
            accessibilityLabel={"Little Lemon Food"}
          />
        </View>
        <Searchbar
          placeholder="Search"
          placeholderTextColor="#333333"
        //   onChangeText={handleSearchChange}
          value='Search'
          style={styles.searchBar}
          iconColor="#333333"
          inputStyle={{ color: "#333333" }}
          elevation={0}
        />
      </View>

                        </View>
                </View>
                <View style = {styles.transactionSection}>
                    <Text style = {{...styles.accountTitle, marginLeft: 0}}>Quick Transaction</Text>
                    <View style = {styles.transactionCardsContainer}>
                        <TransactionCard onPress = {onSendPress} style = {styles.tranCard} iconName = "ios-paper-plane" transactionName = "Send"/>
                        <TransactionCard style = {styles.tranCard} iconName = "add-circle" transactionName = "Add"/>
                        <TransactionCard style = {styles.tranCard} iconName = "receipt-sharp" transactionName = "Invoices"/>
                        <TransactionCard style = {styles.tranCard} iconName = "swap-horizontal-sharp" transactionName = "Covert"/>
                        <TransactionCard style = {styles.tranCard} iconName = "logo-bitcoin" transactionName = "Buy Crypto"/>
                        <TransactionCard style = {styles.tranCard} iconName = "leaf" transactionName = "Invest"/>
                        <TransactionCard style = {styles.tranCard} iconName = "phone-portrait" transactionName = "Bills and Airtime"/>
                    </View>
                </View>

                <View style = {styles.newSection}>
                    <Text style = {{...styles.accountTitle, marginLeft: 0}}>NEWS</Text>
                    <NewsCard style = {styles.newsCard}/>
                </View>
                
                </View>
                </ScrollView>
            </SafeAreaView>    
        </View>
        
    )
}

Home.navigationOptions = (navData)=>{
    return({
        headerShown: false
    })
}

const styles = StyleSheet.create({
    heroSection: {
        backgroundColor: "#495e57",
        padding: 20,
      },
      heroHeader: {
        color: "#f4ce14",
        fontSize: 54,
        // fontFamily: "MarkaziText-Medium",
      },
      heroHeader2: {
        color: "#fff",
        fontSize: 30,
        // fontFamily: "MarkaziText-Medium",
      },
      heroText: {
        color: "#fff",
        // fontFamily: "MarkaziText-Medium",
        fontSize: 14,
      },
      heroBody: {
        flexDirection: "row",
        justifyContent: "space-between",
      },
      heroContent: {
        flex: 1,
      },
      heroImage: {
        width: 100,
        height: 100,
        borderRadius: 12,
      },

    topSection: {
    },
    topSectionContent: {
        overflow:'visible'
    },
    profileInfoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        paddingVertical: 20,
    },
    profileImgContainer:{
        height: 75,
        width: 75,
        borderRadius: 50,
        overflow: 'hidden',
      
        
    },
    profileImg:{
        height: 80,
        width: '100%',
    },
    accountTitle:{
        color: 'black', 
        opacity: 0.6, 
        marginHorizontal: 20, 
        marginTop: 20, 
        fontSize: 13,
        marginBottom: 7
    },
    accountCardContainer:{
        width: '100%',
        height: 75,
        paddingHorizontal: 30,
        marginTop: 10,
        alignItems: 'center',
        backgroundColor: 'white'
    },
    accountCard: {
        height: 150,
        position: 'relative',
        top: 0,
    },
    transactionSection: {
        marginTop: 20,
       marginHorizontal: 20,
    },

    transactionCardsContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    },
    tranCard: {
        width: '47.5%',
    },
    newSection:{
        marginHorizontal: 20,
        marginBottom: 30
    }
})

export default Home;
