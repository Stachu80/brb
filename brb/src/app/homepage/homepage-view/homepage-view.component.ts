import {Component, HostListener, Inject, OnInit, Renderer2} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-homepage-view',
  templateUrl: './homepage-view.component.html',
  styleUrls: ['./homepage-view.component.scss'],
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
  constructor(@Inject(DOCUMENT) document, private renderer: Renderer2) {
  }

  ngOnInit() {
  }

  changeContainerHeight(): void {
    const img = document.getElementById('image');
    const container = document.getElementById('container');
    this.renderer.setStyle(container, 'height', img.offsetHeight + 'px');
    console.log(img.offsetHeight);
  }

  onLoadImage(): void {
    this.changeContainerHeight();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.changeContainerHeight();
  }


  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    const element = document.getElementById('navbar');
    const img = document.getElementById('image');
    const container = document.getElementById('container');
    if (window.pageYOffset > container.offsetHeight) {
      element.classList.add('sticky');
    } else {
      element.classList.remove('sticky');
    }
  }

}
