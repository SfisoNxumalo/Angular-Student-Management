import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentAddComponent } from './student-add/student-add.component';
import { ViewStudentsComponent } from './view-students/view-students.component';
import { SearchStudentComponent } from './search-student/search-student.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentAddComponent,
    ViewStudentsComponent,
    SearchStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
