import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  images = [
    {
      imageSrc: 'assets/naxos_logo.png',
      imageAlt: 'naxos',
      imageLink: '/naxos',
    },
    {
      imageSrc: 'assets/taker_logo.png',
      imageAlt: 'taker',
      imageLink: '/taker',
    },
    {
      imageSrc: 'assets/area_logo.png',
      imageAlt: 'person1',
      imageLink: '/area',
    },
  ]

  indicators = true;

  controls = true;

  autoSlide = true;

  slideInterval = 3000;
  
  selectedIndex = 0;

  ngOnInit(): void {
    if (this.autoSlide) {
      this.autoSlideImages();
    }
  }

  // changes slide in every 3 second
  autoSlideImages(): void {
    setInterval(() => {
      this.onNextClick();
    }, this.slideInterval);
  }

  //Sets index of image on indicator click
  selectedImage(index: number): void {
    this.selectedIndex = index; 
  }

  goImage(index: number): void {
    window.open(this.images[this.selectedIndex].imageLink);
  }

  onPrevClick(): void {
    if (this.selectedIndex === 0) {
      this.selectedIndex = this.images.length - 1;
    } else {
      this.selectedIndex--;
    }
  }

  onNextClick(): void {
    if (this.selectedIndex === this.images.length - 1) {
      this.selectedIndex = 0;
    } else {
      this.selectedIndex++;
    }
  }
}
