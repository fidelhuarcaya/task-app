import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './features/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatStepperModule} from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { FormComponent } from './shared/form/form.component';
import {MatInputModule} from '@angular/material/input';
import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AddComponent } from './shared/add/add.component';
import { ListComponent } from './features/list/list.component';
import {MatListModule} from '@angular/material/list';
import {MatDatepickerModule} from '@angular/material/datepicker';

import {MatDialogModule} from '@angular/material/dialog';
import { TaskService } from './core/services/task.service';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormComponent,
    AddComponent,
    ListComponent
  ],  
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatBadgeModule,
    MatIconModule,
    MatFormFieldModule,
    MatListModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSlideToggleModule,

  ],  
  bootstrap: [AppComponent],
  providers:  [
    TaskService,

    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false }
    },
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true }
    },
   
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
