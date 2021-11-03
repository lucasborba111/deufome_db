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
          photo: element.photo,
          title: element.title,
          description: element.description,
        }
        this.posts.push(post);
      }
      console.log('this.posts = ', this.posts);
    })
    
    //this.posts = [];
    //this.storage.get('postsArray').then(res =>{
      //console.log('postsArray', res);
      //this.posts = res;
    //})
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
