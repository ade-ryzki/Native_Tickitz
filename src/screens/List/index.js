import React from 'react';
import { View, Text, Pressable} from 'react-native';

const List = ({navigation}) => {

    return (
        <View style={{backgroundColor: '#16213E', justifyContent: 'center', alignItems: 'center', flex: 1}}>
          <Pressable 
          onPress={() => navigation.navigate('SignIn', { })} 
          style={{ backgroundColor: "#E6B325", paddingHorizontal: 60, borderRadius: 10, margin:5, marginTop:25}} android_ripple={{ color:'#E6B325'}}>
            <Text style={{fontWeight:'bold', fontSize:15, alignSelf:'center',}}>SignIn</Text>  
         </Pressable>
         <Pressable 
          onPress={() => navigation.navigate('SignUp', { })} 
          style={{ backgroundColor: "#E6B325", paddingHorizontal: 55, borderRadius: 10, margin:5, marginTop:25}} android_ripple={{ color:'#E6B325'}}>
            <Text style={{fontWeight:'bold', fontSize:15, alignSelf:'center',}}>SignUp</Text>  
         </Pressable>
         <Pressable 
          onPress={() => navigation.navigate('Booking', { })} 
          style={{ backgroundColor: "#E6B325", paddingHorizontal: 50, borderRadius: 10, margin:5, marginTop:25}} android_ripple={{ color:'#E6B325'}}>
            <Text style={{fontWeight:'bold', fontSize:15, alignSelf:'center',}}>Booking</Text>  
         </Pressable>
      </View>
    );
  }
    
  export default List;