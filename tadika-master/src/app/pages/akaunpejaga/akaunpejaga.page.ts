import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/users.service';
import * as IUsers from '../../services/user.interface';
import { Plugins, CameraResultType } from '@capacitor/core';
import { LoadingController } from '@ionic/angular';
const { Camera } = Plugins;


@Component({
  selector: 'app-akaunpejaga',
  templateUrl: './akaunpejaga.page.html',
  styleUrls: ['./akaunpejaga.page.scss'],
})
export class AkaunpejagaPage implements OnInit {
  user: IUsers.User = null;
  dummyAvatar = '';
  

  constructor(private afAuth: AngularFireAuth,
     private router: Router,
     private authService: AuthService,
private loading: LoadingController
     ) { }

  ngOnInit() {
    this.authService.getUserData().subscribe(user => {
      this.user = user;
      if (!this.user.photoURL) {
      const name = user.displayName.split(' ').join('+')
      this.dummyAvatar = `https://eu.ui-
      ↪ avatars.com/api/?name=${name}&background=3dc2ff&color=fff`;
      }
      });
      
  }
  async signOut() {
    await this.afAuth.signOut();
    this.router.navigate(['/']);
    }     
    async changeAvatar() {
      
        const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.Base64,
        });
        const loading = await this.loading.create();
        await loading.present();
        this.authService.uploadAvatar(image.base64String).subscribe((res) => {
        loading.dismiss();
        });
    }  
}
