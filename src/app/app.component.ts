import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  images = ['img01.jpg', 'img04.jpg', 'img07.jpg'];
  currentImage = 0;

  ngOnInit() {
    this.updateImage();
  }

  updateImage() {
    setInterval(() => {
      this.currentImage++;
      if (this.currentImage >= this.images.length) {
        this.currentImage = 0;
      }
    }, 5000);
  }
}
