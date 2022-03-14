import React,{useEffect} from 'react';
import 'react-native-gesture-handler';
import Main from './screen/Main';
import temp from './screen/temp';
import moist from './screen/moist';
import video from './screen/video';
import message from './screen/message';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  StyleSheet,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
const Stack = createStackNavigator();
const App: () =>  React$Node = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
<>
<NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen options={{ headerShown: false }} name="Main" component={Main} />
        <Stack.Screen options={{ headerShown: false }} name="temp" component={temp} />
        <Stack.Screen options={{ headerShown: false }} name="moist" component={moist} />
        <Stack.Screen options={{ headerShown: false }} name="video" component={video} />
        <Stack.Screen options={{ headerShown: false }} name="message" component={message} />
      </Stack.Navigator>
    </NavigationContainer>
</>
  );
};

const styles = StyleSheet.create({
  
});

export default App;