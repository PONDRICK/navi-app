import { View, Text, StyleSheet, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';

import NextScreen from "./src/screens/NextScreen";
import HomeScreen from "./src/screens/HomeScreen";



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStackScreen = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name='Home' component={HomeScreen}/>
            {/* <Stack.Screen name='Next' component={NextScreen}/> */}
        </Stack.Navigator>
    )
}

const App = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    tabBarStyle: {
                        backgroundColor: '#8CBEB2',
                    },
                    tabBarActiveTintColor: '#5C4B51',
                    headerStyle: {
                        backgroundColor: '#F3B562',
                    },
                    headerTintColor: '#fff',
                    headerShown: false,
                }}>
                <Tab.Screen
                    name="HomeStack"
                    component={HomeStackScreen}
                    options={{
                    tabBarIcon: ({ color, size}) => (
                        <FontAwesome5 name="home" size={size} color={color} />
                    ),
                }}/>
                <Tab.Screen 
                    name="Next" 
                    component={NextScreen} 
                    options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="page-next" size={size} color={color} />
                    ),
                    tabBarBadge: 14,
                }}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({});

export default App;