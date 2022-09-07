import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, ScrollView,  StyleSheet, FlatList, Pressable, TouchableOpacity, Image, SectionList, RefreshControl, ToastAndroid, SafeAreaView, StatusBar, Button, TextInput} from 'react-native';
import { commonStyle } from '../../../helper/commonStyle';
import { commonConfig } from '../../../helper/commonConfig';

const Navbar = ({navigation}) => {
    // const loadData = 0;
    // const [movie, setMovie] = useState([]);
    // const [comming, setComming] = useState([]);
    // const url_backend = commonConfig.URL_BACKEND;
  
    // useEffect(() => { 
    //     if(loadData == 0){
    //         axios.get(`${url_backend}/api/v1/movies?page=2&limit=3`).then((res) => {
    //             // console.log('rs',res.data.data.results);
    //             setMovie(res.data.data.results);
    //             // setMovie(res) 
    //         }).catch((err) => {
    //             // console.log(err, 'error') 
    //             ToastAndroid.show('Cek Koneksi Jaringan', ToastAndroid.SHORT)
    //         }).finally(() => {});
    //         //copy dibawah / get other?
    //         axios.get(`${url_backend}/api/v1/movies?page=1&limit=8`).then((res) => {
    //             // console.log('dataaa commming',res.data.data.results);
    //             setComming(res.data.data.results);
    //             // setComming(res) 
    //         }).catch((err) => {
    //             console.log(err, 'error') 
    //             ToastAndroid.show('Cek Koneksi Jaringan', ToastAndroid.SHORT)
    //         }).finally(() => {});
    //     }

    // },[loadData])

    return (
      <SafeAreaView >
        <View style={styles.header}>
                <View style={[commonStyle.flexRow, commonStyle.flexBetween]}>
                <Image source={require('../../../assets/image/Vector.png')} style={{
                            width: 100, height: 50, resizeMode: 'contain', alignSelf: 'center'
                        }} />
                    <View style={[commonStyle.flexRow]}>
                    <Pressable 
                    onPress={() => navigation.navigate('SignIn', {
                        })} style={{ backgroundColor: "#5b79cf", padding: 15, borderRadius: 10, marginRight: 5 }} android_ripple={{ color: "#fff"}}>
                      <Text style={[commonStyle.textBlack]}>Sign In</Text>  
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate('SignUp', {
                        })} style={{ backgroundColor: "#5b79cf", padding: 15, borderRadius: 10, }} android_ripple={{ color: "#fff"}}>
                      <Text style={[commonStyle.textBlack]}>Sign Up</Text>  
                    </Pressable>
                    </View>
                </View>
            </View>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
    },
    scrollView: {
      
      marginHorizontal: 10,
    },
    text: {
      fontSize: 42,
    },
    header: {
        backgroundColor: '#ffff',
        padding: 10,
        elevation: 3, 
        marginBottom: 10, 
        shadowColor: '#5b79cf', 
        
    },
  });
  
  export default Navbar;