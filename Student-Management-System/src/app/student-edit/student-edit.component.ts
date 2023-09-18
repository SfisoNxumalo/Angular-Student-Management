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
    this.getOne()
  }

  isEditable(){

      this.editable = false
 
  }

  studentDetails = {

      studentNumber: this.student.studentNumber,
      firstName: this.student.firstName,
      lastName: this.student.lastName,
      email: this.student.email,
      phoneNumber: this.student.phoneNumber,
      address: this.student.address,
      dateOfBirth: this.student.dateOfBirth,
      course: this.student.course
      
}



  getOne(){
    const id = this.route.snapshot.params[('id')]
    this.serviceStudents.getStudent(id).subscribe({
      next: (data)=>{
        this.student = data
        console.log(data)
      },
      error: (e)=> console.log(e)
    })
  }

}








