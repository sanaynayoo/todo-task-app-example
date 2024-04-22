import React,{useEffect} from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import BootSplash from "react-native-bootsplash";

// navigation imports
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


// screens
import Todo_list from '../screens/Todo_list';
import Create_todo from '../screens/Create_todo';

// create stack
const AppStack = createNativeStackNavigator();

const AppNavigator = () => {
  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };
    init().finally(async () => {
      await BootSplash.hide({ fade: true });
      console.log("BootSplash has been hidden successfully");
    });
  }, []);

  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{
        headerTintColor:'#fff',
        headerTitleAlign:'center',
        headerStyle:{
          backgroundColor:'#3C87EB',
        },
        headerTitleStyle:{
          fontSize: wp(5),
        },
      }}>
        <AppStack.Screen name="Todo" component={Todo_list} options={{title: 'To do app'}}/>
        <AppStack.Screen name="Addtodo" component={Create_todo} options={{title:'Add'}}/>
      </AppStack.Navigator>
      <StatusBar backgroundColor={'#377CD7'} barStyle={'light-content'}/>
    </NavigationContainer>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
