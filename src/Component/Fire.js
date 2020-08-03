import FirebaseKeys from '../Component/Config';
import firebase  from 'firebase'

class Fire{
    constructor(){
        if (!firebase.apps.length) {
            

            firebase.initializeApp(FirebaseKeys)
          }
       
    }

    addPost =async ({text,localUri})=>{
       
        const remoteUri =await this.uploadPhotoAsync(localUri)
       
        return new Promise((res,rej)=>{
            this.fireStore.collection("posts").add({
                text,
                uid:this.uid,
               // timestamp:this.timestamp,
                image:remoteUri 
            })
            .then(ref =>{
                res(ref)
            })
            .catch(error=>{
                rej(error)
            })
        })
    }

    uploadPhotoAsync=async uri =>{
        //const path= `photos/${this.uid}/${Date.now()}.jpg`                                                                      
        const path= `photos/${this.uid}}.jpg`
        return new Promise(async(res,rej)=>{
            const response=await fetch(uri)
            const file =await response.blob()

            let upload= firebase.
            storage().ref(path).put(file)

            upload.on("state changed",
            snapshot =>{},err=>{
                rej(err)
            },
            async()=>{
                const url = await upload.snapshot.ref.getDownloadURL()
                res(url)
             
            }
            )
        })
    }

    get fireStore(){
        return firebase.firestore()
    }

    get uid(){
        return (firebase.auth().currentUser || {}).uid;
    }

    /*get timeStamp(){
        return Date.now()

    }*/
}

Fire.shared =new Fire()
export default Fire;