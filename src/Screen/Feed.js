import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity,FlatList,Image } from 'react-native'
import * as firebase from 'firebase'
import {Ionicons} from 'react-native-vector-icons';


posts=[

   { "id": 1,
   "title": "Sneha_Dange",
   "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
   "avtar":require("../Image/profile.jpg"),
   "image":{uri:'https://image.freepik.com/free-photo/silhouette-bicycle-parking-mountain_1150-5336.jpg'}
 },
 {
   
   "id": 2,
   "title": "Mamata_D",
   "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
   "avtar":require("../Image/profile.jpg"),
   "image":{uri:'https://img.freepik.com/free-photo/charming-little-girl-with-white-shirt-covered-with-different-paints_8353-7532.jpg?size=626&ext=jpg'}
},
 {
  
   "id": 3,
   "title": "Vedia_Da",
   "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
   "avtar":require("../Image/profile.jpg"),
   "image":{uri:'https://img.freepik.com/free-photo/workplace-with-smartphone-laptop-black-table-top-view-copyspace-background_144627-24860.jpg?size=626&ext=jpg'}  
},
{
  
    "id": 4,
    "title": "Asmi_mi",
    "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
    "avtar":require("../Image/profile.jpg"),
    "image":{uri:'https://img.freepik.com/free-photo/image-engineering-objects-workplace-top-view-construction-concept-engineering-tools-vintage-tone-retro-filter-effect-soft-focus-selective-focus_1418-469.jpg?size=626&ext=jpg'}  
 },
 {
  
    "id": 5,
    "title": "hedvi_w",
    "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
    "avtar":require("../Image/profile.jpg"),
    "image":{uri:'https://image.freepik.com/free-vector/education-background-with-pencils-subjects-icons_23-2147491533.jpg?1'}  
 },
 {
  
    "id": 6,
    "title": "nikita_pika",
    "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
    "avtar":require("../Image/profile.jpg"),
    "image":{uri:'https://img.freepik.com/free-photo/woman-hiking-mountains_1303-11192.jpg?size=626&ext=jpg'}  
 },
]
export default class Feed extends React.Component{
   rederPost= post =>{
       return(
           <View style={style.feedItem}>
             <Image source={post.avtar} style={style.avtar}/>
             <View style={{flex:1}}>
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                  <View>
                      <Text style={style.name}>{post.title}</Text>
                  </View>

                  <Ionicons name="ios-more" size={24} color="#73788B"/>
                 </View>
                 <Text style={style.post}>{post.body}</Text>
                <Image source={post.image} style={style.postImage}/>
            
                 <View style={{flexDirection:'row'}}>
                     <Ionicons name="ios-heart-empty" size={24} color="#73788B" style={{marginRight:16}}/>
                     <Ionicons name="ios-chatboxes" size={24} color="#73788B"/>
                 </View>
             </View>

           
           </View>
       )
   }

    render(){
        return(
          <View style={style.container}>
              <View style={style.header}>
                <Text style={StyleSheet.headerTitle}>Feed</Text>
              </View>

           <FlatList
             style={style.feed}
             data={posts}
             renderItem={({item})=>this.rederPost(item)}    
             keyExtractor={item=>item.id}
             showsVerticalScrollIndicator={false}
           />

            
         </View>
        )
    }
}



const style=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#EFECF4'
    },
    header:{
        paddingTop:64,
        paddingBottom:16,
        backgroundColor:'#FFF',
        alignItems:'center',
        justifyContent:'center',
        borderBottomWidth:1,
        borderBottomColor:'#EBECF4',
        shadowColor:'#454D65',
        shadowOffset:{height:5},
        shadowRadius:15,
        shadowOpacity:0.2,
        zIndex:10
    },
    headerTitle:{
        fontSize:20,
        fontWeight:'500'

    },
    feed:{
        marginHorizontal:10
    },
    feedItem:{
        backgroundColor:"#fff",
        borderRadius:5,
        padding:8,
        flexDirection:'row',
        marginVertical:8
    },
    avtar:{
        width:36,
        height:36,
        borderRadius:18,
        marginRight:16
    },
    name:{
        fontSize:15,
        fontWeight:"bold",
        color:'#454D65'
    },
    post:{
        marginTop:16,
        fontSize:14,
        color:'#838899'
    },
    postImage:{
        width:undefined,
        height:150,
        borderRadius:5,
        marginVertical:16
    }

})