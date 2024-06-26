import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconUser from 'react-native-vector-icons/FontAwesome6';
import IconAdd from 'react-native-vector-icons/Ionicons';

// Screens
import Home from "./Screens/Home";
import Login from "./Screens/Login";
import Register from "./Screens/Register";
import Profile from "./Screens/Profile";
import Publication from "./Screens/Publication";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainStack() {
    return (
        <Stack.Navigator>
            {/* Aquí puedes agregar más pantallas dentro del Stack.Navigator */}
            <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
            <Stack.Screen name='Register' component={Register} options={{ headerShown: false }} />
            <Stack.Screen name='Menu' component={MainTab} options={{ headerShown: false }} />
            <Stack.Screen name='Crear publicación' component={Publication} />
        </Stack.Navigator>
    );
}

function MainTab() {
    return (
        <Tab.Navigator>
            {/* Configura las pestañas aquí */}
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: () => null,
                    tabBarIcon: () => (
                        <Icon name="home" size={40} color="#757575" />
                    ), 
                    headerShown: false
                }}
            />

            <Tab.Screen
                name="Publica"
                component={PublicationPlaceholder}
                options={{
                    tabBarLabel: () => null,
                    tabBarIcon: () => (
                        <IconAdd name="add-circle-outline" size={40} color="#757575" />
                    ), 
                    headerShown: false
                }}
                listeners={({ navigation }) => ({
                    tabPress: (e) => {
                        e.preventDefault();
                        navigation.navigate('Crear publicación');
                    },
                })}
            />

            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel: () => null,
                    tabBarIcon: () => (
                        <IconUser name="user-large" size={30} color="#757575" />
                    ), 
                    headerShown: false
                }}
            />
        </Tab.Navigator>
    );
}

function PublicationPlaceholder() {
    return null;
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <MainStack />
        </NavigationContainer>
    );
}
