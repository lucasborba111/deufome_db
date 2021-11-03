import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-postdetails',
  templateUrl: './postdetails.page.html',
  styleUrls: ['./postdetails.page.scss'],
})
export class PostdetailsPage implements OnInit {

  post ={
    photo: '',
    title: '',
    description: '',
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    ) {

      let data = this.activatedRoute.snapshot.params['data'];
      console.log('reached = ', JSON.parse(data));

      data = JSON.parse(data);
      this.post.photo = data.photo;
      this.post.title = data.title;
      this.post.description = data.description;
     }

  ngOnInit() {
  }

}
