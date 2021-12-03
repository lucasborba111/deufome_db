import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import firebase from 'firebase/app';

@Component({
  selector: 'app-massas',
  templateUrl: './massas.page.html',
  styleUrls: ['./massas.page.scss'],
})
export class MassasPage implements OnInit {
  posts = []
  constructor(
    private navCtrl: NavController,
    private storage: Storage
    ) { }
 
ionViewWillEnter(){
  this.fetchPosts();
}


fetchPosts(){
  this.posts = [];
  firebase.database().ref('posts').on('value', snapshot=>{
    let result = snapshot.val();
    console.log('result = ', result);

    for(let i in result){
      var element = result[i];
      let post = {
        id: i,
        tipo: element.tipo,
        photo: element.photo,
        titulo: element.titulo,
        ingredientes: element.ingredientes,
        modopreparo: element.modopreparo,
        usuario:element.usuario,
        estrela1: element.estrela1,
        estrela2: element.estrela2,
        estrela3: element.estrela3,
        estrela4: element.estrela4,
        estrela5:  element.estrela5,
        nota: element.nota,
      }
      if(post.tipo=='massas'){
        this.posts.push(post); 
      }
    }
    console.log('this.posts = ', this.posts);
  })

}
  

postDetails(post){
  this.navCtrl.navigateForward(['postdetails', {data: JSON.stringify(post)}])
}

addArticle(){
  this.navCtrl.navigateForward('add');
}

async ngOnInit() {
  await this.storage.create();
}
}
