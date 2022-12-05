import React, { useEffect, useState } from "react"
import {
    SafeAreaView,
    ScrollView,
    Text,
    StyleSheet,
} from "react-native"
import ListItem from "../components/lists/ListItem"
import { useNavigation } from "@react-navigation/native"

// Main component
const Components = ()=> {

    const navigation = useNavigation()

    // List of avaliable components
    const [datas, setData] = useState([
        {
            id      : "texts",
            name    : "Texts"
        },
        {
            id      : "buttons",
            name    : "Buttons"
        }
    ])

    // Main component to return
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.label}>Components</Text>
            <ScrollView>
                {
                    datas.map( data => <ListItem 
                                            item    ={data} 
                                            key     ={data.id} 
                                            navigation={navigation} 
                                        />)
                }
            </ScrollView>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingVertical: 30,
    },
    label: {
      fontSize: 14,
      fontWeight: "300",
      color: "#888",
      marginVertical: 20,
      marginHorizontal: 10
    },
  });
  
  export default Components;