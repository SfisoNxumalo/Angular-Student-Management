import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentEditComponent } from './student-edit/student-edit.component';

const routes: Routes = [
  
    {
      path: "student-edit", component: StudentEditComponent
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
