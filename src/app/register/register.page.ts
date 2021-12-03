import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { LoadingController, ToastController, NavController } from '@ionic/angular';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  name: string;
  email: string;
  password: string;

  constructor
  (
    private afs: AngularFirestore,
    private afauth: AngularFireAuth,
    private router: Router,
    private loadingCtrl: LoadingController,
    private toastr: ToastController,
    private navCtrl: NavController 
  ) { }

  ngOnInit() {
  }

  GoToSignIn(){
    this.navCtrl.navigateForward('login');
  }



  async register()
  {
    if(this.name && this.email && this.password)
    {
      const loading = await this.loadingCtrl.create({
        message: 'Processando..',
        spinner: 'crescent',
        showBackdrop: true
      });
      loading.present();

      this.afauth.createUserWithEmailAndPassword(this.email,this.password)
      .then((data)=>{
        data.user.sendEmailVerification();
        this.afs.collection('user').doc(data.user.uid).set({
          'userId': data.user.uid,
          'userName': this.name,
          'userEmail': this.email,
          'createdAt': Date.now()
        })
        .then(()=>{
          loading.dismiss();
          this.toast('Registro Completo! Por favor verifique seu email', 'success');
          this.router.navigate(['/login']);
        })
        .catch(error =>{
          loading.dismiss();
          this.toast(error.message, 'danger');
        })
      })
      if (this.email.search('@')==-1){
        loading.dismiss();
        this.toast('Email Invalido, Insira um Email válido!', 'warning');
      }
     else if (this.password.length < 6){
       loading.dismiss();
    this.toast('Insira uma senha de pelo menos 6 digitos', 'warning');
  }

    }else{
      this.toast('Por favor preencha todas as informações', 'warning');
    }
  }// end register

  async toast(message,status){
    const toast = await this.toastr.create({
      message: message,
      color: status,
      position: 'top',
      duration: 2000
    });
    toast.present();
  } //end toast

}
