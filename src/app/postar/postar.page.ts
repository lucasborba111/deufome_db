import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { AlertController, NavController } from '@ionic/angular';
import firebase from 'firebase/app';
import { Storage } from '@ionic/storage';
import firebaseConfig from '../firebase/firebase';
import { LoadingService } from '../loading.service';
firebase.initializeApp(firebaseConfig);



@Component({
  selector: 'app-postar',
  templateUrl: './postar.page.html',
  styleUrls: ['./postar.page.scss'],
})
export class PostarPage implements OnInit {

  cameraOptions: CameraOptions = {
    quality: 100,
    allowEdit: false,
    correctOrientation: true,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }

  galleryOptions: CameraOptions = {
    sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
    destinationType: this.camera.DestinationType.FILE_URI,
    quality: 100,
    allowEdit: true,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    correctOrientation: true
  }

  post = {
    tipo: '',
    photo: '',
    titulo: '',
    ingredientes: '',
    modopreparo: '',
  }

  posts = []


  constructor(
    private storage: Storage,
    private webview: WebView,
    private camera: Camera,
    private alertCtrl: AlertController,
    private navCtrl: NavController,
    private loading : LoadingService,
    ) { }

  
  async choosePhotos(){
    let alertBox = await this.alertCtrl.create({
      header: 'Choose from',
      buttons: [
        {
          text: 'Camera',
          handler: () => {
            this.camera.getPicture(this.cameraOptions).then(res=>{
              console.log('response = ', res);
              let finalImg = this.webview.convertFileSrc(res);
              console.log('finalImg = ', finalImg);
              this.post.photo = finalImg;
              this.uploadImage(finalImg);
            })
          }
        },
        {
          text: 'Gallery',
          handler: () => {
            this.camera.getPicture(this.galleryOptions).then(res=>{
              console.log('response =', res);
              let finalImg = this.webview.convertFileSrc(res);
              this.post.photo = finalImg;
              this.uploadImage(finalImg);
              console.log('finalImg = ', finalImg);

            })
          }
        },
      ],
    })

    await alertBox.present();
  }

  uploadImage(image){
    console.log('image = ', image);
    let randomname = this.randomnumberGenerator();
    return new Promise<any>((resolve, reject) =>{
      let storageRef = firebase.storage().ref();
      let imageRef = storageRef.child('posts/' + randomname);
      
      this.toDataURL(image, (dataUrl) =>{
        console.log(dataUrl);
        imageRef.putString(dataUrl, 'data_url')
        .then(snapshot => {
          //console.log(resolve(snapshot.downloadURL));
          imageRef.getDownloadURL().then(url=>{
            console.log(url);
            this.post.photo = url;
          });
        }, err =>{
          reject(err);
        })
      })
    })
  }

  toDataURL(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
      var reader = new FileReader();
      reader.onloadend = function() {
        callback(reader.result);
      }
      reader.readAsDataURL(xhr.response);
    };
    xhr.open('GET', url);
    xhr.responseType = 'blob';
    xhr.send();
  }

  randomnumberGenerator(){
    var text = "";
      var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefgjijklmnopqrstuvwxyz0123456789";
      for(var i = 0; i < 10; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
  }


  submitPost(){
    console.log('running');

    if(this.post.photo == ''){
      this.loading.presentToast('Por favor adicione uma imagem');
    }else{
      if(this.post.titulo == ''){
        this.loading.presentToast('Por favor adicione um titulo')
      }else{
        if(this.post.ingredientes == ''){
          this.loading.presentToast('Por favor adicione os ingredientes');
        }else{
          if(this.post.modopreparo == ''){
            this.loading.presentToast('Por favor adicione o modo de preparo');
          }else{
            if(this.post.tipo == ''){
              this.loading.presentToast('Por favor selecione a categoria');
            }else{
         //inserindo no firebase
         firebase.database().ref('posts').push(this.post).then(res=>{
           console.log('pushed', res);
           this.navCtrl.navigateRoot('home');
         });     
          }
        }
      }
    }
  }
}

  async ngOnInit() {
    await this.storage.create();
  }
}
