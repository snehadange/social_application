import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity,SafeAreaView ,Image} from 'react-native'
import {Ionicons} from 'react-native-vector-icons'
import Constants from 'expo-constants';
import * as permissions from 'expo-permissions';
import Fire from '../Component/Fire'
import * as ImagePicker from 'expo-image-picker';

const firebase=require('firebase')
import "firebase/firestore"

export default class Post extends React.Component{

    constructor() {
        super();
        this.state={
            text:'',
            image:null
        }
        gi
    }
  
    getPhotoPermission =async ()=>{
        if(Constants.platform.android){
            const {status} =await permissions.askAsync(permissions.CAMERA_ROLL);

            if(status != "granted"){
                alert("need permission to access camera roll");
            }
        }
    }

   handlePost=()=>{
       Fire.shared
       .addPost({text :this.state.text.trim(),localUri:this.state.image})
       .then(ref=>{
          
           this.setState({text:'',image:'null'})
          
       })
       .catch(error =>{
           alert(error)
       })

       this.props.navigation.navigate('Feed')
   }


    pickImage=async ()=>{
       let result =await ImagePicker.launchCameraAsync({
           mediaTypes:ImagePicker.MediaTypeOptions.Images,
           allowsEditing:true,
           aspect:[4,3]
       })

       if(!result.cancelled){
           this.setState({
               image:result.uri
           })
       }
    }

    render(){
        return(
            <SafeAreaView style={styles.container}>
              <View style={styles.header}>
               <TouchableOpacity style={{left:-150,top:20}} onPress={()=>this.props.navigation.navigate('Feed')}>
                   <Ionicons name="md-arrow-back" size={24} color="black"/>
               </TouchableOpacity>
               <TouchableOpacity onPress={this.handlePost}>
                   <Text style={{fontWeight:"bold",marginTop:10}}>Post</Text>
               </TouchableOpacity>
              </View>
              <View style={styles.inputContainer}>
                  <Image source={require("../Image/profile.jpg")} style={styles.avatar}/>
                  <TextInput
                   autoFocus={true}
                   multiline={true}
                   numberOfLines={5}
                   style={{flex:1,top:-30}}
                   placeholder="want to share something"
                   onChangeText={text => this.setState({text})}
                   value={this.state.text}
                 />            
              </View>
              
              <TouchableOpacity style={styles.photo} onPress={this.pickImage}>
                  <Ionicons name="md-camera" size={32} color="black"/>
              </TouchableOpacity>

               <View style={{marginHorizontal:32,marginTop:32,height:150}}>
                   <Image source={{uri:this.state.image}} style={{width:'100%',height:'100%'}}/>

               </View>

            </SafeAreaView>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        
    },
    header:{
        flexDirection:'row',
        justifyContent:'center',
        paddingHorizontal:32,
        paddingVertical:26,
        borderBottomWidth:1,
        borderBottomColor:"#D8D9DB"
    },
    avatar:{
        width:50,
        height:50,
        borderRadius:20,
        marginRight:16,
        
    },
    inputContainer:{
        margin:32,
        flexDirection:'row'
    },
    photo:{
        alignItems:'flex-end',
        marginHorizontal:32
    }


})