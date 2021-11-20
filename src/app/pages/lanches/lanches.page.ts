import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import firebase from 'firebase/app';


@Component({
  selector: 'app-lanches',
  templateUrl: './lanches.page.html',
  styleUrls: ['./lanches.page.scss'],
})
export class LanchesPage implements OnInit {
  posts = []
  constructor(
    private navCtrl: NavController,
    private storage: Storage
  ) { }
 
    deletePost(post){
      console.log('post = ',post);
      firebase.database().ref('posts/' + post.id).remove().then(res=>{
        console.log('removed =', res);
      })
    }

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
        }
        if(post.tipo=='lanches'){
          this.posts.push(post); 
        }
      }
      console.log('this.posts = ', this.posts);
    })

  }
  
  postDetails(post){
    this.navCtrl.navigateForward(['postdetails', {data: JSON.stringify(post)}])
  }
  
  async ngOnInit() {
    await this.storage.create();
  }

  hidden = false;
  toggleHidden(){
    this.hidden = !this.hidden;
  }

  hidden2 = false;
  toggleHidden2(){
    this.hidden2 = !this.hidden2;
  }

  hidden3 = false;
  toggleHidden3(){
    this.hidden3 = !this.hidden3;
  }

  hidden4 = false;
  toggleHidden4(){
    this.hidden4 = !this.hidden4;
  }


}
