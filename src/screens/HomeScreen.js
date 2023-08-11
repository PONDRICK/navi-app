import { View, Text, StyleSheet, FlatList } from "react-native";

import MyButton from "../components/MyButton";
import itemList from "../data/itemList.json";
import RenderItem from "../components/RenderItem";

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 20}}>Home Screen</Text>
            <MyButton title="Next >>" onPress={() => navigation.navigate("Next")}/>
            <FlatList
                data={itemList}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <RenderItem item={item}/>}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F2EBBF',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default HomeScreen;