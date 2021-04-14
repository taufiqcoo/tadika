import { Component, OnInit } from '@angular/core';
import { ToastController} from '@ionic/angular';

@Component({
  selector: 'app-daftaranak',
  templateUrl: './daftaranak.page.html',
  styleUrls: ['./daftaranak.page.scss'],
})
export class DaftaranakPage implements OnInit {

  constructor(public toastController: ToastController) { }

  async openToast() {
    const toats = await this.toastController.create({
      message: 'Registered please go to the List tab',
      duration: 2000
    });
    toats.present();
  } 

  ngOnInit() {
  }

}
