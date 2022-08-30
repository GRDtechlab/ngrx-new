import { Component } from '@angular/core';
import { FieldArrayType } from '@ngx-formly/core';
import { TicketService } from './ticket.service';

@Component({
  selector: 'formly-repeat-section',
  template: `
  
    <div *ngFor="let field of field.fieldGroup; let i = index;" class="card col-12 mb-2">
    
    
    <div class="" *ngIf=" i === currentNumber">
    <h3  class=" card-header"> Ticket {{i+1}} </h3>    
        <div class="card-body">
    <formly-field [field]="field"></formly-field>
    </div>
    </div>
    
    </div>
    <div class="d-flex align-items-right text-align-right">
      
    </div>
    
  `,
})
export class RepeatTypeComponent extends FieldArrayType {
  currentNumber: any;

  constructor(private ts: TicketService) {
    super();
    this.ts.currentTicket$.subscribe((val: any) => (this.currentNumber = val));
  }

  onNext(event: any) {
    // event.preventDefault();
    // this.currentNumber += 1;
  }
}
