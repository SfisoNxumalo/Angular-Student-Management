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

mCheckValues(){
if(!this.studentDetails.studentNumber){return false}
else if(!this.studentDetails.firstName){return false}
else if(!this.studentDetails.lastName){return false}
else if(!this.studentDetails.email){return false}
else if(!this.studentDetails.phoneNumber){return false}
else if(!this.studentDetails.address){return false}
else if(!this.studentDetails.course){return false}
else if(!this.studentDetails. dateOfBirth){return false}
else{
return true;
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






