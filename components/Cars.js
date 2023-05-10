import { StyleSheet, Text, View, Button,TextInput,
     Pressable, ScrollView } from 'react-native';
import React from "react";

export default class Cars extends React.Component {

    // constructor
    constructor(props){
        super(props)
        this.state = {
           message: "I am the car class",
           buttonTitle: "ON",
           buttonClicks: 0,
           make: "",
           model: "",
           year: "",
           odometer: "",
           data: []
        }
    }
    
    async componentDidMount(){
        const response = await fetchCars()
        console.log("all cars body", response)
        this.setState({data: response})
    }

    // js logic
    doSomething = (car) => {
        console.log("Car clicked: ", car)
    }

    submitCar = () =>{
        console.log(this.state.make,this.state.model, this.state.year, this.state.odometer )
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
        // console.log(this.state.make)
        return(
            <View style={styles.container}>
                <Text>{this.props.title}</Text>
                {/* <ScrollView 
                    style={{maxHeight: "50%", padding: 15, margin: 10}}
                    showsVerticalScrollIndicator={true}
                    >
                {this.state.data.map((car) => 
                    <Pressable 
                        key={car.car_id} 
                        style={styles.pressable}
                        onPress={() => this.doSomething(car.car_id)}
                        >
                        <Text style={{color:"white"}}>{car.make}</Text>
                    </Pressable>
                )}
                </ScrollView> */}
                <Text style={{fontSize:20, color: "#887444"}}>
                    Car Form
                </Text>
                <View style={styles.form}>
                    <Text style={styles.formText}>Make</Text>
                    <TextInput 
                        style={styles.formInput}
                        onChangeText={(e)=>this.setState({make: e})}
                    />
                    <Text style={styles.formText}>Model</Text>
                    <TextInput 
                        style={styles.formInput}
                        onChangeText={(e)=>this.setState({model: e})}
                    />
                    <Text style={styles.formText}>Year</Text>
                    <TextInput 
                        style={styles.formInput}
                        onChangeText={(e)=>this.setState({year: e})}
                    />
                    <Text style={styles.formText}>Odometer</Text>
                    <TextInput 
                        style={styles.formInput}
                        onChangeText={(e)=>this.setState({odometer: e})}
                    />
                    <Pressable style={styles.submit}
                        onPress={this.submitCar}>
                        <Text>Submit</Text>
                    </Pressable>
                </View>
            </View>
        )
    }

}

// when: async

async function fetchCars(){
    // HTTP Request (Type, URI:PORT/ENDPOINT, Headers [cors,admin])

    let headers = {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Origin': 'http://localhost:3000/*',
        'Accept': "application/json",
        'admin': "true"
    }

    return fetch("http://localhost:3000/cars/all",{
        method: "GET",
        withCredentials: true,
        headers: headers
    }).then((response)=>{
        console.log('Cars All Response:', response)
        if(response.ok){
            return response.json()
        } else {
            var error = new Error('Error-' + response.status + ":" + response.statusText)
            error.response = response
            throw error
        }
    }, error=>{
        var errmess = new Error(error.message)
        throw errmess
    })
}

// how:
// server down... no response at all?
// status codes

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
    submit:{
        backgroundColor: "white",
        width: "40%",
        height: 35,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        padding: 5,
        alignSelf: "center"
    },
    pressable:{
        backgroundColor: "#243783",
        borderRadius: 3,
        margin: 3,
        minWidth: 150,
        minHeight: 45,
        justifyContent: "center",
        padding: 5
    }, 
    form: {
        backgroundColor: "#243783",
        borderRadius: 10,
        minHeight: "35%",
        minWidth: "25%",
        padding: 10,
    }, 
    formText:{
        color:"white",
        fontSize: 18,
        marginBottom: 5
    },
    formInput:{
        backgroundColor: "white",
        borderRadius: 3,
        minHeight: 15,
        marginBottom: 10,
    }
})