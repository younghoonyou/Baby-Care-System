import React ,{useState,useCallback,useEffect} from 'react';
import Iconicons from 'react-native-vector-icons/Ionicons';
import { firebase } from '@react-native-firebase/firestore';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  View} 
  from 'react-native';
  const temp = ({navigation}) => {
    const [value,setValue]=useState("")
      useEffect(() => {
        const subscriber = firebase.firestore()
          .collection('data')
          .doc('test').onSnapshot(doc => {
            console.log("temp:",doc.data().temp);
            setValue(doc.data().temp);
          });
    
        // Stop listening for updates when no longer required
        return () => subscriber();
      }, [value]);
      function hot(){
        if(value>27){
        return "방의 온도가 높습니다"
        }
        else if(value<20){
        return "방의 온도가 낮습니다"
        }
      }
      function col(){
        if(value>27){
        return true
        }
        else if(value<20){
        return false
        }
    }
    return (
      <SafeAreaView style={styles.top}>
        <View style={styles.array}>
        <TouchableOpacity onPress={() => {navigation.pop()}}>
            <Iconicons name={'arrow-back-outline'} size={40}  color={'white'}/>
            </TouchableOpacity>
            <Text style={styles.word}>온도</Text>
            <Text>          </Text>
            </View>
      <ScrollView style={styles.container}>
        <View style={styles.body}>
        <View style={styles.box}>
        <Text style={styles.text}>온도:{value}°C</Text>
        </View>
        
        <Text style={col() ? styles.hot:styles.hot1}>{hot()}</Text>
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
    color:'red',
  },
  hot1:{
    marginTop:30,
    fontSize:35,
    color:'blue',
  }
});

export default temp;