import React ,{ useState,useEffect }from 'react';
import Iconicons from 'react-native-vector-icons/Ionicons';
import { firebase } from '@react-native-firebase/firestore';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

const Main = ({navigation}) => {
  const [sleep,setsleep]=useState("")
  const [drop,setdrop]=useState("")
  const [cry,setcry]=useState("")
  useEffect(() => {
    const sleep = firebase.firestore()
      .collection('data')
      .doc('eye').onSnapshot(doc => {
        console.log(doc.data().sleep);
        setsleep(doc.data().sleep);
      });
      const cry = firebase.firestore()
      .collection('data')
      .doc('cry').onSnapshot(doc => {
        console.log(doc.data().baby);
        setcry(doc.data().baby);
      });
      const drop = firebase.firestore()
      .collection('data')
      .doc('drop').onSnapshot(doc => {
        console.log(doc.data().baby);
        setdrop(doc.data().baby);
      });

    // Stop listening for updates when no longer required
    return () => {sleep(),cry(),drop()}
  }, [sleep,drop,cry]);
  function col(){
    if((sleep==1)||(cry==1)||(drop==0)){
    return false
    }
    if((sleep==0)&&(cry==0)&&(drop==1)){
    return true
    }
  }
  
  return (
    <>
      <View style={styles.body}>
      <View style={styles.section}>
      <View style={styles.box}>
        <View style={styles.one}>
      <View style={styles.item}>
      <TouchableOpacity onPress={() => navigation.navigate('temp')}>
            <Iconicons name={'thermometer-outline'} size={120}  color={'black'}/>
            </TouchableOpacity>
      </View>
      <View style={styles.item}>
      <TouchableOpacity onPress={() => navigation.navigate('moist')}>
            <Iconicons name={'water-outline'} size={120}  color={'black'}/>
            </TouchableOpacity>
      </View>
      </View>
      <View style={styles.two}>
      <View style={styles.item}>
      <TouchableOpacity onPress={() => navigation.navigate('video')}>
            <Iconicons name={'videocam-outline'} size={120}  color={'black'}/>
            </TouchableOpacity>
      </View>
      <View style={col() ? styles.item:styles.item1}>
      <TouchableOpacity onPress={() => navigation.navigate('message')}>
            <Iconicons name={'mail-outline'} size={120}  color={'black'}/>
            </TouchableOpacity>
      </View>
      </View>
      </View>
      </View>
      </View>
      <View style={styles.bottom}>
        <View style={styles.button}>
        <Text style={styles.title}>
          Baby Care System
        </Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  body:{
    flex:1,
    backgroundColor:'skyblue',
    alignItems:'center',
    justifyContent:'center',
  },
  bottom:{
    flex:0.2,
    backgroundColor:'skyblue',
    alignItems:'center',
    justifyContent:'center',
  },
  button:{
    backgroundColor:'#007ccc',
    width:300,
    height:60,
    borderRadius:40,
    alignItems:'center',
    justifyContent:'center',
  },
  section:{
    backgroundColor:'#007ccc',
    borderRadius:30,
    justifyContent:'center',
  },
  one:{
    marginTop:'auto',
    flexDirection:'row',
    justifyContent:'space-between',
  },
  two:{
    marginTop:'auto',
    flexDirection:'row',
    justifyContent:'space-between',
  },
  box:{
    marginBottom: 65,
    marginHorizontal:40,
    width:300,
    height:320,
    backgroundColor:'#007ccc',
    justifyContent:'center',
    alignItems:'stretch',
  },
  item:{
    borderRadius:30,
    width:140,
    height:140,
    backgroundColor:'white',
    alignItems:'center',
    justifyContent:'center',
  },
  item1:{
    borderRadius:30,
    width:140,
    height:140,
    backgroundColor:'pink',
    alignItems:'center',
    justifyContent:'center',
  },
  title:{
    fontSize:30,
    color:'white',
  },
  message:{
    fontSize:30,
    color:'red',
  }
});

export default Main;
