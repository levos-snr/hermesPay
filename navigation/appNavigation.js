/** @format */
import * as React from "react";
import { View, Text } from "react-native";
import Home from "../features/Home/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Ionicons, Foundation } from "@expo/vector-icons";
import { Image, Pressable, useColorScheme } from "react-native";
import { StatusBar } from "expo-status-bar";
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import More from "../features/More/MoreScreen";
import Notification from "../features/UserNotifications/UserNotifications";
import Wallet from "../features/Wallet/Wallet";
import Setting from "../features/Settings/Settings";
import Profile from "../features/Profile/Profile";

// Stack
const HomeStack = createNativeStackNavigator();

function HomeStackGroup() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="TabsGroup" component={TabsGroup} />
      <HomeStack.Screen name="Profile" component={Profile} />
    </HomeStack.Navigator>
  );
}

// Tabs
const Tab = createBottomTabNavigator();

function TabsGroup({ navigation }) {
  const onProfilePress = () => {
    navigation.navigate("Profile");
  };
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        // headerTitleAlign: "center",
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Invest") {
            iconName = focused ? "leaf" : "leaf-outline";
          } else if (route.name === "Wallet") {
            iconName = focused ? "wallet" : "wallet-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "settings" : "ios-settings-sharp";
          }
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#1DA1F2",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: " ",
          headerRight: () => (
          <>
            <Pressable onPress={onProfilePress}>
              <Image
                source={require("../assets/images/lewisdp.jpg")}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 100,
                  marginRight: 15,
                }}
              />
            </Pressable>
            <Ionicons name="notifications-outline" size={24}
             style={{
                  marginRight: 15,
                   color:"black",
                }} />
            </>
          ),
          headerLeft: () => (
            <Pressable onPress={() => navigation.openDrawer()}>
              <Foundation
                name="indent-more"
                color="black"
                size={24}
                style={{
                  borderRadius: 100,
                  marginLeft: 15,
                  alignContent: "center",
                }}
              />
            </Pressable>
          ),
        }}
      />
      <Tab.Screen name="Invest" component={Setting} />
      <Tab.Screen name="Wallet" component={Wallet} />
      <Tab.Screen name="Settings" component={Setting} />
    </Tab.Navigator>
  );
}

// Drawer

const Drawer = createDrawerNavigator();

function DrawerGroup() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="Home" component={HomeStackGroup} />
      <Drawer.Screen name="More" component={More} />
      <Drawer.Screen name="Wallet" component={Wallet} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Setting" component={Setting} />
    </Drawer.Navigator>
  );
}

export default function appNavigation() {
  const theme = useColorScheme();
  return (
    <NavigationContainer theme={theme === "dark" ? DarkTheme : DefaultTheme}>
      <StatusBar style="auto" />
      {/* <HomeStackGroup /> */}
      <DrawerGroup />
    </NavigationContainer>
  );
}

// Top Tabs

// const TopTabs = createMaterialTopTabNavigator();

// function TopTabsGroup() {
//   return (
//     <TopTabs.Navigator
//       screenOptions={{
//         tabBarLabelStyle: {
//           textTransform: "capitalize",
//           fontWeight: "bold",
//         },
//         tabBarIndicatorStyle: {
//           height: 5,
//           borderRadius: 5,
//           backgroundColor: "#1DA1F2",
//         },
//       }}
//     >
//       <TopTabs.Screen
//         name="Home"
//         component={Home}
//         options={{
//           tabBarLabel: "Home",
//         }}
//       />
//       <TopTabs.Screen name="More" component={More} />
//       <TopTabs.Screen name="👀" component={Wallet} />
//     </TopTabs.Navigator>
//   );
// }
