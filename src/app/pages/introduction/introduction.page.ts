import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
import {ModalController, IonRouterOutlet, ActionSheetController,} from '@ionic/angular';
import { SignupPage } from '../signup/signup.page';
import { ModalBaseComponent } from '../../components/modal-base/modal-base.component';
import { LoginPage } from '../login/login.page';

  
const { Browser, Device } = Plugins;


@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.page.html',
  styleUrls: ['./introduction.page.scss'],
})
export class IntroductionPage implements OnInit {

  constructor(
    private modalCtrl: ModalController,
    private routerOutlet: IonRouterOutlet,
    private actionSheetCtrl: ActionSheetController
  ) { }

 async ngOnInit() {}

 async openEmailSignup() {
  const modal = await this.modalCtrl.create({
    component: SignupPage,
    presentingElement: this.routerOutlet.nativeEl,
    swipeToClose: true,
  });
  await modal.present();
}


async openSignup() {
  const buttons = [
  {
    text: 'Sign up with email',
    icon: 'mail',
  handler: () => {
  this.openEmailSignup();
    },
  },
];
  const actionSheet = await this.actionSheetCtrl.create({
  cssClass: 'custom-action-sheet',
  buttons
  });
await actionSheet.present();
}


async openLogin() {
  const modal = await this.modalCtrl.create({
    component: ModalBaseComponent,
      presentingElement: this.routerOutlet.nativeEl,
      swipeToClose: true,
      componentProps: {
    rootPage: LoginPage,
  },
});
    await modal.present();
}



async openTerms(e) {
  e.preventDefault();
  await Browser.open({ url: 'https://docs.google.com/document/d/1F1iCILt9QgRDwlfDZlMJg0CCFFXKhuU0pYCeeEn9OOI/edit#heading=h.vs09h7tnqpgt' });
  }
  async openPrivacy(e) {
    e.preventDefault();
await Browser.open({ url: 'https://docs.google.com/document/d/1_ibQ3qKgwNNbGwMJdNB3buBRA9zqWV9uynI7HYZFMYQ/edit#heading=h.yszqt4qrdepv/' });
  }
}
  
