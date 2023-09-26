import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  images = ['img01.jpg', 'img02.jpg', 'img03.jpg'];

  ngOnInit() {}

  updateImage() {}
}
