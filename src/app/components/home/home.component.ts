import { Component, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  isButtonVisible = true;


  constructor(private router: Router, private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    if (this.isButtonVisible === true) {
      this.isButtonVisible = false;
    }
  }
}
