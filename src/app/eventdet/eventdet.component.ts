import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-eventdet',
  templateUrl: './eventdet.component.html',
  styleUrls: ['./eventdet.component.css']
})
export class EventdetComponent implements OnInit {
  myParam: any;
  eventId: any;
  eventName: any;
  eventData: any;
  eventDataTwo: any;
  eventDetailData: any;
  eventDetailDataTwo: any;
  slideEventNumber: number = -1;
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private dataService: DataService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.myParam = params['id'];
      let id = this.myParam.split('-');
      this.eventName = id.slice(0, -1).join(' ');
      this.eventId = id[id.length - 1];
      this.getEventDetailData(this.eventId);
    });
    this.eventData = this.dataService.ticketData;

    this.activatedRoute.params.subscribe((params: Params) => {
      this.myParam = params['id'];
      let id = this.myParam.split('-');
      this.eventName = id.slice(0, -1).join(' ');
      this.eventId = id[id.length - 1];
      this.getEventDetailDataTwo(this.eventId);
    });
    this.eventDataTwo = this.dataService.ticketDataTwo;
  }
  getEventDetailData(eventId: any) {
    console.log({ eventId });
    this.eventDetailData = this.dataService.getEventDetailData(+eventId);
    if(this.eventDetailData !== undefined ){
      this.slideEventNumber = 1
    }
    console.log(this.eventDetailData);
  }

  getEventDetailDataTwo(eventId: any) {
    console.log({ eventId });
    this.eventDetailDataTwo = this.dataService.getEventDetailDataTwo(+eventId);
    if(this.eventDetailDataTwo !== undefined ){
      this.slideEventNumber = 2
    }
    console.log(this.eventDetailDataTwo);
  }
  onRegister() {
    //this.router.navigate(['v2', this.myParam, 'booking', 'tickets']);
    this.router.navigate(['eventtable', `${this.eventName}-${this.eventId}-slide-${this.slideEventNumber}`])
  }
}
