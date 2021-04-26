import { User } from './../../services/user.interface';
import { Component, OnInit } from '@angular/core';
import { ResetPwPage } from '../reset-pw/reset-pw.page';
import {ModalController, AlertController, LoadingController,} from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { UserService } from '../../services/users.service';
import * as IUsers from '../../services/user.interface';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  resetPwPage = ResetPwPage;
  loginForm: FormGroup;
  showPw = false;

  user: IUsers.User;
  uid = null;

  constructor(
    private modalCtrl: ModalController,
    private fb: FormBuilder,
    private auth: AuthService,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private router: Router,
    private userSvc: UserService,
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
  });
}

async signIn() {
    const loading = await this.loadingController.create();
    await loading.present();
    this.auth
        .signIn(this.loginForm.value)
        .then(
        (res) => {
        console.log('signIn: user.uid:', JSON.stringify(res.user.uid));
        this.uid = res.user.uid;
        // call service utk collection users
        this.userSvc.getUser(this.uid).subscribe(res => {
          this.user = res;
          console.log('dbUser: user:', JSON.stringify(this.user));

          if (this.user.userType === 'penjaga') {
            loading.dismiss();

            this.close();
            this.router.navigateByUrl('/tabs');
          }
          else {
            loading.dismiss();
            this.close();
            this.router.navigateByUrl('/tabsguru');
          }
        });
        
        
},

async (err) => {
    loading.dismiss();
    const alert = await this.alertController.create({
      header: 'User not exist',
      message: err.message,
      buttons: ['OK'],
});

await alert.present();
    }
  );
}

close() {
this.modalCtrl.dismiss();
  }
}
