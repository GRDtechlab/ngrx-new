import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'app-formly-text-field',
  templateUrl: './formly-text-field.component.html',
  styleUrls: ['./formly-text-field.component.css']
})
export class FormlyTextFieldComponent extends FieldType implements OnInit {

  constructor() {
    super();
   }

  ngOnInit(): void {
  }

}
