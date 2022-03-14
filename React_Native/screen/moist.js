import React,{useState,useCallback,useEffect} from 'react';
import Iconicons from 'react-native-vector-icons/Ionicons';
import  { firebase } from '@react-native-firebase/firestore';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  View} 
  from 'react-native';
  var count=0
  var a=0
  const moist = ({navigation}) => {
    const [value,setValue]=useState("")
    const [counts,setcounts]=useState("")
    const write = firebase.firestore()
        .collection('data')
        .doc('moist_mode')
        .set({
          mode:(a)
        })
    useEffect(() => {
      const subscriber = firebase.firestore()
        .collection('data')
        .doc('test').onSnapshot(doc => {
          console.log("moist:",doc.data().moist);
          setValue(doc.data().moist);
        });
      // Stop listening for updates when no longer required
      return () => subscriber();
    }, [value]);
          function hot(){
            if(value>60){
            return "방이 습합니다"
            }
            else if(value<40){
            return "방이 건조합니다"
            }
          }
          function col(){
            if(value>60){
            return true
            }
            else if(value<40){
            return false
            }
        }
        function cnt(){
          count+=1
          a=count%2
          setcounts(a)
        }
        function mode(){
          if(a==0)
          return "OFF"
          if (a==1)
          return "ON"
        }
        
    return (
      <SafeAreaView style={styles.top}>
        <View style={styles.array}>
        <TouchableOpacity onPress={() => {navigation.pop()}}>
            <Iconicons name={'arrow-back-outline'} size={40}  color={'white'}/>
            </TouchableOpacity>
            <Text style={styles.word}>습도</Text>
            <Text>          </Text>
            </View>
      <ScrollView style={styles.container}>
        <View style={styles.body}>
        <View style={styles.box}>
        <Text style={styles.text}>습도:{value}%</Text>
        </View>
        <Text style={col() ? styles.hot:styles.hot1}>{hot()}</Text>
        <TouchableOpacity onPress={()=>{cnt()}}>
          <View style={styles.button}>
        <Text style={styles.auto}>{mode()}</Text>
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
    width:300,
    height:300,
    alignItems:'center',
  },
  text:{
    fontSize:50,
  },
  hot:{
    marginTop:30,
    fontSize:35,
    color:'blue',
  },
  hot1:{
    marginTop:30,
    fontSize:35,
    color:'red',
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
  }
});

export default moist;