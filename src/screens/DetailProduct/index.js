import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, ScrollView,  StyleSheet, Alert, Pressable, TouchableOpacity, Image, SectionList, RefreshControl, ToastAndroid, SafeAreaView, StatusBar, Button, TextInput} from 'react-native';
import { commonStyle } from '../../../helper/commonStyle';
import messaging from '@react-native-firebase/messaging';

const DetailProduct = () => {
useEffect(() => {
        const unsubscribe = messaging().onMessage(async remoteMessage => {
          Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
        });
    
        return unsubscribe;
      }, []);

    return (
      <>
        <ScrollView style={{backgroundColor: 'white'}}>
          <View>
            <Text style={{color:'blue', fontStyle:'italic'}}>get detail product</Text>
            </View>
        </ScrollView>
      </>
    );
  };
  
  export default DetailProduct;