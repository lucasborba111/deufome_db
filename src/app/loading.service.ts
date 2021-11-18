import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  toast: any;

  constructor(private toastCtrl: ToastController) { }

  async presentToast(message) {

    this.toast = true;
    return await this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'bottom'
    }).then(a => {

      a.present().then(() => {
        console.log('presented');
        if (!this.toast) {
          a.dismiss().then(() => console.log('abort presenting'));
        }
      });
    });
  }
}
