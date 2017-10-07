import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentSlide: number = 0;

  constructor() { }

  ngOnInit() {
  }

  onNext(): void {
    if (this.currentSlide === 2) {
      this.currentSlide = 0;
      return;
    }
    this.currentSlide++;
  }

  onPrev(): void {
    if (this.currentSlide === 0) {
      this.currentSlide = 2;
      return;
    }
    this.currentSlide--;
  }
}
