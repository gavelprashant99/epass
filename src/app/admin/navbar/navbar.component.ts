import { Component, OnInit } from '@angular/core';
import { Router }  from "@angular/router";
// import { HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  constructor(public router: Router) { }

  ngOnInit(): void {
  }
  // @HostListener('window:scroll', ['$event'])

  // onWindowScroll() {
  //     let element = document.querySelector('.navbar') as HTMLElement;
  //     if (window.pageYOffset > element.clientHeight) {
  //       element.classList.add('navbar-inverse');
  //     } else {
  //       element.classList.remove('navbar-inverse');
  //     }
  //   }
}
