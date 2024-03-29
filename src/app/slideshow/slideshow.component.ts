import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss'],
})
export class SlideshowComponent implements OnInit {
  images = ['img01.jpg', 'img04.jpg', 'img07.jpg'];
  headlines = [
    'Bring Engineering to the next level',
    'Burn to Code',
    'Level Up your Code',
  ];
  currentImage = 0;
  showImage = true;

  ngOnInit() {
    this.updateImage();
  }

  updateImage() {
    setInterval(() => {
      this.currentImage++;
      if (this.currentImage >= this.images.length) {
        this.currentImage = 0;
      }
      this.showImage = false;
      setTimeout(() => {
        this.showImage = true;
      }, 10);
    }, 5000);
  }
}
