import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-veganas',
  templateUrl: './veganas.page.html',
  styleUrls: ['./veganas.page.scss'],
})
export class VeganasPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  hidden = false;
  toggleHidden(){
    this.hidden = !this.hidden;
  }

  hidden2 = false;
  toggleHidden2(){
    this.hidden2 = !this.hidden2;
  }

  hidden3 = false;
  toggleHidden3(){
    this.hidden3 = !this.hidden3;
  }

  hidden4 = false;
  toggleHidden4(){
    this.hidden4 = !this.hidden4;
  }
}
