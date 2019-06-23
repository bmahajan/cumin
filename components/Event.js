import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Button,
  TouchableOpacity,
  Image,
  Text,
  View,
  ScrollView,
  ImageBackground,
} from 'react-native'

export class Events extends Component {
  constructor(props) {
    super(props)
    this.onPress = this.onPress.bind(this)
  }

  onPress(eventName){
      console.log(eventName)
      const { navigate } = this.props.navigation;
      navigate("Eventnfc", {email: "asdsad", event: eventName})
  }

 render() {
   return (
     <ScrollView style={styles.container}>
       <Button
         buttonStyle={styles.button}
         onPress={() => this.onPress("Lunch_1")}
         title="Lunch 1">
       </Button>
       <Text>{"\n"}</Text>

       <TouchableOpacity style={styles.touchable} onPress={() => this.onPress("Lunch_1")}>
       <View style={styles.image}>
        <Text style = {styles.text}> Lunch_1</Text>
       </View> 
       </TouchableOpacity>
       <Text>{"\n"}</Text>

       <TouchableOpacity style={styles.touchable} onPress={() => this.onPress("ReactHomeDepot")}>
       <View style={styles.image}>
        <Text style = {styles.text}>Home Depot React Workshop</Text>
       </View> 
      </TouchableOpacity>
       <Text>{"\n"}</Text>

       <TouchableOpacity style={styles.touchable} onPress={() => this.onPress("AIMSFT")}>
       <View style={styles.image}>
        <Text style = {styles.text}>Microsoft AI Talk</Text>
       </View> 
      </TouchableOpacity>
       <Text>{"\n"}</Text>

       <TouchableOpacity style={styles.touchable} onPress={() => this.onPress("Dinner")}>
       <View style={styles.image}>
        <Text style = {styles.text}>Dinner</Text>
       </View> 
      </TouchableOpacity>
       <Text>{"\n"}</Text>

       <TouchableOpacity style={styles.touchable} onPress={() => this.onPress("CTF")}>
       <View style={styles.image}>
        <Text style = {styles.text}>CTF</Text>
       </View> 
      </TouchableOpacity>
       <Text>{"\n"}</Text>

       <TouchableOpacity style={styles.touchable} onPress={() => this.onPress("YogoHomeDepot")}>
       <View style={styles.image}>
        <Text style = {styles.text}>Home Depot Yoga</Text>
       </View> 
      </TouchableOpacity>
       <Text>{"\n"}</Text>

       <TouchableOpacity style={styles.touchable} onPress={() => this.onPress("Midnight")}>
       <View style={styles.image}>
        <Text style = {styles.text}>Midnight Snack</Text>
       </View> 
      </TouchableOpacity>
       <Text>{"\n"}</Text>

       <TouchableOpacity style={styles.touchable} onPress={() => this.onPress("Breakfast")}>
       <View style={styles.image}>
        <Text style = {styles.text}>Breakfast</Text>
       </View> 
      </TouchableOpacity>
       <Text>{"\n"}</Text>

       <TouchableOpacity style={styles.touchable} onPress={() => this.onPress("HoppyHour")}>
       <View style={styles.image}>
        <Text style = {styles.text}>Hoppy Hour</Text>
       </View> 
      </TouchableOpacity>
       <Text>{"\n"}</Text>

       <TouchableOpacity style={styles.touchable} onPress={() => this.onPress("Lunch_2")}>
       <View style={styles.image}>
        <Text style = {styles.text}>Lunch 2</Text>
       </View> 
      </TouchableOpacity>
       <Text>{"\n"}</Text>

       

	   {/*<Button
         style={styles.button}
         onPress={() => this.onPress("ReactHomeDepot")}
         title="Home Depot React Workshop"
       >
       </Button>
       <Text>{"\n"}</Text>
	   <Button
         style={styles.button}
         onPress={() => this.onPress("AIMSFT")}
         title="Microsoft AI Talk"
       >
       </Button>
       <Text>{"\n"}</Text>
	   <Button
         style={styles.button}
         onPress={() => this.onPress("Dinner")}
         title="Dinner"
       >
       </Button>
       <Text>{"\n"}</Text>

	   <Button
         style={styles.button}
         onPress={() => this.onPress("CTF")}
         title="CTF"
       >
       </Button>
       <Text>{"\n"}</Text>
	   <Button
         style={styles.button}
         onPress={() => this.onPress("YogoHomeDepot")}
         title="Home Depot Yoga"
       >
       </Button>
       <Text>{"\n"}</Text>
	   <Button
         style={styles.button}
         onPress={() => this.onPress("Midnight")}
         title="Midnight Snack"
       >
       </Button>
       <Text>{"\n"}</Text>
	   <Button
         style={styles.button}
         onPress={() => this.onPress("Breakfast")}
         title="Breakfast"
       >
       </Button>
       <Text>{"\n"}</Text>
	   <Button
         style={styles.button}
         onPress={() => this.onPress("HoppyHour")}
         title="Hoppy Hour"
       >
       </Button>
       <Text>{"\n"}</Text>
	   <Button
         style={styles.button}
         onPress={() => this.onPress("Lunch_2")}
         title="Lunch 2"
       >
       </Button>*/}

      </ScrollView>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: '#000000'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#000000',
    margin: 30
  },
  countContainer: {
    alignItems: 'center',
    padding: 10
  },
  countText: {
    color: '#FF00FF'
  },
  image: {
    height: 'auto',
    width:'100%',
    backgroundColor:'#FF6666'
  },
  touchable: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: '#FFFFFF',
    fontSize: 22,
    textAlign: 'center'
  }
})
