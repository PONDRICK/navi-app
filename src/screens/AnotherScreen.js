import { View, Text, Button, StyleSheet} from 'react-native'

const AnotherScreen = ({route, navigation}) => {
        const {id,message} = route.params;
    return (
      <View style={[styles.container, {backgroundColor: "#8dd7bf"}]}>
        <Text style={styles.title}>Another Screen</Text>
        <Button 
          title='Back to Home'
          color= "#6c88c4"
          onPress={() => navigation.navigate("Home")} />
          <Text style={[styles.title, {marginVertical: 10, fontSize: 24}]}>{id}</Text>
          <Text style={[styles.title, {marginVertical: 10, fontSize: 24}]}>{message}</Text>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8dd7bf',
        alignItems: 'center',
        justifyContent: 'center',
      },
      
      title: {
        fontSize: 16,
        fontWeight: "bold",
      },
  });

  export default AnotherScreen;