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
const SignIn = () => {
  const [datalogin, setdatalogin]=useState({
    email :"",
    password :""

  })
  const dispatch = useDispatch()
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
                componenstyle.textbold,
                componenstyle.textBlack,
                {fontSize: 35},
              ]}>
              Sign In
            </Text>
            <Text>
              Sign in with your data that you entered during your registration
            </Text>
          </View>
          <View>
            <View>
              <Text style={[componenstyle.textBlack]}>Email</Text>
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
              />
            </View>
          </View>
          <View>
            <View>
              <Text style={[componenstyle.textBlack]}>Password</Text>
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
              />
            </View>
          </View>
          <TouchableOpacity onPress={() => dispatch(LoginAuth(datalogin))}
            style={[
              componenstyle.flexCenter,
              componenstyle.MainButton,
              {marginTop: '3%', marginBottom: '3%'},
            ]}>
            <Text style={[componenstyle.textWhite, componenstyle.textbold]}>
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
