import React,{useEffect,useState} from 'react';
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
  const message = ({navigation}) => {
    const [sleep,setsleep]=useState("")
  const [drop,setdrop]=useState("")
  const [cry,setcry]=useState("")
    useEffect(() => {
      const sleep = firebase.firestore()
        .collection('data')
        .doc('eye').onSnapshot(doc => {
          console.log("sleep:", doc.data().sleep);
          setsleep(doc.data().sleep);
        });
        const cry = firebase.firestore()
        .collection('data')
        .doc('cry').onSnapshot(doc => {
          console.log("cry:",doc.data().baby);
          setcry(doc.data().baby);
        });
        const drop = firebase.firestore()
        .collection('data')
        .doc('drop').onSnapshot(doc => {
          console.log("drop:",doc.data().baby);
          setdrop(doc.data().baby);
        });
  
      // Stop listening for updates when no longer required
      return () => {sleep(),cry(),drop()}
    }, [sleep,drop,cry]);
    function sleepmes(){
      if(sleep==1)
      return "아이가 잠들었습니다"
    }
    function crymes(){
      if(cry==1)
      return "아이가 울고 있습니다"
    }
    function dropmes(){
      if(drop==0)
      return "아이가 떨어졌습니다"
    }
    return (
      <SafeAreaView style={styles.top}>
        <View style={styles.array}>
        <TouchableOpacity onPress={() => {navigation.pop()}}>
            <Iconicons name={'arrow-back-outline'} size={40}  color={'white'}/>
            </TouchableOpacity>
            <Text style={styles.word}>알림</Text>
            <Text>          </Text>
            </View>
      <ScrollView style={styles.container}>
        <View style={styles.body}>
        <View style={styles.box}>
        <Text style={styles.mes}>{sleepmes()}</Text>
        <Text style={styles.mes}>{crymes()}</Text>
        <Text style={styles.mes}>{dropmes()}</Text>
        </View>
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
  mes:{
    fontSize:35,
    color:'black',
    fontWeight:'bold'
  }
});

export default message;