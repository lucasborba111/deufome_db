import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import firebase from 'firebase/app';
import { AuthService } from '../services/auth.service';
import { ToastController } from '@ionic/angular';


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
    nota: 0,
    estrela1: 0,
    estrela2: 0,
    estrela3: 0,
    estrela4: 0,
    estrela5: 0,
  }
    
  @Input() numStars: number = 5;
  @Input() value: number = 1;
  @Input() teste: number = 0;
  @Output() ionClick: EventEmitter<number> = new EventEmitter<number>();

  stars: string[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private auth: AuthService,
    private toastr: ToastController
    ) 
    {

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
      this.post.estrela1 = data.estrela1;
      this.post.estrela2 = data.estrela2;
      this.post.estrela3 = data.estrela3;
      this.post.estrela4 = data.estrela4;
      this.post.estrela5 = data.estrela5;
      this.post.nota = data.nota;
     }


     deletePost(){
      this.toast('Solicitação de remoção enviada!, Excluiremos em breve', 'warning');
    }


    async toast(message,status){
      const toast = await this.toastr.create({
        message: message,
        color: status,
        position: 'top',
        duration: 2000
      });
      toast.present();
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

    let estrela = this.value;

    let postRef = firebase.database().ref('posts/' + this.post.id);

    if(estrela==1){
      postRef.child('estrela1').set(this.post.estrela1++);
      this.value=0;
    }
     if (estrela==2){
      postRef.child('estrela2').set(this.post.estrela2++);
      this.value=0;

    }
    if (estrela==3){
      postRef.child('estrela3').set(this.post.estrela3++);
      this.value=0;


    }

     if(estrela==4){
      postRef.child('estrela4').set(this.post.estrela4++);
      this.value=0;

    }

    if(estrela==5) { 
      postRef.child('estrela5').set(this.post.estrela5++);
      this.value=0;

    }

 console.log(this.value)
    let porcentagem = (5 * this.post.estrela5 + 4 * this.post.estrela4 
                      + 3 * this.post.estrela3 + 2 * this.post.estrela2 + this.post.estrela1 * 1) / (this.post.estrela5 + this.post.estrela4 + this.post.estrela3 + this.post.estrela2 + this.post.estrela1)
    this.teste = parseFloat(porcentagem.toFixed(2));
    postRef.child('nota').set(porcentagem.toFixed(2));

  }
  starClicked(index){
    this.value = index + 1;
    this.ionClick.emit(this.value)

    this.calc();
    //setar o valor de estrelas e usuari
   


}
log(value){
  console.log(value);
}
  }
