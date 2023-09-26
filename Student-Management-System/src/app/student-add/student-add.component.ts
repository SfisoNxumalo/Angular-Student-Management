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
      studentNumber:  this.mGenerateStudentNumber(),
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
      studentNumber:this.mGenerateStudentNumber(),
      firstName: "",
      lastName:"",
      email:"",
      phoneNumber: "",
      address: "",
      course: "",
      dateOfBirth:""
    }
  }

  mGenerateStudentNumber():string {

    return String(Math.floor(Math.random() * 5000000) + 1000000);

  }

  StuEmpty = false;
  couEmpty = false;
  addEmpty = false;
  cellEmpty = false;
  emaEmpty = false;
  dobEmpty = false;
  lnamEmpty = false;
  namEmpty = false;


mCheckValues(): boolean{
  this.StuEmpty = false;
  this.couEmpty = false;
  this.addEmpty = false;
  this.cellEmpty = false;
  this.emaEmpty = false;
  this.dobEmpty = false;
  this.lnamEmpty = false;
  this.namEmpty = false;
  
if(!this.studentDetails.studentNumber){
  this.StuEmpty=true;
  return false}
else if(!this.studentDetails.firstName){this.namEmpty = true;return false}
else if(!this.studentDetails.lastName){this.lnamEmpty = true; return false}
else if(!this.studentDetails. dateOfBirth){this.dobEmpty = true;return false}
else if(!this.studentDetails.email){this.emaEmpty = true;return false}
else if(!this.studentDetails.phoneNumber){this.cellEmpty = true;return false}
else if(!this.studentDetails.address){this.addEmpty = true;return false}
else if(!this.studentDetails.course){this.couEmpty = true;return false}

else{
return true;
}

}

show = false;

post(){

  if(this.mCheckValues()){
    this.serviceStudents.post(this.studentDetails).subscribe({
    next: (data)=> {
      console.log(data);
      this.mClear();
      this.show = true;

    },
    error: (e)=>{console.log("stude", e)}
  })
  }
  

  // console.log(this.studentDetails)
}




}






