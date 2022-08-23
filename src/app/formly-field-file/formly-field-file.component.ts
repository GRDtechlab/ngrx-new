import { Component, OnInit } from '@angular/core';
import { FieldType,FieldTypeConfig } from '@ngx-formly/core';


@Component({
  selector: 'app-formly-field-file',
  template: `<input type="file"   [formlyAttributes]="field">`,

})
export class FormlyFieldFileComponent extends FieldType implements OnInit {


  ngOnInit(): void {
  }

}
