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
           carId: "",
           data: [],
           submitted: false,
           isEditing: false,
        }
    }
    
    // js logic
    async componentDidMount(){
        const response = await fetchCars()
        this.setState({submitted: false})
        console.log("all cars body", response)
        this.setState({data: response})
    }

    selectCar = (car) => {
        this.setState({carId: car.car_id})
        this.setState({make: car.make})
        this.setState({isEditing: true})
        this.setState({model: car.model})
        this.setState({year: car.year})
        this.setState({odometer: car.odometer})
    }

    saveCar = () => {
       
    }

    deleteCar = () => {
       
    }

    submitCar = async () =>{
        const response = await submitCar(this.state.make,this.state.model, this.state.year, this.state.odometer )
        if (response){
            this.setState({submitted: true})
        }
    }
    
    // render
    render(){
        return(
            <View style={styles.container}>
                <Text>{this.props.title}</Text>
                <ScrollView 
                    style={{maxHeight: "30%", padding: 15, margin: 10}}
                    showsVerticalScrollIndicator={true}
                    >
                {this.state.data.map((car) => 
                    <Pressable 
                        key={car.car_id} 
                        style={styles.pressable}
                        onPress={() => this.selectCar(car)}
                        >
                        <Text style={{color:"white"}}>{car.make} {car.model} {car.year}</Text>
                    </Pressable>
                )}
                </ScrollView>
                <Text style={{fontSize:20, color: "#887444"}}>
                    Car Form
                </Text>
                <View style={styles.form}>
                    <Text style={styles.formText}>Make</Text>
                    <TextInput 
                        style={styles.formInput}
                        onChangeText={(e)=>this.setState({make: e})}
                        defaultValue={this.state.make}
                    />
                    <Text style={styles.formText}>Model</Text>
                    <TextInput 
                        style={styles.formInput}
                        onChangeText={(e)=>this.setState({model: e})}
                        defaultValue={this.state.model}
                    />
                    <Text style={styles.formText}>Year</Text>
                    <TextInput 
                        style={styles.formInput}
                        onChangeText={(e)=>this.setState({year: e})}
                        defaultValue={this.state.year}
                    />
                    <Text style={styles.formText}>Odometer</Text>
                    <TextInput 
                        style={styles.formInput}
                        onChangeText={(e)=>this.setState({odometer: e})}
                        defaultValue={this.state.odometer}
                    />
                    {(this.state.isEditing)?(
                        <View>
                        <Pressable style={styles.submit}
                        onPress={this.saveCar}>
                        <Text>Save</Text>
                    </Pressable>
                    <Pressable style={styles.submit}
                        onPress={this.deleteCar}>
                        <Text>Delete</Text>
                    </Pressable>
                    </View>

                    ):(
                        <Pressable style={styles.submit}
                        onPress={this.submitCar}>
                        <Text>Submit</Text>
                        </Pressable>
                    )}
                    
                    {(this.state.submitted)?(<Text style={{color:"green"}}>Success!</Text>):(<></>)}
                </View>
            </View>
        )
    }
}

// when: async
// how:
// server down... no response at all?
// status codes
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

async function submitCar(make, model, year, odometer){
    // HTTP Request (Type, URI:PORT/ENDPOINT, Headers [cors,admin])

    let headers = {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Origin': 'http://localhost:3000/*',
        'Accept': "application/json",
        'admin': "true"
    }

    let reqBody = {
        "make":make,
        "model":model,
        "year":year,
        "odometer":odometer
    }

    

    return fetch("http://localhost:3000/cars/new",{
        method: "POST",
        withCredentials: true,
        headers: headers,
        body: JSON.stringify(reqBody)
    }).then((response)=>{
        console.log('Cars New Response:', response)
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