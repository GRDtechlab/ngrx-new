import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

export interface tickdata {
  raceid: number;
  race: string;
  quan: number;
  amount: number;
  imageSrc?: string;
}

export interface tickdataTwo {
  raceid: number;
  race: string;
  quan: number;
  amount: number;
  imageSrc?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngrx';
  constructor(private authService: AuthService, private router: Router){}
  onLogIn(){
    if(!this.authService.getToken()){
      this.router.navigate(['/log-in'], { queryParams: { returnUrl: localStorage.getItem('redirectUrl') }});
    }
  }
  get checkLoggedIn(){
    return this.authService.getToken();
  }
  onLogout(){

  }
}
