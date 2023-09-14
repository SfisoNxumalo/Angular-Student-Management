import { Component } from '@angular/core';


@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent  {

  studentDetails = {

      studentNumber: "",
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      address: "",
      dateOfBirth: "",
      course: ""
      
}


student: any [] = []

onSave(){

  
console.log(this.studentDetails)
this.student.push(this.studentDetails)
// console.log(this.student)

}

}








  



