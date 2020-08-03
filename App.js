import React from 'react';
import { View, StatusBar, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { MaterialCommunityIcons, MaterialIcons } from 'react-native-vector-icons'
import Firebasekeys from './src/Component/Config'

import Login from './src/Screen/Login';
import Register from './src/Screen/Register';
import Feed from './src/Screen/Feed';
import Post from './src/Screen/Post';
import Profile from './src/Screen/Profile';
import * as firebase from 'firebase'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()




function StackScreen() {

  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Feed" component={MyTab} />
    </Stack.Navigator>

  );
}


function MyTab({ navigation }) {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: '#e91e63',
        showLabel: false,
      }}

    /* defaultNavigationOptions={
       tabBarOnPress=({navigaton,defaultHandler})=>{
             if(navigaton.state.key === 'Post'){
               navigaton.navigate('Post')
             }  else{
               defaultHandler();
             }
       } 
     }*/
    >
      <Tab.Screen name="Feed" component={Feed} options={{

        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }} />
      <Tab.Screen name="Post" component={Post}
        options={{

          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="add-circle" color={color} size={size} />
          ),
        }}  />
      <Tab.Screen name="Profile" component={Profile}
        options={{

          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="person" color={color} size={size} />
          ),
        }} />

    </Tab.Navigator>
  )
}


export default function App() {
  return (
    <NavigationContainer>
      <StackScreen />
    </NavigationContainer>
  );
}

/*var firebaseConfig = {
  apiKey: "AIzaSyB2UZrCociBpPWgIlrpFbedegZ9-RizqN8",
  authDomain: "social-app-e2f3d.firebaseapp.com",
  databaseURL: "https://social-app-e2f3d.firebaseio.com",
  projectId: "social-app-e2f3d",
  storageBucket: "social-app-e2f3d.appspot.com",
  messagingSenderId: "1087750161902",
  appId: "1:1087750161902:web:0ee8bef13d52fcc542faff"
}*/

var firebaseConfig=Firebasekeys

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}