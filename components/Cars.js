import { StyleSheet, Text, View } from 'react-native';
import React from "react";

export default class Cars extends React.Component {

    // constructor
    constructor(props){
        super(props)
        this.state = {
           message: "I am the car class" 
        }
    }

    // js logic

    // render
    render(){
        return(
            <View style={styles.container}>
                <Text>{this.state.message}</Text>
            </View>
        )
    }

}

// styling
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'start',
    },
})