import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { AlertController, NavController } from '@ionic/angular';
import firebase from 'firebase/app';
import { Storage } from '@ionic/storage';
import firebaseConfig from '../firebase/firebase';
import { LoadingService } from '../loading.service';
import { AuthService } from '../services/auth.service';
import {File} from '@ionic-native/file/ngx';
import {Platform} from '@ionic/angular'
import {AngularFireStorage} from '@angular/fire/storage';
import {Observable} from 'rxjs';
import {finalize} from 'rxjs/operators'

firebase.initializeApp(firebaseConfig);



@Component({
  selector: 'app-postar',
  templateUrl: './postar.page.html',
  styleUrls: ['./postar.page.scss'],
})
export class PostarPage implements OnInit {
  public downloadUrl: Observable<string>;
  constructor(
    private storage: Storage,
    private afStorage: AngularFireStorage,
    private webview: WebView,
    private camera: Camera,
    private alertCtrl: AlertController,
    private navCtrl: NavController,
    private loading : LoadingService,
    private auth: AuthService,
    private file: File,
    private platform: Platform,
    ) { }

 // cameraOptions: CameraOptions = {
    //quality: 100,
  //  allowEdit: false,
   // correctOrientation: true,
    //destinationType: this.camera.DestinationType.FILE_URI,
   // encodingType: this.camera.EncodingType.JPEG,
   // mediaType: this.camera.MediaType.PICTURE
 // }

async openGalery(){
  const options: CameraOptions = {
    sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
    destinationType: this.camera.DestinationType.FILE_URI,
    quality: 100,
    allowEdit: true,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    correctOrientation: true
  }
  try{
    const fileUri: string = await this.camera.getPicture(options);
    
    let file: string;
    if(this.platform.is('ios')){
    file = fileUri.split('/').pop();
    }
    
    else{
    file = fileUri.substring(fileUri.lastIndexOf('/') + 1, fileUri.indexOf('?'));
    }
    const path: string = fileUri.substring(0, fileUri.lastIndexOf('/'));
    const buffer: ArrayBuffer = await this.file.readAsArrayBuffer(path, file);
    const blob: Blob = new Blob([buffer],{type: 'image/jpeg'});
    this.uploadPicture(blob);
    }
    catch (error){
      console.error(error);
    }
}
 

  post = {
    tipo: '',
    photo: '',
    titulo: '',
    ingredientes: '',
    modopreparo: '',
    usuario: '',
    usernumb: 0,
    rating: 0,
  }

  posts = []

  //async choosePhotos(){
  //  let alertBox = await this.alertCtrl.create({
  //    header: 'Choose from',
  //    buttons: [
    //    {
    //     text: 'Camera',
      //    handler: () => {
      //      this.camera.getPicture(this.cameraOptions).then(res=>{
       //       console.log('response = ', res);
        //      let finalImg = this.webview.convertFileSrc(res);
         //    console.log('finalImg = ', finalImg);
          //    this.post.photo = finalImg;
           //   this.uploadImage(finalImg);
           // })
          //}
        //},
        //{
          //text: 'Gallery',
         // handler: () => {
           // this.camera.getPicture(this.galleryOptions).then(res=>{
            //  console.log('response =', res);
             /// let finalImg = this.webview.convertFileSrc(res);
              //this.post.photo = finalImg;
             // this.uploadImage(finalImg);
              //console.log('finalImg = ', finalImg);

            //})
        //  }
        //},
     // ],
   // })

  //  await alertBox.present();
  //}
  
  uploadPicture(blob: Blob){
    let randomname = this.randomnumberGenerator();
    const ref = this.afStorage.ref('posts/' + randomname);
    const task = ref.put(blob);
      task.snapshotChanges().pipe(
        finalize(() => {
            ref.getDownloadURL().subscribe(data => {
                console.log(`URL: ${data}`);
                this.post.photo = data;
            });
        })
    ).subscribe();
    console.log(this.downloadUrl);
    //console.log('image = ', image);
    //let randomname = this.randomnumberGenerator();
    //return new Promise<any>((resolve, reject) =>{
    //  let storageRef = firebase.storage().ref();
     // let imageRef = storageRef.child('posts/' + randomname);
     // console.log(randomname);
     // this.toDataURL(image, (dataUrl) =>{
      //  console.log(dataUrl);
      //  imageRef.putString(dataUrl, 'data_url')
       // .then(snapshot => {
        
         //imageRef.getDownloadURL().then(url=>{
        //    console.log(url);
        //    this.post.photo = url;
        //  });
        //}, err =>{
        //  reject(err);
        //})
      }//)
    //})
  //}

  //toDataURL(url, callback) {
   // var xhr = new XMLHttpRequest();
   // xhr.onload = function() {
   //   var reader = new FileReader();
   //   reader.onloadend = function() {
    //    callback(reader.result);
    //  }
     /// reader.readAsDataURL(xhr.response);
   // };
   // xhr.open('GET', url);
   // xhr.responseType = 'blob';
   // xhr.send();
 // }
 randomnumberGenerator(){
  var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefgjijklmnopqrstuvwxyz0123456789";
    for(var i = 0; i < 10; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
      return text;
}
  submitPost(){
    console.log('running');
    this.auth.user$.subscribe(user =>{
      this.post.usuario = JSON.stringify(user.userName);
    
  //  if(this.post.photo == ''){
     // this.loading.presentToast('Por favor adicione uma imagem');
  //  }
   //else{
      //if(this.post.titulo == ''){
     //   this.loading.presentToast('Por favor adicione um titulo')
     // }else{
      //  if(this.post.ingredientes == ''){
        //  this.loading.presentToast('Por favor adicione os ingredientes');
       // }else{
         // if(this.post.modopreparo == ''){
         //  this.loading.presentToast('Por favor adicione o modo de preparo');
         //  }else{
         //   if(this.post.tipo == ''){
         //     this.loading.presentToast('Por favor selecione a categoria');
         //   }else{
         //inserindo no firebase
         firebase.database().ref('posts').push(this.post).then(res=>{
           console.log('pushed', res);
           this.navCtrl.navigateRoot('home');
        });     

        //}
      //    }
      //  }
     // }
    //}
  })
}


  async ngOnInit() {
    await this.storage.create();
  }
}

