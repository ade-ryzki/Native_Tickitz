import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { RegisterAuth } from '../../../redux/action/auth';
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {componenstyle} from '../../../helper/componenstyle';
const SignUp = () => {
  const [dataregister, setdataregister]= useState({
    name: "",
    email: "",
    password: "",
    role: ""
  })
  const dispatch = useDispatch
  return (
    <>
      <ScrollView style={{backgroundColor: 'white'}}>
        <View style={[componenstyle.body]}>
          <View style={[componenstyle.flexRow]}>
            <Image
              source={require('../../../assets/Logo/TickitzLogo.png')}
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
                componenstyle.textBlack,
                componenstyle.textbold,
                {fontSize: 35},
              ]}>
              Sign Up
            </Text>
            <Text>Fill Your Additional Details</Text>
          </View>
          {/* <View>
            <View>
              <Text style={[componenstyle.textBlack]}>First Name</Text>
            </View>
            <View style={[componenstyle.inputBox]}>
              <TextInput
                placeholder="Write Your First Name"
                placeholderTextColor={'grey'}
                autoCapitalize="words"
              />
            </View>
          </View> */}
          <View>
            <View>
              <Text style={[componenstyle.textBlack]}>Name</Text>
            </View>
            <View style={[componenstyle.inputBox]}>
              <TextInput onChangeText={name => {
                setdataregister(prevData => ({
                  ...prevData,
                  name: name,
                }))
              }}
                placeholder="Write Your Last Name"
                placeholderTextColor={'grey'}
                autoCapitalize="words"
              />
            </View>
          </View>
          {/* <View>
            <View>
              <Text style={[componenstyle.textBlack]}>Phone Number</Text>
            </View>
            <View style={[componenstyle.inputBox]}>
              <TextInput
                placeholder="Write Your Phone Number"
                placeholderTextColor={'grey'}
                keyboardType="numeric"
              />
            </View>
          </View> */}
          <View>
            <View>
              <Text style={[componenstyle.textBlack]}>Email</Text>
            </View>
            <View style={[componenstyle.inputBox]}>
              <TextInput onChangeText={email =>{
                setdataregister(prevData => ({
                  ...prevData,
                  email: email,
                }))
              }}
                placeholder="Write Your Email Address"
                placeholderTextColor={'grey'}
                keyboardType="email-address"
              />
            </View>
          </View>
          <View>
            <View>
              <Text style={[componenstyle.textBlack]}>Password</Text>
            </View>
            <View style={[componenstyle.flexRow, componenstyle.inputBox]}>
              <TextInput onChangeText={password => {
                setdataregister(prevData => ({
                  ...prevData,
                  password: password,
                }))
              }}
                placeholder="Write Your Password"
                placeholderTextColor={'grey'}
                keyboardType="default"
                autoCapitalize="none"
                secureTextEntry={true}
                style={[{flex: 1}]}
              />
              <Pressable style={[componenstyle.alignSelfCenter]}></Pressable>
            </View>
          </View>
          <View>
            <View>
              <Text style={[componenstyle.textBlack]}>Role</Text>
            </View>
            <View style={[componenstyle.inputBox]}>
              <TextInput onChangeText={role =>{
                setdataregister(prevData =>({
                  ...prevData,
                  role: role,
                }))
              }}
                placeholder="Write Your Role"
                placeholderTextColor={'grey'}
                keyboardType="role"
              />
            </View>
          </View>
          <TouchableOpacity onPress={()=> dispatch(RegisterAuth(dataregister))}
            style={[
              componenstyle.flexCenter,
              componenstyle.MainButton,
              {marginTop: '3%', marginBottom: '3%'},
            ]}>
            <Text style={[componenstyle.textWhite, componenstyle.textbold]}>
              Sign Up
            </Text>
          </TouchableOpacity>
          <View style={componenstyle.flexCenter}></View>
        </View>
      </ScrollView>
    </>
  );
};

export default SignUp;
