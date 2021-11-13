import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  option = {
    slidesPerView: 2,
    centeredSlides: true,
    loop: true,
    spaceBetween: 2,
    autoplay: true,
  }

  option2 = {
    slidesPerView:3,
    centeredSlides: false,
    loop: false,
    spaceBetween: 2,
  }
  option3 = {
    slidesPerView: 0.9,
    centeredSlides: true,
    loop: true,
    autoplay: true,
    spaceBetween: 15,
    pager:true,
    // autoplay:true,
  }



}


