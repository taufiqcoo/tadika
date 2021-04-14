import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-akaunpejaga',
  templateUrl: './akaunpejaga.page.html',
  styleUrls: ['./akaunpejaga.page.scss'],
})
export class AkaunpejagaPage implements OnInit {

  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  ngOnInit() {
  }
  async signOut() {
    await this.afAuth.signOut();
    this.router.navigate(['/']);
    }     

}
