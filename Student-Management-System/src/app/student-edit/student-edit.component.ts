import { Component } from '@angular/core';
import { StudentService } from '../student.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {

  constructor(private serviceStudents : StudentService){}

  studentDetails = {

  constructor(
    private studentService: StudentService, // Use correct service name
    private route: ActivatedRoute // Inject ActivatedRoute
  ) {}

  ngOnInit() {
    // Assuming 'id' comes from the route parameter
    // this.studentServ,this.id = this.route.snapshot.paramMap.get("id");
    this.id =this.studentService("id")
    this.getStudent();
  }

  getStudent() {
    this.studentService.getStudent(this.student,this.id).subscribe({
      next: (data) => {
        this.student = data;
        console.log(this.student);
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  updateStudents() {
    this.studentService.updateStudents(this.student, this.id).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (error) => {
        console.error(error);
      }
    });
  }
}



// updateStudent(){
//   this.serviceStudents.put(this.studentDetails).subscribe({

//   });

// onSave(){

\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
  
// console.log(this.studentDetails)
// this.student.push(this.studentDetails)
// // console.log(this.student)

// }
}
