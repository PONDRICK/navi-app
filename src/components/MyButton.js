import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const MyButton = ({ title,color = '#8CBEB2', onPress })=> {
    return (
        <TouchableOpacity  
        style={[styles.button, {backgroundColor: color}]}
        onPress={onPress}
        > 
            <Text style={styles.text}>{title}</Text>
                
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        borderRadius: 8,
        padding: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },
    text: {
        color: '#5C4B51',
        fontSize: 18,
    },
});

export default MyButton;