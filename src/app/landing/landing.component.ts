import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState,selectAuthState  } from '../store/app.states';
import {LogOut } from '../store/actions/auth.actions'
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  getState: Observable<any>;
  isAuthenticated!: false;
  user!: any;
  errorMessage = null;

  @ViewChild('carouselSlide')
  private carouselSlide!: ElementRef<HTMLDivElement>;
  eventData!: any;
  eventDataTwo!: any;
  width: any;
  scroll = 0;
  interval = 0;
  carouselImages!: any;
  size: any;
  mobile!: boolean;
  innerWidth: any;
  showNavigationArrows = true;
  //showNavigationIndicators = false;
  animation = true;
  images: any[] = [];
  imagesTwo: any[] = [];
  constructor(private store: Store<AppState>,private router: Router,private dataService: DataService) {
    this.getState = this.store.select(selectAuthState);
   }

  ngOnInit(): void {
    this.getState.subscribe((state) => {
      this.isAuthenticated = state.isAuthenticated;
      this.user = state.user;
      this.errorMessage = state.errorMessage;
    });
    let j = -1;
    this.eventData = this.dataService.ticketData;
    console.log('w ', window.innerWidth);
    if (window.innerWidth <= 768) {
      console.log('hi');
      // 768px portrait
      this.mobile = true;
      this.showNavigationArrows = true;
    } else {
      this.mobile = false;
    }
    for (var i = 0; i < this.eventData.length; i++) {
      if (i % 3 == 0) {
        j++;
        this.images[j] = [];
        this.images[j].push(this.eventData[i]);
      } else {
        this.images[j].push(this.eventData[i]);
      }
    };
    let a = -1;
    this.eventDataTwo = this.dataService.ticketDataTwo;
    console.log('w ', window.innerWidth);
    if (window.innerWidth <= 768) {
      console.log('hi');
      // 768px portrait
      this.mobile = true;
      this.showNavigationArrows = true;
    } else {
      this.mobile = false;
    }
    for (var b = 0; b < this.eventDataTwo.length; b++) {
      if (b % 3 == 0) {
        a++;
        this.imagesTwo[a] = [];
        this.imagesTwo[a].push(this.eventDataTwo[b]);
      } else {
        this.imagesTwo[a].push(this.eventDataTwo[b]);
      }
    }
  }
  logOut(): void {
    this.store.dispatch(new LogOut);
  };

  onCardClick(card: any) {
    console.log({ card });
    this.router.navigate([
      'e', `${card.race.split(' ').join('-')}-${card.raceid}`,
    ]);
  }
}
