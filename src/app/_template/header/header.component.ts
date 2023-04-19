import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {
  faWhatsapp,
  faFacebook,
  faInstagram,
  faLinkedin,
  faPinterest,
  faTwitter,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';
import {
  faClock,
  faLocationPin,
  faBars
} from "@fortawesome/free-solid-svg-icons";
import {NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  faWhatsapp = faWhatsapp;
  faClock = faClock
  faLocationPin = faLocationPin;
  faBars = faBars;
  faYoutube = faYoutube;
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faLinkedin = faLinkedin;
  faPinterest = faPinterest;
  faTwitter = faTwitter;

  @ViewChild('navCollapse') navCollapse!: ElementRef;
  @ViewChild('header') header!: ElementRef;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.router
      .events
      .pipe(filter(evt => evt instanceof NavigationEnd))
      .subscribe(() => {
        this.navCollapse.nativeElement.classList.remove('show')
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      });


  }

  callAnimation(event: any) {
    event.classList.add('flip');
  }

  animationLeave(event: any) {
    event.classList.remove('flip');
  }

  ngAfterViewInit() {
    window.addEventListener('scroll', (event) => {
      if (window.scrollY > 300) {
        this.header.nativeElement.classList.add('fluid-bg');
      } else {
        this.header.nativeElement.classList.remove('fluid-bg')
      }
    })
  }

}
