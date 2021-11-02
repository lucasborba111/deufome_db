import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { LoadingController} from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  user: any;

  constructor
  (
    private auth: AuthService,
    private afauth: AngularFireAuth,
    private router: Router,
    private LoadingCtrl: LoadingController
    
  ) { }

  ngOnInit() {
    this.auth.user$.subscribe(user =>{
      this.user = user;
    })
  }
  
  async signOut(){
    const loading = await this.LoadingCtrl.create({
      spinner: 'crescent',
      showBackdrop: true
    });
    loading.present();
    this.afauth.signOut()
    .then(()=>{
      loading.dismiss();
      this.router.navigate(['/login']);
    })
  }

}
