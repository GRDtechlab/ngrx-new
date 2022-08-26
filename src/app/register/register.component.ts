import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormlyFieldConfig } from '@ngx-formly/core/lib/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ITicketData } from '../ticket.service';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  @ViewChild('divForm')
  private divElement!: ElementRef<HTMLDivElement>;
  numberOfTickets: any;
  form: FormGroup = new FormGroup({});
  model: any = {
    theForm: [],
  };

  fields1: FormlyFieldConfig[] = [
    {
      key: 'theForm',
      type: 'repeat',
      fieldArray: {
        fieldGroupClassName: 'row',
        fieldGroup: [
          {
            className: 'col-6',
            key: 'eventName',
            type: 'text',
            templateOptions: {
              label: 'Event Name',
              
            },
          },
          {
            className: 'col-6',
            key: 'eventPrice',
            type: 'text',
            templateOptions: {
              label: 'Event Price',
              
            },
          },
          {
            className: 'col-6',
            key: 'fname',
            type: 'input',
            templateOptions: {
              label: 'First name',
              placeholder: 'Enter your first name',
              required: true,
              pattern: "^[a-zA-Z -']+",
              minLength: 3,
            },
            validation: {
              messages: {
                pattern: (error, field: any) =>
                  `"${field.formControl.value}" is not a valid name. Enter only letters.`,
              },
            },
          },
          {
            className: 'col-6',
            key: 'lname',
            type: 'input',

            templateOptions: {
              label: 'Last name',
              placeholder: 'Enter your last name',
              required: true,
              pattern: "^[a-zA-Z -']+",
              minLength: 3,
            },
            validation: {
              messages: {
                pattern: (error, field: any) =>
                  `"${field.formControl.value}" is not a valid name. Enter only letters.`,
              },
            },
          },
          {
            className: 'col-6',
            key: 'pnumber',
            type: 'input',
            templateOptions: {
              label: 'Phone number',
              placeholder: 'Enter your phone number',
              required: true,
              minLength: 10,
              maxLength: 10,
              pattern: '^[0-9]*$',
            },
            validation: {
              messages: {
                pattern: (error:any, field: any) =>
                  `"${field.formControl.value}" is not a valid number. Enter only number.`,
                // minlength: (error, field: FormlyFieldConfig) =>
                //   `"${field.formControl.value}" is less than 10 digit. Enter 10 digit number only.`,
              },
            },
          },
          {
            className: 'col-6',
            key: 'email',
            type: 'input',
            templateOptions: {
              label: 'Email',
              placeholder: 'Enter Email Address',
              required: true,
            },
            validators: {
              validation: ['email'],
            },
          },
          {
            className: 'col-6',
            key: 'gender',
            type: 'radio',
            templateOptions: {
              type: 'radio',
              label: 'Gender',
              required: true,
              name: 'gender',
              options: [{ value: 'Male', key: 'M' }, { value: 'Female', key: 'F' }]
            }
          },
          {
            className: 'col-6',
            key: 'date1',
            type: 'input',
            templateOptions: {
              label: 'Birth date',
              type: 'date',
              required: true
            },
            validators: {
              validation: ['DOBAge'],
            },
          },
          {
            className: 'col-6',
            key: 'state',
            type: 'select',
            templateOptions: {
              label: 'State',
              required: true,
              options: [
                { label: 'Andhra Pradesh', value: 'Andhra Pradesh' },
                { label: 'Arunachal Pradesh', value: 'Arunachal Pradesh' },
                { label: 'Assam', value: 'Assam' },
                { label: 'Bihar', value: 'Bihar' },
                { label: 'Chandigarh', value: 'Chandigarh' },
                { label: 'Chhattisgarh', value: 'Chhattisgarh' },
                { label: 'Dadra and Nagar Haveli', value: 'Dadra and Nagar Haveli' },
                { label: 'Daman and Diu', value: 'Daman and Diu' },
                { label: 'Delhi', value: 'Delhi' },
                { label: 'Goa', value: 'Goa' },
                { label: 'Gujarat', value: 'Gujarat' },
                { label: 'Haryana', value: 'Haryana' },
                { label: 'Himachal Pradesh', value: 'Himachal Pradesh' },
                { label: 'Jammu and Kashmir', value: 'Jammu and Kashmir' },
                { label: 'Jharkhand', value: 'Jharkhand' },
                { label: 'Karnataka', value: 'Karnataka' },
                { label: 'Kerala', value: 'Kerala' },
                { label: 'Lakshadweep', value: 'Lakshadweep' },
                { label: 'Madhya Pradesh', value: 'Madhya Pradesh' },
                { label: 'Maharashtra', value: 'Maharashtra' },
                { label: 'Manipur', value: 'Manipur' },
                { label: 'Meghalaya', value: 'Meghalaya' },
                { label: 'Mizoram', value: 'Mizoram' },
                { label: 'Nagaland', value: 'Nagaland' },
                { label: 'Orissa', value: 'Orissa' },
                { label: 'Pondicherry', value: 'Pondicherry' },
                { label: 'Punjab', value: 'Punjab' },
                { label: 'Rajasthan', value: 'Rajasthan' },
                { label: 'Sikkim', value: 'Sikkim' },
                { label: 'Tamil Nadu', value: 'Tamil Nadu' },
                { label: 'Telangana', value: 'Telangana' },
                { label: 'Tripura', value: 'Tripura' },
                { label: 'Uttaranchal', value: 'Uttaranchal' },
                { label: 'Uttar Pradesh', value: 'Uttar Pradesh' },
                { label: 'West Bengal', value: 'West Bengal' }
              ],
            },
          },
          {
            className: 'col-6',
            key: 'pin',
            type: 'input',

            templateOptions: {
              label: 'PIN',
              placeholder: 'Enter your PIN number',
              required: true,
              minLength: 6,
              maxLength: 6,
              pattern: '^[0-9]*$',
            },
            validation: {
              messages: {
                pattern: (error, field: any) =>
                  `"${field.formControl.value}" is not a valid number. Enter only number.`,
                // minlength: (error, field: FormlyFieldConfig) =>
                //   `"${field.formControl.value}" is less than 10 digit. Enter 10 digit number only.`,
              },
            },
          },
          {
            className: 'col-6',
            key: 'country',
            type: 'select',
            templateOptions: {
              required: true,
              label: 'Country',
              options: [
                { label: 'India', value: 'India' },
                { label: 'USA', value: 'USA' },
                { label: 'England', value: 'England' },
              ],
            },
          },
          {
            className: 'col-6',
            key: 'nationality',
            type: 'select',
            templateOptions: {
              required: true,
              label: 'Nationality',
              options: [
                { label: 'India', value: 'India' },
                { label: 'USA', value: 'USA' },
                { label: 'England', value: 'England' },
              ],
            },
          },
          {
            className: 'col-6',
            key: 'bloodgroup',
            type: 'select',
            templateOptions: {
              required: true,
              label: 'Blood group',
              options: [
                { label: 'O Positive', value: 'O Positive' },
                { label: 'O Negative', value: 'O Negative' },
                { label: 'A Positive', value: 'A Positive' },
                { label: 'A Negative', value: 'A Negative' },
                { label: 'B Positive', value: 'B Positive' },
                { label: 'B Negative', value: 'B Negative' },
                { label: 'AB Positive', value: 'AB Positive' },
                { label: 'AB Negative', value: 'AB Negative' },
              ],
            },
          },
          {
            className: 'col-6',
            key: 'tshirtsize',
            type: 'select',
            templateOptions: {
              required: true,
              label: 'Select T-shirt size',
              options: [
                { label: 'Kids Size 30', value: 'Kids Size 30' },
                { label: 'S', value: 'S' },
                { label: 'L', value: 'L' },
                { label: 'XXL', value: 'XXL' },
              ],
            },
          },
          {
            className: 'col-6',
            key: 'ECname',
            type: 'input',

            templateOptions: {
              label: 'Emergency contact name',
              placeholder: 'Enter emergency contact name',
              required: true,
              pattern: "^[a-zA-Z -']+",
              minLength: 3,
            },
            validation: {
              messages: {
                pattern: (error, field: any) =>
                  `"${field.formControl.value}" is not a valid name. Enter only letters.`,
              },
            },
          },
          {
            className: 'col-6',
            key: 'ECnumber',
            type: 'input',

            templateOptions: {
              label: 'Emergency contact phone number',
              placeholder: 'Enter Emergency contact phone number',
              required: true,
              minLength: 10,
              maxLength: 10,
              pattern: '^[0-9]*$',
            },
            validation: {
              messages: {
                pattern: (error, field: any) =>
                  `"${field.formControl.value}" is not a valid number. Enter only number.`,
                // minlength: (error, field: FormlyFieldConfig) =>
                //   `"${field.formControl.value}" is less than 10 digit. Enter 10 digit number only.`,
              },
            },
          },
          {
            className: 'col-6',
            key: 'idproof',
            type: 'select',
            templateOptions: {
              required: true,
              label: 'ID Proof',
              options: [
                { label: 'Passport', value: 'Passport' },
                { label: 'PAN', value: 'PAN' },
                { label: 'Voter Id', value: 'Voter Id' },
                { label: 'Aadhar', value: 'Aadhar' },
                { label: 'Driving License', value: 'Driving License' }
              ],
            },
          },
          {
            className: 'col-6',
            key: 'IDnumber',
            type: 'input',

            templateOptions: {
              label: 'ID Proof number',
              placeholder: 'Enter ID proof number',
              required: true,
            },
          },
          {
            key: 'file',
            type: 'file',
            templateOptions: {
              label: 'Upload ID Proof (with DOB)',
              //required: true,
            },
          },
          {
            className: 'col-6',
            key: 'checkbox',
            type: 'checkbox',

            templateOptions: {
              label: 'Additional T- Shirt (INR 250/- Extra)',
            },
          },
          {
            key: 'Etshirtsize',
            type: 'select',
            templateOptions: {
              label: 'Select T-shirt size',
              options: [
                { label: 'XL', value: 'XL' },
                { label: 'S', value: 'S' },
                { label: 'L', value: 'L' },
                { label: 'XXL', value: 'XXL' },
              ],
            },
            hideExpression: '!model.checkbox',
          },
          {
            key: 'tcorg',
            type: 'checkbox',

            templateOptions: {
              required: true,
              label: ' I Agree to the Organizer Terms & Conditions',
            },
          },
          {
            key: 'tcif',
            type: 'checkbox',

            templateOptions: {
              required: true,
              label: 'I Agree to the iFinish Terms & Conditions',
            },
          },
        ],
      },
    },
  ];

  submitted = false;
  currentTicket = 0;
  showForm = false;
  ticketEventName: string = '';
  selectedEvent = {} as any;
  eventData:any = [];
  getTotalAmount = 0;
  checkCurrentTicketFormValid!: number;
  formGroupControl!: FormGroup;
  formArrayControl!: FormArray;
  ticketCounter$!: Observable<ITicketData[] | null>;

  constructor(
    private ticketService: TicketService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    // this.dynamicForm = this.formBuilder.group({
    //   numberOfTickets: ['', Validators.required],
    //   totalAmount: ['', Validators.required],
    //   tickets: new FormArray([]),
    // });
    this.ticketCounter$ = this.ticketService.countTicket$.pipe(
      map((rowData: ITicketData[]) => {
        let filterData = rowData.filter((data) => data.quan !== 0);
        filterData = filterData.map((data) => ({ count: data.quan, ...data }));
        return filterData;
      }),
      tap((data) => this.loadForm(data))
    );
  }
  loadForm(filterData:any) {
    this.eventData = [...filterData];
    let totalTickets = this.totalTickets(filterData);
    this.totalAmount(filterData);
    this.ticketService.count = totalTickets;
    this.currentTicket = 0;
    let eventObjectLengt: number = this.eventData.length;
    // this.t.clear(); // to reset ticket-form array when we re click register button
    for (let i = 0; i <= eventObjectLengt - 1; i++) {
      this.onChangeTickets(this.eventData[i]['quan'], this.eventData[i]);
    }

    this.numberOfTickets = this.model.theForm.length;
    console.log(this.ticketService.getRaceId(),'race ID')
    this.updateFields1(this.ticketService.getRaceId());
    this.cdr.detectChanges();
  }
  updateFields1(raceId:number ){
    if(raceId === 2){
      let fieldId: any = this.fields1[0]['fieldArray']?.fieldGroup?.findIndex(data => data.key === 'pnumber');
      this.fields1[0]['fieldArray']?.fieldGroup?.splice(fieldId,1);
    }
  }
  getFromState(currentInex:any) {
    let formArrayControl = this.form['controls']['theForm'] as FormArray;
    console.log(this.formArrayControl, 'd');
    return formArrayControl['controls'][currentInex].valid;
  }
  totalAmount(filterData:any) {
    this.getTotalAmount = filterData.reduce((acc: any, cur: any) => {
      return acc + cur['totalAmount'];
    }, 0);
  }
  totalTickets(ticketData:any) {
    return ticketData.reduce((acc: any, cur: any) => {
      return acc + cur['quan'];
    }, 0);
  }

  get getCounter() {
    return this.ticketService.count;
  }
  onChangeTickets(e:any, eventRowData: ITicketData) {
    console.log(e, eventRowData, 'inside formgroup');
    const numberOfTickets = e || 0;
    for (let i = 0; i < numberOfTickets; i++) {
      this.model = {
        theForm: [
          ...this.model['theForm'],
          { eventName: eventRowData.race, eventPrice: eventRowData.amount },
        ],
      };
    }
  }

  onNext(event:any) {
    event.preventDefault();

    window.scrollTo({
      top: this.divElement.nativeElement.offsetTop,
      behavior: 'smooth',
    });

    if (this.currentTicket === this.ticketService.count - 1) {
      this.eventData.length = 0;
      this.currentTicket = 0;
      return;
    }

    this.currentTicket += 1;
    this.ticketService.currentTicket.next(this.currentTicket);
  }
  onPrevious(event:any) {
    event.preventDefault();
    if (this.currentTicket === 0) {
      return;
    }
    this.currentTicket -= 1;
    this.ticketService.currentTicket.next(this.currentTicket);
    // this.status = this.getFromState()
  }

  onSubmit() {
    this.submitted = true;

    this.ticketService.finalData.next(this.form.value);
    this.router.navigate(['summary']);
    this.ticketEventName = '';
  }
  onReset() {
    // reset whole form back to initial state
    this.submitted = false;
    this.ticketService.count = 0;
    this.currentTicket = 0;
  }

  onClear() {
    // clear errors and reset ticket fields
    this.submitted = false;
    // this.t.reset();
  }
  onBackNavigation() {
    this.router.navigate(['eventtable', `${localStorage.getItem('event-table')}`]);
  }
}
