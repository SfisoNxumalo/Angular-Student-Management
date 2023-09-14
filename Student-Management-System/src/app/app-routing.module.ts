import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { ViewStudentsComponent } from './view-students/view-students.component';
const routes: Routes = [

  
  {path: "dashboard", component: ViewStudentsComponent},
  {path:"add-student" ,component: StudentAddComponent },
  {path: "student-details", component: StudentDetailsComponent},
  {path:"", redirectTo:"/dashboard", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
