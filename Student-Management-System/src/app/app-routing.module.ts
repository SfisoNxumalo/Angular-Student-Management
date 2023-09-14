import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentEditComponent } from './student-edit/student-edit.component';

const routes: Routes = [

  {path:"add-student" ,component: StudentAddComponent },
  {path:"student-details", component: StudentDetailsComponent},
  {path:"student-edit", component: StudentEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
