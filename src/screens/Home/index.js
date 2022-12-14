import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, ScrollView,  StyleSheet, FlatList, Pressable, TouchableOpacity, Image, SectionList, RefreshControl, ToastAndroid, SafeAreaView, StatusBar, Button, TextInput} from 'react-native';
import { commonStyle } from '../../../helper/commonStyle';
import { commonConfig } from '../../../helper/commonConfig';
import Navbar from '../components/Navbar';

const Home = ({navigation}) => {
    const loadData = 0;
    const [movie, setMovie] = useState([]);
    const [comming, setComming] = useState([]);
    const url_backend = commonConfig.URL_BACKEND;
  
    useEffect(() => { 
        if(loadData == 0){
            axios.get(`${url_backend}/api/v1/movies?page=2&limit=3`).then((res) => {
                // console.log('rs',res.data.data.results);
                setMovie(res.data.data.results);
                // setMovie(res) 
            }).catch((err) => {
                // console.log(err, 'error') 
                ToastAndroid.show('Cek Koneksi Jaringan', ToastAndroid.SHORT)
            }).finally(() => {});
            //copy dibawah / get other?
            axios.get(`${url_backend}/api/v1/movies?page=1&limit=8`).then((res) => {
                // console.log('dataaa commming',res.data.data.results);
                setComming(res.data.data.results);
                // setComming(res) 
            }).catch((err) => {
                console.log(err, 'error') 
                ToastAndroid.show('Cek Koneksi Jaringan', ToastAndroid.SHORT)
            }).finally(() => {});
        }

    },[loadData])

    return (
      <SafeAreaView>
        <View style={{backgroundColor: '#16213E'}}>
       {/* <Navbar/> */}
        <View style={[styles.header, {backgroundColor: '#0F3460'}]}>
                <View style={[commonStyle.flexRow, commonStyle.flexBetween]}>
                <Image source={require('../../../assets/image/Vector.png')} style={{
                            width: 100, height: 50, resizeMode: 'contain', alignSelf: 'center'
                        }} />
                    <View style={[commonStyle.flexRow]}>
                    
                    <Pressable onPress={() => navigation.navigate('List', {
                        })} >
                      <Image source={require('../../../assets/image/list_icon_128825.png')} style={{
                            width: 100, height: 50, resizeMode: 'contain', alignSelf: 'center'
                        }} />
                    </Pressable>
                    </View>
                </View>
            </View>
        <ScrollView style={styles.scrollView}>
            <View>
                <View style={[commonStyle. ml, commonStyle. mt ,{alignSelf:'center'}]}>
                    <Text style={{fontSize:20, fontWeight:'800', color:'#DCD7C9'}}>Nearest Cinema, Newest Movie, Find out now!</Text>
                    <Text style={[commonStyle.textBold, commonStyle.textSize,{alignSelf:'center',color:'#E6B325'} ]}>Find Out Now!</Text>   
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
            <ScrollView style={{backgroundColor: '#0F3460', marginVertical:10}}>
            <View style={[commonStyle.m, commonStyle.flexBetween, commonStyle.flexRow,{marginTop:20} ]}>
                    <Text style={[commonStyle.textColor, commonStyle.textBold, {fontSize:20, fontWeight:'bold',color:'#DCD7C9'}]}>Upcoming Movies</Text>
                    <Text style={[commonStyle.textColor, {fontSize:20, fontWeight:'bold',color:'#DCD7C9'}]}>View All</Text>
                </View>
                <ScrollView style={[commonStyle.flexRow, {margin:30, alignSelf:'center'}]} horizontal={true}>
                    {movie.map((data)=>{
                            console.log(`${url_backend}/uploads/${data['image']}`);
                            return <View style={[ {margin:20, alignContent:'center', backgroundColor: "#A5C9CA", borderRadius:10, padding:20}]}>
                    <Image source={{ uri:`${url_backend}/uploads/${data['image']}` }} style={[{
                            width: 100, height:200 , alignContent:'center', borderRadius:5, margin:10
                        },]}  />
                    </View>
                        })
                    }
                </ScrollView>
            </ScrollView>
            <ScrollView style={{backgroundColor: '#0F3460', marginVertical:10}}>
                <View style={[commonStyle.m, commonStyle.flexBetween, commonStyle.flexRow,{marginTop:20} ]}>
                    <Text style={[commonStyle.textBlack, commonStyle.textBold, {fontSize:20, fontWeight:'bold',color:'#DCD7C9'}]}>Upcoming Movies</Text>
                    <Text style={[commonStyle.textColor, {fontSize:20, fontWeight:'bold',color:'#DCD7C9'}]}>View All</Text>
                </View>
                <ScrollView style={[commonStyle.flexRow, {margin:30,}]} horizontal={true}>
                    <View style={[commonStyle.flexRow, {marginTop:30, marginHorizontal:10}]} >
                        <Text style={{backgroundColor:'#395B64', fontWeight:'bold', paddingHorizontal:20,paddingVertical:5, borderRadius:5,color:'#E6B325', fontSize:15, alignSelf:'center'}}>Januari</Text>
                    </View>
                    <View style={[commonStyle.flexRow, {marginTop:30, marginHorizontal:10}]} >
                        <Text style={{backgroundColor:'#395B64', fontWeight:'bold', paddingHorizontal:20,paddingVertical:5, borderRadius:5,color:'#E6B325', fontSize:15, alignSelf:'center'}}>Januari</Text>
                    </View>
                    <View style={[commonStyle.flexRow, {marginTop:30, marginHorizontal:10}]} >
                        <Text style={{backgroundColor:'#395B64', fontWeight:'bold', paddingHorizontal:20,paddingVertical:5, borderRadius:5,color:'#E6B325', fontSize:15, alignSelf:'center'}}>Januari</Text>
                    </View>
                    <View style={[commonStyle.flexRow, {marginTop:30, marginHorizontal:10}]} >
                        <Text style={{backgroundColor:'#395B64', fontWeight:'bold', paddingHorizontal:20,paddingVertical:5, borderRadius:5,color:'#E6B325', fontSize:15, alignSelf:'center'}}>Januari</Text>
                    </View>
                    <View style={[commonStyle.flexRow, {marginTop:30, marginHorizontal:10}]} >
                        <Text style={{backgroundColor:'#395B64', fontWeight:'bold', paddingHorizontal:20,paddingVertical:5, borderRadius:5,color:'#E6B325', fontSize:15, alignSelf:'center'}}>Januari</Text>
                    </View>
                    <View style={[commonStyle.flexRow, {marginTop:30, marginHorizontal:10}]} >
                        <Text style={{backgroundColor:'#395B64', fontWeight:'bold', paddingHorizontal:20,paddingVertical:5, borderRadius:5,color:'#E6B325', fontSize:15, alignSelf:'center'}}>Januari</Text>
                    </View>
                    <View style={[commonStyle.flexRow, {marginTop:30, marginHorizontal:10}]} >
                        <Text style={{backgroundColor:'#395B64', fontWeight:'bold', paddingHorizontal:20,paddingVertical:5, borderRadius:5,color:'#E6B325', fontSize:15, alignSelf:'center'}}>Januari</Text>
                    </View>
                </ScrollView>
                <ScrollView style={[commonStyle.flexRow, {margin:30,}]} horizontal={true}>
                {comming.map((data)=>{
                        console.log(`${url_backend}/uploads/${data['image']}`);
                            return <View style={[ {margin:20, alignSelf:'center', backgroundColor: "#A5C9CA", borderRadius:10, padding:20}]}>
                        <Image source={{ uri:`${url_backend}/uploads/${data['image']}` }} style={[{ width: 100, height:200 , alignSelf:'center', borderRadius:5, margin:10
                            },]}  />
                        <View>
                            <Text style={{alignSelf:'center', fontWeight:'bold', fontSize:15,marginBottom:5, color:'black'}}>{data['title']}</Text>
                            <Text style={{alignSelf:'center',marginBottom:10, color:'black'}}>{data['genre']}</Text>
                        </View>
                        <Pressable onPress={() => navigation.navigate('DetailProduct', {
                        })} style={{ backgroundColor: "#395B64", padding: 7, borderRadius: 10, margin:5}} android_ripple={{ color: "#fff"}}>
                        <Text style={{fontWeight:'bold', fontSize:15, alignSelf:'center',color:'#E6B325'}}>Detail</Text>  
                        </Pressable>
                    </View>
                    })
                }
                </ScrollView>
            </ScrollView>
            <ScrollView style={{ marginBottom:50}}>
                <View style={[commonStyle.m, commonStyle.flexBetween,{marginTop:20, backgroundColor: '#0F3460', alignSelf:'center', padding:30, borderRadius:10} ]}>
                    <Text style={{ fontSize:15, fontWeight:'bold', alignSelf:'center',color:'white'}}>Be the vanguard of the Moviegoers</Text>  
                    <Text style={[commonStyle.textColor, commonStyle.textBold,{alignSelf:'center',fontSize:25, color:'#E6B325'} ]}>Moviegoers</Text>
                    <View style={[commonStyle.flexRow, { backgroundColor: '#f0f0f0', marginTop:20, }]}>
                    <TextInput placeholder="Masukkan Email..." style={{  borderRadius: 5, flex: 1, color:'black'}} autoCapitalize='none' keyboardType='email-address' />
                    </View>
                        <Pressable onPress={() => navigation.navigate('SignUp', {
                        })} style={{ backgroundColor: "#395B64", padding: 7, borderRadius: 10, margin:5, marginTop:25}} android_ripple={{ color: "#fff"}}>
                            <Text style={{fontWeight:'bold', fontSize:20, alignSelf:'center',color:'#E6B325'}}>join now</Text>  
                        </Pressable>
                    <Text style={{alignSelf:'center', marginTop:15, marginBottom:5, color:'black'}}>By joining you as a Tickitz member,</Text>
                    <Text style={{alignSelf:'center', color:'black'}}>we will always send you the latest updates via email .</Text>
                </View>
            </ScrollView>
        </ScrollView>     
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
  
  export default Home;