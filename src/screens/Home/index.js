import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, ScrollView,  StyleSheet, FlatList, Pressable, TouchableOpacity, Image, SectionList, RefreshControl, ToastAndroid, SafeAreaView, StatusBar, Button, TextInput} from 'react-native';
import { commonStyle } from '../../../helper/commonStyle';

const Home = ({navigation, route}) => {
    const [loading, setLoading] = useState(false),
            [refetch, setRefetch] = useState(false)

            const [movie, setMovie] = useState({
                    "data": {
                        "totalAllData": 0,
                        "totalRows": 0,
                        "totalPage": 0,
                        "results": []
                    }
                })
                
                useEffect(() => {
                    setLoading(true);
                    axios.get('http://192.168.1.13:4000/api/v1/product').then((res) => {
                        setDataCoffe(res.data)
                    }).catch((err) => {
                        console.log(err, 'error') //pake toast
                        ToastAndroid.show('Cek Koneksi Jaringan', ToastAndroid.SHORT)
                    }).finally(() => {
                        setLoading(false);
                    })
                }, [refetch])

    return (
      <SafeAreaView >
        <View style={styles.header}>
                <View style={[commonStyle.flexRow, commonStyle.flexBetween]}>
                <Image source={require('../../../assets/image/Vector.png')} style={{
                            width: 100, height: 50, resizeMode: 'contain', alignSelf: 'center'
                        }} />
                    <Pressable onPress={() => navigation.navigate('SignUp', {
                        })} style={{ backgroundColor: "#5b79cf", padding: 15, borderRadius: 10, }} android_ripple={{ color: "#fff"}}>
                      <Text style={[commonStyle.textBlack]}>Sign Up</Text>  
                    </Pressable>
                    
                </View>
            </View>
        <ScrollView style={styles.scrollView}>
            <View >
                <View style={[commonStyle. ml, commonStyle. mt ,{alignSelf:'center'}]}>
                    <Text style={{fontSize:20, fontWeight:'800'}}>Nearest Cinema, Newest Movie, Find out now!</Text>
                    <Text style={[commonStyle.textColor, commonStyle.textBold, commonStyle.textSize,{alignSelf:'center'} ]}>Find Out Now!</Text>   
                </View>
                <View style= {[{alignSelf:'center'},commonStyle.flexRow]}>
                    <Image source={require('../../../assets/image/spiderman.png')} style={[{
                         width: 100, alignSelf: 'center', marginTop:90, 
                    }, commonStyle.mr ]}  />
                    <Image source={require('../../../assets/image/lion.png')} style={[{
                        width: 100, alignSelf: 'center', marginTop:60, 
                    }, commonStyle.mr ]}  />
                    <Image source={require('../../../assets/image/jedi.png')} style={[{
                        width: 100, alignSelf: 'center', marginTop:30, 
                    }, commonStyle.mr ]}  />
                </View>
            </View>
            <ScrollView style={{backgroundColor:'#F5F6F8', marginVertical:10}}>
            <View style={[commonStyle.m, commonStyle.flexBetween, commonStyle.flexRow,{marginTop:20} ]}>
                    <Text style={[commonStyle.textColor, commonStyle.textBold, {fontSize:20, fontWeight:'bold'}]}>Upcoming Movies</Text>
                    <Text style={[commonStyle.textColor, {fontSize:20, fontWeight:'bold'}]}>View All</Text>
                </View>
                <ScrollView style={[commonStyle.flexRow, {margin:30, alignSelf:'center'}]} horizontal={true}>
                    <View style={[ {margin:20, alignContent:'center', backgroundColor: "#FFFFFF", borderRadius:10, padding:50}]}>
                    <Image source={require('../../../assets/image/spider.png')} style={[{
                            width: 180, height:300 , alignContent:'center', borderRadius:5, margin:10
                        },]}  />
                    </View>
                    <View style={[ {margin:20, alignContent:'center', backgroundColor: "#FFFFFF", borderRadius:10, padding:50}]}>
                    <Image source={require('../../../assets/image/spider.png')} style={[{
                            width: 180, height:300 , alignContent:'center', borderRadius:5, margin:10
                        },]}  />
                    </View>
                    <View style={[ {margin:20, alignContent:'center', backgroundColor: "#FFFFFF", borderRadius:10, padding:50}]}>
                    <Image source={require('../../../assets/image/spider.png')} style={[{
                            width: 180, height:300 , alignContent:'center', borderRadius:5, margin:10
                        },]}  />
                    </View>
                    <View style={[ {margin:20, alignContent:'center', backgroundColor: "#FFFFFF", borderRadius:10, padding:50}]}>
                    <Image source={require('../../../assets/image/spider.png')} style={[{
                            width: 180, height:300 , alignContent:'center', borderRadius:5, margin:10
                        },]}  />
                    </View>
                </ScrollView>
            </ScrollView>
            <ScrollView style={{backgroundColor:'#F5F6F8', marginVertical:10}}>
                <View style={[commonStyle.m, commonStyle.flexBetween, commonStyle.flexRow,{marginTop:20} ]}>
                    <Text style={[commonStyle.textBlack, commonStyle.textBold, {fontSize:20, fontWeight:'bold'}]}>Upcoming Movies</Text>
                    <Text style={[commonStyle.textColor, {fontSize:20, fontWeight:'bold'}]}>View All</Text>
                </View>
                <ScrollView style={[commonStyle.flexRow, {margin:30,}]} horizontal={true}>
                    <View style={[commonStyle.flexRow, {marginTop:20, marginHorizontal:10}]} >
                        <Text style={{backgroundColor:'#5F2EEA', fontWeight:'bold', padding:30, borderRadius:5,color:'white', fontSize:20}}>Januari</Text>
                    </View>
                    <View style={[commonStyle.flexRow, {marginTop:20, marginHorizontal:10}]} >
                        <Text style={{backgroundColor:'#5F2EEA', fontWeight:'bold', padding:30, borderRadius:5,color:'white', fontSize:20}}>Januari</Text>
                    </View>
                    <View style={[commonStyle.flexRow, {marginTop:20, marginHorizontal:10}]} >
                        <Text style={{backgroundColor:'#5F2EEA', fontWeight:'bold', padding:30, borderRadius:5,color:'white', fontSize:20}}>Januari</Text>
                    </View>
                    <View style={[commonStyle.flexRow, {marginTop:20, marginHorizontal:10}]} >
                        <Text style={{backgroundColor:'#5F2EEA', fontWeight:'bold', padding:30, borderRadius:5,color:'white', fontSize:20}}>Januari</Text>
                    </View>
                    <View style={[commonStyle.flexRow, {marginTop:20, marginHorizontal:10}]} >
                        <Text style={{backgroundColor:'#5F2EEA', fontWeight:'bold', padding:30, borderRadius:5,color:'white', fontSize:20}}>Januari</Text>
                    </View>
                    <View style={[commonStyle.flexRow, {marginTop:20, marginHorizontal:10}]} >
                        <Text style={{backgroundColor:'#5F2EEA', fontWeight:'bold', padding:30, borderRadius:5,color:'white', fontSize:20}}>Januari</Text>
                    </View>
                </ScrollView>
                <ScrollView style={[commonStyle.flexRow, {margin:30,}]} horizontal={true}>
                    <View style={[ {margin:20, alignSelf:'center', backgroundColor: "#FFFFFF", borderRadius:10, padding:50}]}>
                        <Image source={require('../../../assets/image/spider.png')} style={[{ width: 180, height:300 , alignContent:'center', borderRadius:5, margin:10
                            },]}  />
                        <View>
                            <Text style={{alignSelf:'center', fontWeight:'bold', fontSize:20,marginBottom:5}}>Black Widow</Text>
                            <Text style={{alignSelf:'center',marginBottom:10}}>Action, Adventure, Sci-Fi</Text>
                        </View>
                        <Pressable style={{ backgroundColor: "#5F2EEA", padding: 15, borderRadius: 10, margin:5}} android_ripple={{ color: "#fff"}}>
                        <Text style={{fontWeight:'bold', fontSize:20, alignSelf:'center',}}>Detail</Text>  
                        </Pressable>
                    </View>
                    <View style={[ {margin:20, alignSelf:'center', backgroundColor: "#FFFFFF", borderRadius:10, padding:50}]}>
                        <Image source={require('../../../assets/image/blackwidow.png')} style={[{ width: 180, height:300 , alignContent:'center', borderRadius:5, margin:10
                            },]}  />
                        <View>
                            <Text style={{alignSelf:'center', fontWeight:'bold', fontSize:20,marginBottom:5}}>Black Widow</Text>
                            <Text style={{alignSelf:'center',marginBottom:10}}>Action, Adventure, Sci-Fi</Text>
                        </View>
                        <Pressable style={{ backgroundColor: "#5F2EEA", padding: 15, borderRadius: 10, margin:5}} android_ripple={{ color: "#fff"}}>
                        <Text style={{fontWeight:'bold', fontSize:20, alignSelf:'center',}}>Detail</Text>  
                        </Pressable>
                    </View>
                    <View style={[ {margin:20, alignSelf:'center', backgroundColor: "#FFFFFF", borderRadius:10, padding:50}]}>
                        <Image source={require('../../../assets/image/blackwidow.png')} style={[{ width: 180, height:300 , alignContent:'center', borderRadius:5, margin:10
                            },]}  />
                        <View>
                            <Text style={{alignSelf:'center', fontWeight:'bold', fontSize:20,marginBottom:5}}>Black Widow</Text>
                            <Text style={{alignSelf:'center',marginBottom:10}}>Action, Adventure, Sci-Fi</Text>
                        </View>
                        <Pressable style={{ backgroundColor: "#5F2EEA", padding: 15, borderRadius: 10, margin:5}} android_ripple={{ color: "#fff"}}>
                        <Text style={{fontWeight:'bold', fontSize:20, alignSelf:'center',}}>Detail</Text>  
                        </Pressable>
                    </View>
                </ScrollView>
            </ScrollView>
            <ScrollView style={{ marginBottom:50}}>
                <View style={[commonStyle.m, commonStyle.flexBetween,{marginTop:20, backgroundColor:'#ffffff', alignSelf:'center', padding:100, borderRadius:10} ]}>
                    <Text style={{ fontSize:15, fontWeight:'bold', alignSelf:'center'}}>Be the vanguard of the Moviegoers</Text>  
                    <Text style={[commonStyle.textColor, commonStyle.textBold, commonStyle.textSize,{alignSelf:'center'} ]}>Moviegoers</Text>
                    <View style={[commonStyle.flexRow, { backgroundColor: '#f0f0f0', marginTop:20, }]}>
                    <TextInput placeholder="Masukkan Email..." style={{  borderRadius: 5, flex: 1, }} autoCapitalize='none' keyboardType='email-address' />
                    </View>
                        <Pressable onPress={() => navigation.navigate('SignUp', {
                        })} style={{ backgroundColor: "#5F2EEA", padding: 15, borderRadius: 10, margin:5, marginTop:25}} android_ripple={{ color: "#fff"}}>
                            <Text style={{fontWeight:'bold', fontSize:20, alignSelf:'center',}}>join now</Text>  
                        </Pressable>
                    <Text style={{alignSelf:'center', marginTop:15, marginBottom:5}}>By joining you as a Tickitz member,</Text>
                    <Text style={{alignSelf:'center'}}>we will always send you the latest updates via email .</Text>
                </View>
            </ScrollView>
            <ScrollView>
                <View style={[commonStyle.m, commonStyle.flexBetween,{marginTop:20, backgroundColor:'cyan', alignSelf:'center', paddingHorizontal:200, borderBottomEndRadius:10} ]}>
                  
                    <Text >tessssssssssssss</Text>  
                    <Text >tessssssssssssss</Text>  
                </View>
            </ScrollView>
        </ScrollView>
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
        elevation: 3, //elevation
        marginBottom: 10, //elevation
        shadowColor: '#5b79cf', //elevaiton (android 9)
        
    },
  });
  
  export default Home;
