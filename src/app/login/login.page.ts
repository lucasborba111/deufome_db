import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  password: string;

  constructor(
    private navCtrl: NavController,
    private auth: AuthService,
    private toastr: ToastController
    ) { }

  GoToSignUp(){
    this.navCtrl.navigateForward('register');
  }
  
  
  ngOnInit() {
  }

  login(){
    if(this.email && this.password)
    {
      this.auth.signIn(this.email, this.password);
    } else {
      this.toast('Por favor insira seu Email e sua Senha!', 'warning');
    }
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


}
