import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatInputModule, MatCheckboxModule, MatFormFieldModule, MatOptionModule, MatSelectModule, MatCardModule } from '@angular/material';
import { RecaptchaModule, RECAPTCHA_SETTINGS, RecaptchaSettings  } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RecaptchaModule.forRoot(),
    RecaptchaFormsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatCardModule,
  ],
  providers: [ 
    { provide: RECAPTCHA_SETTINGS, useValue: { siteKey: '6LcKNEIUAAAAAPGe3VDGzUcqXyi5iyMD-IPhiXej' } as RecaptchaSettings,},],
  bootstrap: [AppComponent]
})
export class AppModule { }
