import { Component } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent {

  constructor(private serviceStudents: StudentService){}

 
  studentNumber= ""
    firstName=""
    lastName=""
    email=""
    phoneNumber=""
    address=""
    dateOfBirth=""
    course=""
    
    studentDetails= {
      studentNumber:this.studentNumber,
      firstName: this.firstName,
      lastName:this.lastName,
      email:this.email,
      phoneNumber: this.phoneNumber,
      address: this.address,
      course: this.course,
      dateOfBirth:this.dateOfBirth
    }

  mClear(){
    this.studentDetails = {
      studentNumber:"",
      firstName: "",
      lastName:"",
      email:"",
      phoneNumber: "",
      address: "",
      course: "",
      dateOfBirth:""
    }
  }

post(){
  this.serviceStudents.post(this.studentDetails).subscribe({
    next: (data)=> {
      console.log(data);
      this.mClear();

    },
    error: (e)=>{console.log("stude", e)}
  })

  // console.log(this.studentDetails)
}




}






