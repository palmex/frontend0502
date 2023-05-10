import { StyleSheet, Text, View, Button, Pressable, ScrollView } from 'react-native';
import React from "react";

export default class Cars extends React.Component {

    // constructor
    constructor(props){
        super(props)
        this.state = {
           message: "I am the car class",
           buttonTitle: "ON",
           buttonClicks: 0,
           data: ["car1", "car2", "car3", "car4", "car5","car6"]
        }
    }

    // js logic
    doSomething = (car) => {
        console.log("Car clicked: ", car)
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
                
                <ScrollView 
                    style={{maxHeight: "50%", padding: 15, margin: 10}}
                    showsVerticalScrollIndicator={true}
                    >
                {this.state.data.map((car) => 
                    <Pressable 
                        key={car} 
                        style={styles.pressable}
                        onPress={() => this.doSomething(car)}
                        >
                        <Text style={{color:"white"}}>{car}</Text>
                    </Pressable>
                )}
                </ScrollView>

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
    pressable:{
        backgroundColor: "#243783",
        borderRadius: 3,
        margin: 3,
        minWidth: 150,
        minHeight: 45,
        justifyContent: "center",
        padding: 5
    }
})