import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { LoginAuth } from '../../../redux/action/auth';
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {componenstyle, Auth} from '../../../helper/componenstyle';
const SignIn = ({navigation}) => {
  const [datalogin, setdatalogin]=useState({
    email :"",
    password :""

  })
  const dispatch = useDispatch()
  return (
    <>
      <ScrollView style={{backgroundColor: '#16213E'}}>
        <View style={[componenstyle.body]}>
          <View style={[componenstyle.flexRow]}>
            <Image
              source={require('../../../assets/image/Vector.png')}
              style={{
                width: 100,
                height: 50,
                resizeMode: 'contain',
              }}
            />
          </View>
          <View style={[componenstyle.header]}>
            <Text
              style={[
                componenstyle.textbold,
                componenstyle.textBlack,
                {fontSize: 35,color:'#E6B325'},
              ]}>
              Sign In
            </Text>
            <Text style={{color:'#DCD7C9'}}>
              Sign in with your data that you entered during your registration
            </Text>
          </View>
          <View>
            <View>
              <Text style={{color:'#DCD7C9'}}>Email</Text>
            </View>
            <View style={[componenstyle.inputBox]}>
              <TextInput onChangeText={email => {
                  setdatalogin(prevData => ({
                    ...prevData,
                    email: email,
                  }));
                }}
                placeholder="Write Your Email Address"
                placeholderTextColor={'grey'}
                keyboardType="email-address"
                style={{color:'black'}}
              />
            </View>
          </View>
          <View>
            <View>
              <Text style={{color:'#DCD7C9'}}>Password</Text>
            </View>

            <View style={[componenstyle.flexRow, componenstyle.inputBox]}>
              <TextInput onChangeText={password => {
                  setdatalogin(prevData => ({
                    ...prevData,
                    password: password,
                  }));
                }}
                placeholder="Write Your Password"
                placeholderTextColor={'grey'}
                keyboardType="default"
                autoCapitalize="none"
                secureTextEntry={true}
                style={{color:'black'}}
              />
            </View>
          </View>
          <View>
          <Text style={{alignSelf:'center', color:'#E6B325'}} onPress={() =>  navigation.navigate('SignUp', { })}>
              Sign Up Now
            </Text>
          </View>
          <TouchableOpacity onPress={() =>  navigation.navigate('Home', { })}
          // onPress={() => NavigationContainer.navigate(LoginAuth(datalogin))}
            style={[
              componenstyle.flexCenter,
              componenstyle.MainButton,
              {marginTop: '3%', marginBottom: '3%',backgroundColor: "#395B64"},
            ]}>
            <Text style={[ componenstyle.textbold,{color:'#E6B325'}]}>
              Sign In
            </Text>
          </TouchableOpacity>
          <View style={componenstyle.flexCenter}></View>
        </View>
      </ScrollView>
    </>
  );
};

export default SignIn;
