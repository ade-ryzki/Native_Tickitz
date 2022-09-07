import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, ScrollView,  StyleSheet, Alert, Pressable, TouchableOpacity, Image, SectionList, RefreshControl, ToastAndroid, SafeAreaView, StatusBar, Button, TextInput} from 'react-native';
import { commonStyle } from '../../../helper/commonStyle';
import messaging from '@react-native-firebase/messaging';

const Booking = () => {
useEffect(() => {
        const unsubscribe = messaging().onMessage(async remoteMessage => {
          Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
        });
    
        return unsubscribe;
      }, []);

    return (
      <>
        <ScrollView style={{marginHorizontal: 15}}>
          <View>
            <Text style={{color:'blue', fontStyle:'italic', marginLeft: 27, marginTop: 15}}></Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 30, backgroundColor: 'white', elevation: 3, alignItems: 'center', padding: 10, marginVertical: 20 }}>
              <Text style={{ alignItems: 'center', justifyContent: 'center'}}>Spider-Man: Homecoming</Text>
              <TouchableOpacity style={{backgroundColor: '#D6D8E7', width: 120, height: 30, alignItems: 'center', justifyContent: 'center', borderRadius: 10}}>
                <Text style={{color: 'blue', fontWeight: '500', textAlign: 'center'}}>Change movie</Text>
              </TouchableOpacity>
            </View>
            <Text style={{marginLeft: 27}}>Choose Your Seat</Text>
            <View>
              <Text style={{margin: 20, textAlign: 'center', fontSize: 20}}>Screen</Text>
             <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <View style={{marginRight: 45}}>
                <View style={{flexDirection: 'row'}}>
              <TextInput style={{borderColor: 'black', borderWidth: 1, width: 17, backgroundColor: '#D6D8E7', borderRadius: 5, height: 20, marginHorizontal: 4}}>1</TextInput>
              <TextInput style={{borderColor: 'black', borderWidth: 1, width: 17, backgroundColor: '#D6D8E7', borderRadius: 5, height: 20, marginHorizontal: 4}}>1</TextInput>
              <TextInput style={{borderColor: 'black', borderWidth: 1, width: 17, backgroundColor: '#D6D8E7', borderRadius: 5, height: 20, marginHorizontal: 4}}>1</TextInput>
              <TextInput style={{borderColor: 'black', borderWidth: 1, width: 17, backgroundColor: '#D6D8E7', borderRadius: 5, height: 20, marginHorizontal: 4}}>1</TextInput>
              <TextInput style={{borderColor: 'black', borderWidth: 1, width: 17, backgroundColor: '#D6D8E7', borderRadius: 5, height: 20, marginHorizontal: 4}}>1</TextInput>
              <TextInput style={{borderColor: 'black', borderWidth: 1, width: 17, backgroundColor: '#D6D8E7', borderRadius: 5, height: 20, marginHorizontal: 4}}>1</TextInput>
              </View>
              <View style={{flexDirection: 'row'}}>
              <TextInput style={{borderColor: 'black', borderWidth: 1, width: 17, backgroundColor: '#D6D8E7', borderRadius: 5, height: 20, margin: 4}}>1</TextInput>
              <TextInput style={{borderColor: 'black', borderWidth: 1, width: 17, backgroundColor: '#D6D8E7', borderRadius: 5, height: 20, margin: 4}}>1</TextInput>
              <TextInput style={{borderColor: 'black', borderWidth: 1, width: 17, backgroundColor: '#D6D8E7', borderRadius: 5, height: 20, margin: 4}}>1</TextInput>
              <TextInput style={{borderColor: 'black', borderWidth: 1, width: 17, backgroundColor: '#D6D8E7', borderRadius: 5, height: 20, margin: 4}}>1</TextInput>
              <TextInput style={{borderColor: 'black', borderWidth: 1, width: 17, backgroundColor: '#D6D8E7', borderRadius: 5, height: 20, margin: 4}}>1</TextInput>
              <TextInput style={{borderColor: 'black', borderWidth: 1, width: 17, backgroundColor: '#D6D8E7', borderRadius: 5, height: 20, margin: 4}}>1</TextInput>
              </View>
              <View style={{flexDirection: 'row'}}>
              <TextInput style={{borderColor: 'black', borderWidth: 1, width: 17, backgroundColor: '#D6D8E7', borderRadius: 5, height: 20, marginHorizontal: 4}}>1</TextInput>
              <TextInput style={{borderColor: 'black', borderWidth: 1, width: 17, backgroundColor: '#D6D8E7', borderRadius: 5, height: 20, marginHorizontal: 4}}>1</TextInput>
              <TextInput style={{borderColor: 'black', borderWidth: 1, width: 17, backgroundColor: '#D6D8E7', borderRadius: 5, height: 20, marginHorizontal: 4}}>1</TextInput>
              <TextInput style={{borderColor: 'black', borderWidth: 1, width: 17, backgroundColor: '#D6D8E7', borderRadius: 5, height: 20, marginHorizontal: 4}}>1</TextInput>
              <TextInput style={{borderColor: 'black', borderWidth: 1, width: 17, backgroundColor: '#D6D8E7', borderRadius: 5, height: 20, marginHorizontal: 4}}>1</TextInput>
              <TextInput style={{borderColor: 'black', borderWidth: 1, width: 17, backgroundColor: '#D6D8E7', borderRadius: 5, height: 20, marginHorizontal: 4}}>1</TextInput>
              </View>
                <View style={{flexDirection: 'row'}}>
              <TextInput style={{borderColor: 'black', borderWidth: 1, width: 17, backgroundColor: '#D6D8E7', borderRadius: 5, height: 20, margin: 4}}>1</TextInput>
              <TextInput style={{borderColor: 'black', borderWidth: 1, width: 17, backgroundColor: '#D6D8E7', borderRadius: 5, height: 20, margin: 4}}>1</TextInput>
              <TextInput style={{borderColor: 'black', borderWidth: 1, width: 17, backgroundColor: '#D6D8E7', borderRadius: 5, height: 20, margin: 4}}>1</TextInput>
              <TextInput style={{borderColor: 'black', borderWidth: 1, width: 17, backgroundColor: '#D6D8E7', borderRadius: 5, height: 20, margin: 4}}>1</TextInput>
              <TextInput style={{borderColor: 'black', borderWidth: 1, width: 17, backgroundColor: '#D6D8E7', borderRadius: 5, height: 20, margin: 4}}>1</TextInput>
              <TextInput style={{borderColor: 'black', borderWidth: 1, width: 17, backgroundColor: '#D6D8E7', borderRadius: 5, height: 20, margin: 4}}>1</TextInput>
              </View>
              <View style={{flexDirection: 'row'}}>
              <TextInput style={{borderColor: 'black', borderWidth: 1, width: 17, backgroundColor: '#D6D8E7', borderRadius: 5, height: 20, marginHorizontal: 4}}>1</TextInput>
              <TextInput style={{borderColor: 'black', borderWidth: 1, width: 17, backgroundColor: '#D6D8E7', borderRadius: 5, height: 20, marginHorizontal: 4}}>1</TextInput>
              <TextInput style={{borderColor: 'black', borderWidth: 1, width: 17, backgroundColor: '#D6D8E7', borderRadius: 5, height: 20, marginHorizontal: 4}}>1</TextInput>
              <TextInput style={{borderColor: 'black', borderWidth: 1, width: 17, backgroundColor: '#D6D8E7', borderRadius: 5, height: 20, marginHorizontal: 4}}>1</TextInput>
              <TextInput style={{borderColor: 'black', borderWidth: 1, width: 17, backgroundColor: '#D6D8E7', borderRadius: 5, height: 20, marginHorizontal: 4}}>1</TextInput>
              <TextInput style={{borderColor: 'black', borderWidth: 1, width: 17, backgroundColor: '#D6D8E7', borderRadius: 5, height: 20, marginHorizontal: 4}}>1</TextInput>
              </View>
              <View style={{flexDirection: 'row'}}>
              <TextInput style={{borderColor: 'black', borderWidth: 1, width: 17, backgroundColor: '#D6D8E7', borderRadius: 5, height: 20, margin: 4}}>1</TextInput>
              <TextInput style={{borderColor: 'black', borderWidth: 1, width: 17, backgroundColor: '#D6D8E7', borderRadius: 5, height: 20, margin: 4}}>1</TextInput>
              <TextInput style={{borderColor: 'black', borderWidth: 1, width: 17, backgroundColor: '#D6D8E7', borderRadius: 5, height: 20, margin: 4}}>1</TextInput>
              <TextInput style={{borderColor: 'black', borderWidth: 1, width: 17, backgroundColor: '#D6D8E7', borderRadius: 5, height: 20, margin: 4}}>1</TextInput>
              <TextInput style={{borderColor: 'black', borderWidth: 1, width: 17, backgroundColor: '#D6D8E7', borderRadius: 5, height: 20, margin: 4}}>1</TextInput>
              <TextInput style={{borderColor: 'black', borderWidth: 1, width: 17, backgroundColor: '#D6D8E7', borderRadius: 5, height: 20, margin: 4}}>1</TextInput>
              </View>
              <View style={{flexDirection: 'row'}}>
              <TextInput style={{borderColor: 'black', borderWidth: 1, width: 17, backgroundColor: '#D6D8E7', borderRadius: 5, height: 20, marginHorizontal: 4}}>1</TextInput>
              <TextInput style={{borderColor: 'black', borderWidth: 1, width: 17, backgroundColor: '#D6D8E7', borderRadius: 5, height: 20, marginHorizontal: 4}}>1</TextInput>
              <TextInput style={{borderColor: 'black', borderWidth: 1, width: 17, backgroundColor: '#D6D8E7', borderRadius: 5, height: 20, marginHorizontal: 4}}>1</TextInput>
              <TextInput style={{borderColor: 'black', borderWidth: 1, width: 17, backgroundColor: '#D6D8E7', borderRadius: 5, height: 20, marginHorizontal: 4}}>1</TextInput>
              <TextInput style={{borderColor: 'black', borderWidth: 1, width: 17, backgroundColor: '#D6D8E7', borderRadius: 5, height: 20, marginHorizontal: 4}}>1</TextInput>
              <TextInput style={{borderColor: 'black', borderWidth: 1, width: 17, backgroundColor: '#D6D8E7', borderRadius: 5, height: 20, marginHorizontal: 4}}>1</TextInput>
              </View>
                </View>
                <View>
                <View style={{flexDirection: 'row'}}>
              <TextInput style={{borderColor: 'black', borderWidth: 1, width: 17, backgroundColor: '#D6D8E7', borderRadius: 5, height: 20, marginHorizontal: 4}}>1</TextInput>
              <TextInput style={{borderColor: 'black', borderWidth: 1, width: 17, backgroundColor: '#D6D8E7', borderRadius: 5, height: 20, marginHorizontal: 4}}>1</TextInput>
              <TextInput style={{borderColor: 'black', borderWidth: 1, width: 17, backgroundColor: '#D6D8E7', borderRadius: 5, height: 20, marginHorizontal: 4}}>1</TextInput>
              <TextInput style={{borderColor: 'black', borderWidth: 1, width: 17, backgroundColor: '#D6D8E7', borderRadius: 5, height: 20, marginHorizontal: 4}}>1</TextInput>
              <TextInput style={{borderColor: 'black', borderWidth: 1, width: 17, backgroundColor: '#D6D8E7', borderRadius: 5, height: 20, marginHorizontal: 4}}>1</TextInput>
              <TextInput style={{borderColor: 'black', borderWidth: 1, width: 17, backgroundColor: '#D6D8E7', borderRadius: 5, height: 20, marginHorizontal: 4}}>1</TextInput>
              </View>
              <View style={{flexDirection: 'row'}}>
              <TextInput style={{borderColor: 'black', borderWidth: 1, width: 17, backgroundColor: '#D6D8E7', borderRadius: 5, height: 20, margin: 4}}>1</TextInput>
              <TextInput style={{borderColor: 'black', borderWidth: 1, width: 17, backgroundColor: '#D6D8E7', borderRadius: 5, height: 20, margin: 4}}>1</TextInput>
              <TextInput style={{borderColor: 'black', borderWidth: 1, width: 17, backgroundColor: '#D6D8E7', borderRadius: 5, height: 20, margin: 4}}>1</TextInput>
              <TextInput style={{borderColor: 'black', borderWidth: 1, width: 17, backgroundColor: '#D6D8E7', borderRadius: 5, height: 20, margin: 4}}>1</TextInput>
              <TextInput style={{borderColor: 'black', borderWidth: 1, width: 17, backgroundColor: '#D6D8E7', borderRadius: 5, height: 20, margin: 4}}>1</TextInput>
              <TextInput style={{borderColor: 'black', borderWidth: 1, width: 17, backgroundColor: '#D6D8E7', borderRadius: 5, height: 20, margin: 4}}>1</TextInput>
              </View>
              <View style={{flexDirection: 'row'}}>
              <TextInput style={{borderColor: 'black', borderWidth: 1, width: 17, backgroundColor: '#D6D8E7', borderRadius: 5, height: 20, marginHorizontal: 4}}>1</TextInput>
              <TextInput style={{borderColor: 'black', borderWidth: 1, width: 17, backgroundColor: '#D6D8E7', borderRadius: 5, height: 20, marginHorizontal: 4}}>1</TextInput>
              <TextInput style={{borderColor: 'black', borderWidth: 1, width: 17, backgroundColor: '#D6D8E7', borderRadius: 5, height: 20, marginHorizontal: 4}}>1</TextInput>
              <TextInput style={{borderColor: 'black', borderWidth: 1, width: 17, backgroundColor: '#D6D8E7', borderRadius: 5, height: 20, marginHorizontal: 4}}>1</TextInput>
              <TextInput style={{borderColor: 'black', borderWidth: 1, width: 17, backgroundColor: '#D6D8E7', borderRadius: 5, height: 20, marginHorizontal: 4}}>1</TextInput>
              <TextInput style={{borderColor: 'black', borderWidth: 1, width: 17, backgroundColor: '#D6D8E7', borderRadius: 5, height: 20, marginHorizontal: 4}}>1</TextInput>
              </View>
                <View style={{flexDirection: 'row'}}>
              <TextInput style={{borderColor: 'black', borderWidth: 1, width: 17, backgroundColor: '#D6D8E7', borderRadius: 5, height: 20, margin: 4}}>1</TextInput>
              <TextInput style={{borderColor: 'black', borderWidth: 1, width: 17, backgroundColor: '#D6D8E7', borderRadius: 5, height: 20, margin: 4}}>1</TextInput>
              <TextInput style={{borderColor: 'black', borderWidth: 1, width: 17, backgroundColor: '#D6D8E7', borderRadius: 5, height: 20, margin: 4}}>1</TextInput>
              <TextInput style={{borderColor: 'black', borderWidth: 1, width: 17, backgroundColor: '#D6D8E7', borderRadius: 5, height: 20, margin: 4}}>1</TextInput>
              <TextInput style={{borderColor: 'black', borderWidth: 1, width: 17, backgroundColor: '#D6D8E7', borderRadius: 5, height: 20, margin: 4}}>1</TextInput>
              <TextInput style={{borderColor: 'black', borderWidth: 1, width: 17, backgroundColor: '#D6D8E7', borderRadius: 5, height: 20, margin: 4}}>1</TextInput>
              </View>
              <View style={{flexDirection: 'row'}}>
              <TextInput style={{borderColor: 'black', borderWidth: 1, width: 17, backgroundColor: '#D6D8E7', borderRadius: 5, height: 20, marginHorizontal: 4}}>1</TextInput>
              <TextInput style={{borderColor: 'black', borderWidth: 1, width: 17, backgroundColor: '#D6D8E7', borderRadius: 5, height: 20, marginHorizontal: 4}}>1</TextInput>
              <TextInput style={{borderColor: 'black', borderWidth: 1, width: 17, backgroundColor: '#D6D8E7', borderRadius: 5, height: 20, marginHorizontal: 4}}>1</TextInput>
              <TextInput style={{borderColor: 'black', borderWidth: 1, width: 17, backgroundColor: '#D6D8E7', borderRadius: 5, height: 20, marginHorizontal: 4}}>1</TextInput>
              <TextInput style={{borderColor: 'black', borderWidth: 1, width: 17, backgroundColor: '#D6D8E7', borderRadius: 5, height: 20, marginHorizontal: 4}}>1</TextInput>
              <TextInput style={{borderColor: 'black', borderWidth: 1, width: 17, backgroundColor: '#D6D8E7', borderRadius: 5, height: 20, marginHorizontal: 4}}>1</TextInput>
              </View>
              <View style={{flexDirection: 'row'}}>
              <TextInput style={{borderColor: 'black', borderWidth: 1, width: 17, backgroundColor: '#D6D8E7', borderRadius: 5, height: 20, margin: 4}}>1</TextInput>
              <TextInput style={{borderColor: 'black', borderWidth: 1, width: 17, backgroundColor: '#D6D8E7', borderRadius: 5, height: 20, margin: 4}}>1</TextInput>
              <TextInput style={{borderColor: 'black', borderWidth: 1, width: 17, backgroundColor: '#D6D8E7', borderRadius: 5, height: 20, margin: 4}}>1</TextInput>
              <TextInput style={{borderColor: 'black', borderWidth: 1, width: 17, backgroundColor: '#D6D8E7', borderRadius: 5, height: 20, margin: 4}}>1</TextInput>
              <TextInput style={{borderColor: 'black', borderWidth: 1, width: 17, backgroundColor: '#D6D8E7', borderRadius: 5, height: 20, margin: 4}}>1</TextInput>
              <TextInput style={{borderColor: 'black', borderWidth: 1, width: 17, backgroundColor: '#D6D8E7', borderRadius: 5, height: 20, margin: 4}}>1</TextInput>
              </View>
              <View style={{flexDirection: 'row'}}>
              <TextInput style={{borderColor: 'black', borderWidth: 1, width: 17, backgroundColor: '#D6D8E7', borderRadius: 5, height: 20, marginHorizontal: 4}}>1</TextInput>
              <TextInput style={{borderColor: 'black', borderWidth: 1, width: 17, backgroundColor: '#D6D8E7', borderRadius: 5, height: 20, marginHorizontal: 4}}>1</TextInput>
              <TextInput style={{borderColor: 'black', borderWidth: 1, width: 17, backgroundColor: '#D6D8E7', borderRadius: 5, height: 20, marginHorizontal: 4}}>1</TextInput>
              <TextInput style={{borderColor: 'black', borderWidth: 1, width: 17, backgroundColor: '#D6D8E7', borderRadius: 5, height: 20, marginHorizontal: 4}}>1</TextInput>
              <TextInput style={{borderColor: 'black', borderWidth: 1, width: 17, backgroundColor: '#D6D8E7', borderRadius: 5, height: 20, marginHorizontal: 4}}>1</TextInput>
              <TextInput style={{borderColor: 'black', borderWidth: 1, width: 17, backgroundColor: '#D6D8E7', borderRadius: 5, height: 20, marginHorizontal: 4}}>1</TextInput>
              </View>
                </View>
             </View>
             <Text style={{marginVertical: 20, marginLeft: 70}}>Seating key</Text>
             <View style={{flexDirection: 'row'}}>
             <View style={{flexDirection: 'row', marginLeft: 65}}>
             <TextInput style={{borderColor: 'black', borderWidth: 1, width: 17, backgroundColor: '#D6D8E7', borderRadius: 5, height: 20, marginHorizontal: 4}}>1</TextInput>
             <Text>Available</Text>
             </View>
             <View style={{flexDirection: 'row', marginLeft: 15}}>
             <TextInput style={{borderColor: 'black', borderWidth: 1, width: 17, backgroundColor: '#5F2EEA', borderRadius: 5, height: 20, marginHorizontal: 4}}>1</TextInput>
             <Text>Available</Text>
             </View>
             <View style={{flexDirection: 'row', marginLeft: 15}}>
             <TextInput style={{borderColor: 'black', borderWidth: 1, width: 17, backgroundColor: '#6E7191', borderRadius: 5, height: 20, marginHorizontal: 4}}>1</TextInput>
             <Text>Available</Text>
             </View>
             </View>
            </View>

            <View style={{marginVertical: 25, margin: 35}}>
            <Text>Order Info</Text>
            <View style={{backgroundColor: 'white', elevation
          : 2, padding: 25, marginTop: 15}}>
              <Text style={{textAlign: 'center'}}>CineOne21</Text>
              <Text style={{textAlign: 'center', marginVertical: 15}}>CineOne21 Cinema</Text>
              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text>Movie selected</Text>
                <Text>Spider-Man: Homecoming</Text>
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text>Tuesday, 07 July 2020</Text>
                <Text>02:00</Text>
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text>One ticket price</Text>
                <Text>$10</Text>
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text>One ticket price</Text>
                <Text>$10</Text>
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text>Seat choosed</Text>
                <Text>C4, C5, C6</Text>
              </View>
              <View style={{borderBottomColor: 'black',
                  borderBottomWidth: StyleSheet.hairlineWidth, marginVertical: 25}} />
              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text>Total Payment</Text>
                <Text>$30</Text>
              </View>
            </View>
            </View>

            <View style={{marginHorizontal: 35, marginBottom: 25, flexDirection: 'row', justifyContent: 'space-between'}}>
              <TouchableOpacity style={{backgroundColor: '#E5E5E5', height: 35, width: 160, justifyContent: 'center', alignItems: 'center', elevation: 2, borderRadius: 10}}>
                <Text style={{color: '#5F2EEA'}}>Change your movie</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{backgroundColor: '#5F2EEA', height: 35, width: 160, justifyContent: 'center', alignItems: 'center', elevation: 2, borderRadius: 10}}>
                <Text style={{color: '#F7F7FC'}}>Checkout now</Text>
              </TouchableOpacity>
            </View>
        </ScrollView>
      </>
    );
  };
  
  export default Booking;