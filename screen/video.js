import React,{useState} from 'react';
import Iconicons from 'react-native-vector-icons/Ionicons';
import { WebView } from 'react-native-webview';
import  { firebase } from '@react-native-firebase/firestore';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  View} 
  from 'react-native';
  var a=0
  var b=0
  var count=0
  var countb=0
  const video = ({navigation}) => {
    const [counts,setcounts]=useState("")
    const [countsb,setcountsb]=useState("")
    const write = firebase.firestore()
        .collection('data')
        .doc('video_mode')
        .set({
          mode:(a)
        })
    const writeb = firebase.firestore()
    .collection('data')
    .doc('music_mode')
    .set({
      mode:(b)
    })
    function cnt(){
      count+=1
      a=count%2
      setcounts(a)
    }
    function cntb(){
      countb+=1
      b=countb%2
      setcountsb(b)
    }
    function mode(){
      if(a==1)
      return "ON"
      if (a==0)
      return "OFF"
    }
    function music(){
      if(b==0)
      return "MUSIC AUTO"
      if (b==1)
      return "MUSIC MANUAL"
    }
    function op(){
      if(b==0)
      return true
      if(b==1)
      return false
    }
    return (
      <SafeAreaView style={styles.top}>
        <View style={styles.array}>
        <TouchableOpacity onPress={() => {navigation.pop()}}>
            <Iconicons name={'arrow-back-outline'} size={40}  color={'white'}/>
            </TouchableOpacity>
            <Text style={styles.word}>영상</Text>
            <Text>          </Text>
            </View>
      <ScrollView style={styles.container}>
        <View style={styles.body}>
        <View style={styles.box}>
        <WebView
        source={{uri:'http://172.30.1.25:8091/?action=stream'}}
        />
        </View>
        <TouchableOpacity onPress={()=>{cnt()}}>
          <View style={styles.button}>
          <Text style={styles.auto}>{mode()}</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{cntb()}}>
          <View style={styles.button}>
          <Text style={styles.auto}>{music()}</Text>
        </View>
        </TouchableOpacity>
        
        </View>
        </ScrollView>
        </SafeAreaView>
    );
  }

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'skyblue',
    flex: 1,
    
  },
  top:{
    backgroundColor: '#007ccc',
    flex: 1,
  },
  body:{
    marginTop:100,
    alignItems:'center',
    justifyContent:'center',
  },
  word:{
    fontSize:20,
    color:'white',
  },
  array:{
    justifyContent:'space-between',
    flexDirection:'row',
  },
  box:{
    justifyContent:'center',
    backgroundColor:'white',
    borderRadius:30,
    width:350,
    height:262,
  },
  text:{
    fontSize:50,
  },
  button:{
    backgroundColor:'#007ccc',
    marginTop:30,
    width:300,
    height:60,
    borderRadius:40,
    alignItems:'center',
    justifyContent:'center',
  },
  auto:{
    fontSize:30,
    color:'white',
  },
  music:{
    flexDirection:'row',
  },
  music_button:{
    opacity:1,
  }
});

export default video;