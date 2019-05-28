import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableOpacity,
  Linking,
  Button,
  AsyncStorage,
  Image
} from 'react-native';


export class Default extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  constructor(props){
    super(props)
    this.navigateQR = this.navigateQR.bind(this)
    this.navigateManual = this.navigateManual.bind(this)
  }
  navigateQR(){
    const {navigate} = this.props.navigation
    navigate("QrCamera")
  }
  navigateManual(){
    const {navigate} = this.props.navigation
    navigate("Manual")
  }


  render() {
    return (
      <View style = {styles.container}>
      <Text style={styles.welcome}>
      Hi, Welcome to Hack Texas
      </Text>
      <Text style = {styles.instructions}>
      To check in with the camera, press the button below.
      </Text>
      <Button onPress={this.navigateQR} title="Camera">Navigate</Button>
      <Text style = {styles.welcome}>
      Or
      </Text>
      <Text style={styles.instructions}>
      To manually input emails, press the button below.
      </Text>
      <Button onPress={this.navigateManual} title="Manual Input" ></Button>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  image: {
    height: '40%',
    width: '75%',
    resizeMode: "contain"
  },
  container: {
    flex: 3,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  button: {
    marginRight: 10,
  },
  welcome: {
    fontSize: 25,
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
