import { useState } from "react"
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from "react-native"
import MyButton from "../components/MyButton"
import MyInput from "../components/MyInput"

const NextScreen = () => {
    const [msg, setMsg] = useState('');
    const [subject, setSubject] = useState('');
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 20}}>Next Screen</Text>
            <Text style={{ fontSize: 5}}></Text>
             <MyInput 
                placeholder='Type Something....'
                value={msg}
                onChangeText={text => setMsg(text)}/>
             <MyButton title='Submit'
                onPress={() => Alert.alert('submitted',`You entered "${msg}"`)}
             />
             
             <MyButton title='Reset' color='#d9797e'
                onPress={() => [setMsg(''),setSubject('')]}
             />
             <MyInput 
                placeholder='Type Something Again....'
                value={subject}
                onChangeText={text => setSubject(text)}/>
             <MyButton title='Drop' color='#8d8d8d'
                onPress={() => alert('Drop!!!',`I will drop ${subject}, ha ha ha.`)}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F2EBBF',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default NextScreen;
