import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {
student: any 
editable = true;

  constructor(private serviceStudents : StudentService, private route : ActivatedRoute){}
  
  // editable = true;
  
  ngOnInit(): void {
    this.getOne()
  }

  isEditable(){

      this.editable = false
 
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

      studentNumber: student.studentNumber,
      firstName: student.firstName,
      lastName: student.lastName,
      email: student.email,
      phoneNumber: student.phoneNumber,
      address: student.address,
      dateOfBirth: student.dateOfBirth,
      course: student.course
      
}








