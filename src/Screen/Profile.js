import React from 'react';
import {View,Text,StyleSheet} from 'react-native'


export default class Profile extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>Profile  Screen</Text>
            </View>

            
        )
    }
}


const styles=StyleSheet.create({
    container:{
        flex:1,
        justfyContent:'center',
        alignItems:'center'
    }
})