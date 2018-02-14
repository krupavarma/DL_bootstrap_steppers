import { WorkflowService } from './workflow/workflow.service';
import { FormDataService } from './data/formData.service';
import { routes } from './app.router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { WalkinComponent } from './walkin/walkin.component';
import { CounsellingComponent } from './counselling/counselling.component';
import { ConvertionComponent } from './convertion/convertion.component';
import { StepperComponent } from './stepper/stepper.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule,Form}        from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    WalkinComponent,
    CounsellingComponent,
    ConvertionComponent,
    StepperComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,RouterModule,routes,FormsModule
  ],
  providers: [FormDataService,WorkflowService],
  bootstrap: [AppComponent]
})
export class AppModule { }
