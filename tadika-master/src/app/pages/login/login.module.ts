import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';

import {  ReactiveFormsModule } from '@angular/forms'; // <-Import here
import { ResetPwPageModule } from '../reset-pw/reset-pw.module'; // <- Addimport

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    ReactiveFormsModule,
    ResetPwPageModule
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
