import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // Import ActivatedRoute
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {

  student: any;
  id: string;

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











  



