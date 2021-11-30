import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-postdetails',
  templateUrl: './postdetails.page.html',
  styleUrls: ['./postdetails.page.scss'],
})
export class PostdetailsPage implements OnInit {
  
  user: any;
  post ={
    id:'',
    tipo: '',
    usuario:'',
    photo: '',
    titulo: '',
    ingredientes: '',
    modopreparo: '',
    rating: 0,
  }

  @Input() numStars: number = 5;
  @Input() value: number = 1;

  @Output() ionClick: EventEmitter<number> = new EventEmitter<number>();
  stars: string[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private auth: AuthService,

    ) {

      let data = this.activatedRoute.snapshot.params['data'];
      console.log('reached = ', JSON.parse(data));

      data = JSON.parse(data);
      this.post.id = data.id;
      this.post.tipo = data.tipo,
      this.post.usuario = data.usuario;
      this.post.photo = data.photo;
      this.post.titulo = data.titulo;
      this.post.ingredientes = data.ingredientes;
      this.post.modopreparo = data.modopreparo;
      this.post.rating = data.rating;
     }

     deletePost(post){
      console.log('post = ',post);
      firebase.database().ref('posts/' + post.id).remove().then(res=>{
        console.log('removed =', res);
      })
    }
  ngOnInit() {
   
  }
  ngAfterViewInit(){
    this.calc();
  }
  calc(){
    this.stars = [ 
    ];
    let tmp = this.value;
    for(let i=0; i< this.numStars; i++, tmp--){
      if(tmp>=1){
        this.stars.push("star");
        
      }
      else if(tmp>0 && tmp < 1){
          this.stars.push("star-half");
      }
      else{
        this.stars.push("star-outline");
      }

    }
  }
  starClicked(index){
    this.value = index + 1;
    console.log(this.value);
    this.ionClick.emit(this.value)
    
    this.calc();
    this.post.rating = this.value;
    let postRef = firebase.database().ref('posts/' + this.post.id);
    postRef.child('rating').set(this.post.rating);
    
  }
  log(valor){
    console.log(valor);
  }
}
