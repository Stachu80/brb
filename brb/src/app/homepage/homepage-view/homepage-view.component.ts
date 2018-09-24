import {Component, HostListener, Inject, OnInit} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-homepage-view',
  templateUrl: './homepage-view.component.html',
  styleUrls: ['./homepage-view.component.sass'],
  animations: [
    trigger('fade',
      [
        state('void', style({opacity: 0})),
        transition(':enter', [animate(300)]),
        transition(':leave', [animate(500)]),
      ]
    )]
})
export class HomepageViewComponent implements OnInit {

  constructor(@Inject(DOCUMENT) document) {
  }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    const element = document.getElementById('navbar');
    const img = document.getElementById('image');
    console.log(img.offsetWidth);
    if (window.pageYOffset > +img.offsetWidth * 40 / 100) {
      element.classList.add('sticky');
    } else {
      element.classList.remove('sticky');
    }
  }

}
