import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {
student?: any;
  constructor(private serviceStudents : StudentService, private route : ActivatedRoute){}
  
  editable = true;
  
  ngOnInit(): void {
    this.getOne();
  }

  isEditable(){

      this.editable = false
 
  }

  studentNumber= ""
    firstName=""
    lastName=""
    email=""
    phoneNumber=""
    address=""
    dateOfBirth=""
    course=""
    
    studentDetails = {
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

post() {
  this.serviceStudents.post(this.studentDetails).subscribe({
    next: (data)=> {
      console.log(data);
      this.mClear();

    },
    error: (e)=>{console.log("stude", e)}
  })
}

  getOne(){
    const id = this.route.snapshot.params[('id')]
    this.serviceStudents.getStudent(id).subscribe({
      next: (data)=>{
        this.student = data
        this.studentDetails = this.student[0]
        console.log(data)
      },
      error: (e)=> console.log(e)
    })
  }

}








