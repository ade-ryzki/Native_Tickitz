import React from 'react';
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {componenstyle, Auth} from '../../../helper/componenstyle';
const ForgotPassword = () => {
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
              Forgot Password
            </Text>
            <Text>
            we'll send a link to your email shortly
            </Text>
          </View>
          <View>
            <View>
              <Text style={[componenstyle.textBlack]}>Email</Text>
            </View>
            <View style={[componenstyle.inputBox]}>
              <TextInput
                placeholder="Write Your Email Address"
                placeholderTextColor={'grey'}
                keyboardType="email-address"
              />
            </View>
          </View>
          <TouchableOpacity
            style={[
              componenstyle.flexCenter,
              componenstyle.MainButton,
              {marginTop: '3%', marginBottom: '3%'},
            ]}>
            <Text style={[componenstyle.textWhite, componenstyle.textbold]}>
              Send
            </Text>
          </TouchableOpacity>
          <View style={componenstyle.flexCenter}></View>
        </View>
      </ScrollView>
    </>
  );
};

export default ForgotPassword;
