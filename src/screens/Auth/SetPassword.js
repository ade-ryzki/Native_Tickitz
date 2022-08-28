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
const SetPassword = () => {
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
              Set Password
            </Text>
            <Text>
            set your new password
            </Text>
          </View>
          <View>
            <View>
              <Text style={[componenstyle.textBlack]}>Password</Text>
            </View>

            <View style={[componenstyle.flexRow, componenstyle.inputBox]}>
              <TextInput
                placeholder="Write Your Password"
                placeholderTextColor={'grey'}
                keyboardType="default"
                autoCapitalize="none"
                secureTextEntry={true}
              />
            </View>
          </View>

          <View>
            <View>
              <Text style={[componenstyle.textBlack]}>Comfirm Password</Text>
            </View>

            <View style={[componenstyle.flexRow, componenstyle.inputBox]}>
              <TextInput
                placeholder="Write Your Comfirm Password"
                placeholderTextColor={'grey'}
                keyboardType="default"
                autoCapitalize="none"
                secureTextEntry={true}
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
              Submit
            </Text>
          </TouchableOpacity>
          <View style={componenstyle.flexCenter}></View>
        </View>
      </ScrollView>
    </>
  );
};

export default SetPassword;
