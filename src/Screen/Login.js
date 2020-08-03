import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import * as firebase from 'firebase';

export default class Login extends React.Component {

  state={
      errorMessage:null,
      email:'',
      password:''
  }

  handleLogin=()=>{
      firebase.auth().
      signInWithEmailAndPassword(this.state.email,this.state.password)
      .catch(error=> this.setState({errorMessage:error.message}))
      this.props.navigation.navigate('Feed')
  }


    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.greeting}>{'Hello again \n Welcome'}</Text>

                <View>
                    {this.state.errorMessage &&<Text style={styles.errorMessage}>{this.state.errorMessage}</Text>}
                </View>

                <View style={styles.form}>
                    <View style={{ marginTop: 29 }}>
                        <Text style={styles.inputTitle}>Email Address</Text>
                        <TextInput 
                        style={styles.input}
                         autoCapitalize="none"
                         onChangeText={email=>this.setState({email})}
                         value={this.state.email}/>
                    </View>

                    <View style={{ marginTop: 35 }}>
                        <Text style={styles.inputTitle}>password</Text>
                        <TextInput 
                        style={styles.input} 
                        secureTextEntry
                         autoCapitalize="none" 
                         onChangeText={password =>this.setState({password})}
                         value={this.state.password}/>
                    </View>
                </View>

                <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
                    <Text style={{color:"#FFF",fontWeight:"500"}}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{alignSelf:'center',marginTop:40}} onPress={()=>this.props.navigation.navigate('Register')}>
                     <Text style={{color:'#414959',fontSize:13,fontWeight:'bold'}}>New to Social App?<Text style={{fontWeight:"500",color:"#E9446A",fontWeight:'bold'}}> Register</Text></Text>
                </TouchableOpacity>
            </View>

        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    greeting: {
        marginTop: 32,
        fontSize: 18,
        fontWeight: "400",
        textAlign: 'center'
    },
    errorMessage: {
        height: 72,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 20
    },
    form:{
        marginBottom:48,
        marginHorizontal:30,
        top:30
    },
    inputTitle: {
        color: 'black',
        fontSize: 10,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        //left:30
    },
    input: {
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: '#161F3D',
        //left:20,
      
    },

    button:{
        marginHorizontal:30,
        backgroundColor:'#E9446A',
        borderRadius:4,
        height:52,
        alignItems:'center',
        justifyContent:'center',
        top:30
    },

    errorMessage:{
        color:'red',
        fontSize:14,
        fontWeight:"600",
        textAlign:"center"
    },
  
})