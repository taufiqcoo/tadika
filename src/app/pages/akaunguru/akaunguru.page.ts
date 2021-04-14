import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-akaunguru',
  templateUrl: './akaunguru.page.html',
  styleUrls: ['./akaunguru.page.scss'],
})
export class AkaunguruPage implements OnInit {

  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  ngOnInit() {
  }
  async signOut() {
    await this.afAuth.signOut();
    this.router.navigate(['/']);
    }   
}
