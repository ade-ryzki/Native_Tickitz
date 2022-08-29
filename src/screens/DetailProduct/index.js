import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, ScrollView,  StyleSheet, FlatList, Pressable, TouchableOpacity, Image, SectionList, RefreshControl, ToastAndroid, SafeAreaView, StatusBar, Button, TextInput} from 'react-native';
import { commonStyle } from '../../../helper/commonStyle';

const DetailProduct = () => {
    return (
      <>
        <ScrollView style={{backgroundColor: 'white'}}>
          <View>
            <Text>ini detail product</Text>
            </View>
        </ScrollView>
      </>
    );
  };
  
  export default DetailProduct;