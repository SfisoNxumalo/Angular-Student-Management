import { Component } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent {

  constructor(private serviceStudents: StudentService){}

 
  studentNumber!: number
    firstName=""
    lastName=""
    email=""
    phoneNumber!:number
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


post(){
  this.serviceStudents.post(this.studentDetails).subscribe({
    next: (data)=> {console.log(data)},
    error: (e)=>{console.log("stude", e)}
  })

  // console.log(this.studentDetails)
}




}






