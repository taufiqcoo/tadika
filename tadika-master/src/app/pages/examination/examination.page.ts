import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-examination',
  templateUrl: './examination.page.html',
  styleUrls: ['./examination.page.scss'],
})
export class ExaminationPage implements OnInit {
  

  constructor(private router: Router) { }

 schedule(){
   this.router.navigate (['schedulepenjaga']);
 }

 cal(){
  this.router.navigate (['home']);
}
exam(){
  this.router.navigate (['examinationtabpenjaga']);
}

  ngOnInit() {
  }


}
