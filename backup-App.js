import { useState } from 'react'
import { StyleSheet, Text, View, Button, TextInput, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AntDesign } from '@expo/vector-icons';

import AnotherScreen from './src/screens/AnotherScreen';

const HomeScreen = ({ navigation }) => {
  const [msg, setMsg] = useState('')
  return (
    <View style={styles.container}>
      <Text style={[styles.title, { fontSize: 24 }]}>Home Screen</Text>
      <TextInput
        style={{
          fontSize: 18,
          padding: 20,
          borderWidth: 1,
          borderRadius: 10,
          margin: 10,
          backgroundColor: "#fff",
          width: "80%",
        }}
        placeholder='Type message here....'
        keyboardType='twitter'
        multiline
        numberOfLines={5}
        textAlignVertical='top'
        //secureTextEntry
        value={msg}
        onChangeText={text => setMsg(text)}
      />
      <Button
        title='Another World'
        color="#00b0ba"
        onPress={() => navigation.navigate("Another", {
          id: "00",
          message: msg,
        })} />
      <Button
        title='Change a Title'
        color="#ff828b"
        onPress={() => navigation.setOptions({ headerTitle: msg })} />
    </View>
  )
}


const Stack = createNativeStackNavigator();

const App = () => {
  //Main body
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'
        screenOptions={{
          headerTitleStyle: {
            fontSize: 26,
            fontWeight: "bold",
          },
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: '#0065a2'
          },
          headerTintColor: '#fff'
        }}>
        <Stack.Screen name="Home" component={HomeScreen} options={{
          headerTitle: "หน้าแรก 🏠",

        }} />
        <Stack.Screen name="Another" component={AnotherScreen}
        options={{
          headerTitle: () => (
          <TouchableOpacity onPress={() => alert("SHAROPLY")} >
           <Image 
           style={{ width: 50, height: 50 }}
           source={require('./src/img/img1.png')} />
          </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => alert("Make By Sharoply")}>
            <AntDesign name="caretdown" size={24} color='#fff' />
            </TouchableOpacity>
          )
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffd872',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default App;