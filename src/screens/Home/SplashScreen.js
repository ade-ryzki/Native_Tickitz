import { View, Text, StyleSheet, Image } from 'react-native'
import React, { Component }  from 'react'
import { StackActions } from '@react-navigation/native'


class SplashScreen extends Component {
    constructor(props) {
        super(props);
        this.state={};
    }
    componentDidMount() { 
        setTimeout(() => {
            this.props.navigation.dispatch(StackActions.replace('Home'));
        }, 1500);
     }
     render() {
     return (
        <View style={{backgroundColor: '#16213E', justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <Image
              source={require('../../../assets/image/Vector.png')} style={{width: 100, height: 50, marginBottom: 20}}
              resizeMode="contain"
          />
          <Text style={{color:'#E6B325'}}>Created By T&A Project</Text>
      </View>
  );   
     }
  
}

export default SplashScreen;