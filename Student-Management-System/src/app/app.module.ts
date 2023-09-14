import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentEditComponent } from './student-edit/student-edit.component';

import { StudentAddComponent } from './student-add/student-add.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentEditComponent,
    StudentAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
