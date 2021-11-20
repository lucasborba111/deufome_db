import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import firebase from 'firebase/app';
@Component({
  selector: 'app-postdetails',
  templateUrl: './postdetails.page.html',
  styleUrls: ['./postdetails.page.scss'],
})
export class PostdetailsPage implements OnInit {

  post ={
    id:'',
    usuario:'',
    photo: '',
    titulo: '',
    ingredientes: '',
    modopreparo: '',
  }

  constructor(
    private activatedRoute: ActivatedRoute,
  
    ) {

      let data = this.activatedRoute.snapshot.params['data'];
      console.log('reached = ', JSON.parse(data));

      data = JSON.parse(data);
      this.post.id = data.id;
      this.post.usuario = data.usuario;
      this.post.photo = data.photo;
      this.post.titulo = data.titulo;
      this.post.ingredientes = data.ingredientes;
      this.post.modopreparo = data.modopreparo;
     }
     deletePost(post){
      console.log('post = ',post);
      firebase.database().ref('posts/' + post.id).remove().then(res=>{
        console.log('removed =', res);
      })
    }
  ngOnInit() {
  }

}
