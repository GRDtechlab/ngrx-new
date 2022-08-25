import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-eventtable',
  templateUrl: './eventtable.component.html',
  styleUrls: ['./eventtable.component.css']
})
export class EventtableComponent implements OnInit {
  myParam: any;
  id: any;
  eventName: any;
  eventId: any;
  slideNumber:number = -1;
  constructor(private activatedRoute: ActivatedRoute,private ticketSerive: TicketService,private router: Router, private cdr: ChangeDetectorRef, private authService: AuthService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.myParam = params['id'];
      console.log(this.myParam,'myParam')
      let id = this.myParam.split('-');
      this.eventName = id.slice(0, -2).join(' ');
      this.eventId = id[id.length - 3];
      // console.log(id[id.length - 3])
      this.slideNumber = id[id.length - 1];
console.log('slideNumber ',+this.slideNumber === 2)
      if(+this.slideNumber === 1){ 
        this.getEventDataById();
      }else if(+this.slideNumber === 2){
        this.getEventDataByIdTwo();
      }
    });
    // this.activatedRoute.params.subscribe((params: Params) => {
    //   this.myParam = params['id'];
    //   let id = this.myParam.split('-');
    //   this.eventName = id.slice(0, -1).join(' ');
    //   this.eventId = id[id.length - 1];
    //   this.getEventDataByIdTwo();
    // });
    console.log('calling...')
    this.cdr.markForCheck();
  }
  getEventDataById() {
    console.log('getEventDataById', this.eventId);
    let data: any[] = [];
    if (this.eventId === '2') {
      data = [
        { raceid: 4, race: 'abc Run', quan: 0, amount: 399 },
        { raceid: 5, race: 'def Run', quan: 0, amount: 499 },
        { raceid: 6, race: 'ghi Run', quan: 0, amount: 599 },
      ];
      console.log(this.eventId, 'eId');
      this.ticketSerive.updateEventData(data);
    }
    if (this.eventId === '3') {
      data = [
        { raceid: 7, race: 'jkl Run', quan: 0, amount: 699 },
        { raceid: 8, race: 'mno Run', quan: 0, amount: 799 },
        { raceid: 9, race: 'pqr Run', quan: 0, amount: 899 },
      ];
      this.ticketSerive.updateEventData(data);
    }
  }

  getEventDataByIdTwo() {
    console.log('getEventDataById', this.eventId);
    let data: any[] = [];
    if (this.eventId === '4') {
      data = [
        { raceid: 13, race: '111 Run', quan: 0, amount: 399 },
        { raceid: 14, race: '222 Run', quan: 0, amount: 499 },
        { raceid: 15, race: '333 Run', quan: 0, amount: 599 },
      ];
      console.log(this.eventId, 'eId');
      this.ticketSerive.updateEventDataTwo(data);
    }
    if (this.eventId === '5') {
      data = [
        { raceid: 16, race: '444 Run', quan: 0, amount: 699 },
        { raceid: 17, race: '555 Run', quan: 0, amount: 799 },
        { raceid: 18, race: '666 Run', quan: 0, amount: 899 },
      ];
      this.ticketSerive.updateEventDataTwo(data);
    }
    if (this.eventId === '10') {
      
      data = [
        { raceid: 19, race: '777 Run', quan: 0, amount: 699 },
        { raceid: 20, race: '888 Run', quan: 0, amount: 799 },
        { raceid: 21, race: '999 Run', quan: 0, amount: 899 },
      ];
      this.ticketSerive.updateEventDataTwo(data);
    }
  }
  onIncreament() {
    // this.ticketService.count += 1;
    console.log(this.totalTickets);
    this.ticketSerive.countTicket.next(this.totalTickets);
  }
  onDecreament() {
    //if (this.ticketService.count <= 0) return;
    //this.ticketService.count -= 1;
    //  this.ticketService.countTicket.next(this.ticketService.count);
  }
  showRegister() {
    if(!this.authService.getToken()){
      // this.router.navigate(['/log-in'], )
    }
    console.log(this.myParam)
    console.log(this.ticketData);
    this.ticketSerive.isShow = true;
    if(+this.slideNumber === 1){
      this.ticketSerive.countTicket.next(this.ticketData);
    }else if(+this.slideNumber === 2){
      this.ticketSerive.countTicket.next(this.ticketDataTwo);
    }
    this.router.navigate(['register']);
    // this.onIncreament();
  }
  get showCounter() {
    return this.ticketSerive.count;
  }
  get showCounterTwo() {
    return this.ticketSerive.count;
  }
  get ticketData() {
    console.log('getTicket ', this.ticketSerive.getTicketData());
    return this.ticketSerive.getTicketData();
  }
  get ticketDataTwo() {
    console.log('getTicket ', this.ticketSerive.getTicketDataTwo());
    return this.ticketSerive.getTicketDataTwo();
  }
  get totalTickets() {
    return this.ticketData.reduce((acc: any, cur: any) => {
      return acc + cur['quan'];
    }, 0);
  }
  get totalTicketsTwo() {
    return this.ticketDataTwo.reduce((acc: any, cur: any) => {
      return acc + cur['quan'];
    }, 0);
  }
  get totalAmount() {
    return this.ticketData.reduce((acc:any, cur:any) => {
      return acc + cur['totalAmount'];
    }, 0);
  }
  get totalAmountTwo() {
    return this.ticketDataTwo.reduce((acc:any, cur:any) => {
      return acc + cur['totalAmount'];
    }, 0);
  }
  handleSelected(event:any, ticketData:any) {
    if (event.target.checked) {
      console.log(event.target.checked, ticketData);
    }
  }
  handleSelectedTwo(event:any, ticketDataTwo:any) {
    if (event.target.checked) {
      console.log(event.target.checked, ticketDataTwo);
    }
  }
}
