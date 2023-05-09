import { StyleSheet, Text, View, Button } from 'react-native';
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
    doSomething = () =>{
        this.setState({message: "Button Clicked"})
    }

    // render
    render(){
        return(
            <View style={styles.container}>
                <Text>{this.props.title}</Text>
                <Text>{this.state.message}</Text>
                <Button title="Click Me!" onPress={this.doSomething}></Button>
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