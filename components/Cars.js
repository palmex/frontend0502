import { StyleSheet, Text, View, Button } from 'react-native';
import React from "react";

export default class Cars extends React.Component {

    // constructor
    constructor(props){
        super(props)
        this.state = {
           message: "I am the car class",
           buttonTitle: "ON",
           buttonClicks: 0
        }
    }

    // js logic
    doSomething = () => {
        this.setState({message: "Button Clicked"})
    }

    toggle = () => {
        this.setState({buttonClicks: this.state.buttonClicks + 1})
        if (this.state.buttonTitle == "ON"){
            this.setState({buttonTitle: "OFF"})
        } else {
            this.setState({buttonTitle: "ON"})
        }
        console.log("Button has been toggled ", this.state.buttonClicks, "times")
    }



    // render
    render(){
        return(
            <View style={styles.container}>
                <Text>{this.props.title}</Text>
                <Text>{this.state.message}</Text>
                {/* <Button title="Click Me!" onPress={this.doSomething}></Button> */}
                <Button title={this.state.buttonTitle} onPress={this.toggle}></Button>
                <Text>This button has been clicked {this.state.buttonClicks} times</Text>
            </View>
        )
    }

}

// styling
const styles = StyleSheet.create({
    container: {
      flex: 1,
      borderColor:"#887444",
      borderRadius: 5,
      borderWidth: 1,
      padding: 15,
      margin: 5,
      width: "90%",
      alignItems: 'center',
      justifyContent: 'start',
    },
})