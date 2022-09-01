import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormControl, FormsModule, ReactiveFormsModule, ValidationErrors } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, CanActivate } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthService } from './auth.service';
import { AuthEffects } from './store/effects/auth.effects';
import {reducers} from './store/app.states';
import { ErrorInterceptor, TokenInterceptor } from './token.interceptor';
import { StatusComponent } from './status/status.component';
import { AuthGuardService as AuthGuard } from './auth-guard.service';
import { EventdetComponent } from './eventdet/eventdet.component';
import { EventtableComponent } from './eventtable/eventtable.component';
import { RegisterComponent } from './register/register.component';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FormlyFieldFileComponent } from './formly-field-file/formly-field-file.component';
import { FormlyTextFieldComponent } from './formly-text-field/formly-text-field.component';
import { RepeatTypeComponent } from './repeat-section.type';

export function EmailValidator(
  control: FormControl | any
): ValidationErrors | null {
  return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
    control.value
  )
    ? null
    : { email: true };
}



export function EmailMessage(err: any, field: FormlyFieldConfig) {
  return `"${field?.formControl?.value}" is not a valid email address`;
}

export function minlengthValidationMessage(err: any, field: any) {
  return `Should have atleast ${field.templateOptions.minLength} characters`;
}

export function maxlengthValidationMessage(err: any, field: any) {
  return `This value should be less than ${field.templateOptions.maxLength} characters`;
}

export function minValidationMessage(err: any, field: any) {
  return `This value should be more than ${field.templateOptions.min}`;
}

export function maxValidationMessage(err: any, field: any) {
  return `This value should be less than ${field.templateOptions.max}`;
}

export function DateValidator(control: any) {
  let day = new Date(control.value).getDay();
  let month = new Date(control.value).getMonth();
  let year = new Date(control.value).getFullYear();
  let result = new Date(year + 18, month - 1, day) <= new Date();
  console.log({ result });
  return result ? null : { DOBAge: true };
}

export function DateValidatorTentyOne(control: any) {
  let day = new Date(control.value).getDay();
  let month = new Date(control.value).getMonth();
  let year = new Date(control.value).getFullYear();
  let result = new Date(year + 21, month - 1, day) <= new Date();
  console.log({ result });
  return result ? null : { DOBAgeTwentyOne: true };
}
export function DateValidationMessage(err: any, field: any) {
  return `"${field?.formControl?.value}" Age shoulbe be 18 or greater.`;
}
export function DateValidationMessageTwentyOne(err: any, field: any) {
  return `"${field?.formControl?.value}" Age shoulbe be 21 or greater.`;
}


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginComponent,
    SignupComponent,
    StatusComponent,
    EventdetComponent,
    EventtableComponent,
    RegisterComponent,
    FormlyFieldFileComponent,
    FormlyTextFieldComponent,
    RepeatTypeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    FormlyBootstrapModule,
    FormlyModule,
    HttpClientModule,
    EffectsModule.forRoot([AuthEffects]),
    StoreModule.forRoot(reducers, {}),
    FormlyModule.forRoot({ 
      types: [
        { name: 'repeat', component: RepeatTypeComponent },
        { name: 'text', component: FormlyTextFieldComponent },
        { name: 'file', component: FormlyFieldFileComponent, wrappers: ['form-field'] },
    ],
      validators: [
        { name: 'email', validation: EmailValidator },
        { name: 'DOBAge', validation: DateValidator },
        {name: 'DOBAgeTwentyOne', validation: DateValidatorTentyOne}
    ],
      validationMessages: [
        { name: 'required', message: 'This field is required' },
        { name: 'email', message: EmailMessage },
        { name: 'minlength', message: minlengthValidationMessage },
        { name: 'maxlength', message: maxlengthValidationMessage },
        { name: 'min', message: minValidationMessage },
        { name: 'max', message: maxValidationMessage },
        { name: 'DOBAge', message: DateValidationMessage },
        { name: 'DOBAgeTwentyOne', message: DateValidationMessageTwentyOne },
      ],
    }),
    FormlyModule.forRoot({ extras: { lazyRender: true } }),

  ],
  providers: [AuthService,AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
