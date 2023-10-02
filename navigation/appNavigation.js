import { View, Text } from 'react-native'
import React from 'react'
import { StatusBar } from "expo-status-bar";
import SignIn from "../features/Auth/SignIn";
import History from "../features/History/History";
import Add from "../features/AddMoney/Add";
import CashTransfer from "../features/CashTransfer/CashTransfer";
import SignUp from "../features/Auth/SignUp";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import "react-native-gesture-handler";
import Profile from "../features/Profile/Profile";
import AccountDetails from "../features/AccountDetails/AccountDetails";
import UserNotifications from "../features/UserNotifications/UserNotifications";
import Settings from "../features/Settings/Settings";
import Home from "../features/Home/Home"

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();



export function Welcome() {
    return (
      <>
        <Tab.Navigator>
        <Tab.Screen
            name="Home"
            component={Home}
            options={{
              headerStyle: { backgroundColor: "#1dcf9f" },
              tabBarIcon: () => (
                <Ionicons name="home-outline" size={30} color={"#1dcf9f"} />
              ),
            }}
          />
          <Tab.Screen
            name="Notifications"
            component={UserNotifications}
            options={{
              headerStyle: { backgroundColor: "#1dcf9f" },
              tabBarIcon: () => (
                <Ionicons
                  name="notifications-outline"
                  size={30}
                  color={"#1dcf9f"}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
              headerStyle: { backgroundColor: "#1dcf9f" },
              tabBarIcon: () => (
                <Ionicons name="person-outline" size={30} color={"#1dcf9f"} />
              ),
            }}
          />
           <Tab.Screen
            name="Wallet"
            component={AccountDetails}
            options={{
              headerStyle: { backgroundColor: "#1dcf9f" },
              tabBarIcon: () => (
                <Ionicons name="wallet-outline" size={30} color={"#1dcf9f"} />
              ),
            }}
          />
          <Tab.Screen
            name="More"
            component={Settings}
            options={{
              headerStyle: { backgroundColor: "#1dcf9f" },
              tabBarIcon: () => (
                <Ionicons name="ellipsis-horizontal-outline" size={30} color={"#1dcf9f"} />
              ),
            }}
          />
        </Tab.Navigator>
      </>
    );
  }
  




const appNavigation = () => {
  return (
    <>
    <StatusBar style="#1dcf9f" />
      
        <Stack.Navigator>
          <Stack.Screen
            name="SignIn "
            component={SignIn}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Add Money"
            component={Add}
            options={{ headerStyle: { backgroundColor: "#1dcf9f" } }}
          />
          <Stack.Screen
            name="History"
            component={History}
            options={{ headerStyle: { backgroundColor: "#1dcf9f" } }}
          />
          <Stack.Screen
            name="Cash-Transfer"
            component={CashTransfer}
            options={{ headerStyle: { backgroundColor: "#1dcf9f" } }}
          />
          <Stack.Screen
            name="Register"
            component={SignUp}
            options={{ headerStyle: { backgroundColor: "#1dcf9f" } }}
          />
        </Stack.Navigator>
     
    
    </>
  )
}

export default appNavigation