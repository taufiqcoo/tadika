import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-infoguru',
  templateUrl: './infoguru.page.html',
  styleUrls: ['./infoguru.page.scss'],
})
export class InfoguruPage implements OnInit {
  

  constructor(private router :Router) { }

  cal(){
    this.router.navigate (['home']);
  }
  schedule(){
    this.router.navigate (['scheduleguru']);
  }
  ngOnInit() {
  }

 
}
