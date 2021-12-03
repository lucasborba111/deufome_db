import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  @Input() numStars: number = 5;
  @Input() nota: number = 1;
  @Output() ionClick: EventEmitter<number> = new EventEmitter<number>();
  stars: string[] = [];
  constructor(
    private navCtrl: NavController,
    private storage: Storage,
  ){}


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
          nota: element.nota

        } 
     
       
        if(post.tipo=='lanches'){
          console.log('this.posts = ', this.posts);
          this.posts.push(post); 

            }
        }
        
    })
  }
  postDetails(post){
    
    this.navCtrl.navigateForward(['postdetails', {data: JSON.stringify(post)}])
  }

  //init(nota){
   // this.stars = [ 
   // ];
  //  let tmp = nota;
   // for(let i=0; i< this.numStars; i++, tmp--){
     // if(tmp>=1){
    //    this.stars.push("star");
    //  }
     // else if(tmp>0 && tmp < 1){
      //    this.stars.push("star-half");
    //  }
     // else{
     //   this.stars.push("star-outline");
    //  }
  //}  
//}
  
  async ngOnInit() {
     
    await this.storage.create();
  }

  
}
