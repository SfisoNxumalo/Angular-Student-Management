import { Component } from '@angular/core';
import { SearchStudentComponent } from '../search-student/search-student.component';
import { StudentService } from '../student.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-view-students',
  templateUrl: './view-students.component.html',
  styleUrls: ['./view-students.component.css']
})

export class ViewStudentsComponent {
  students: any[] =[];
  ngOnInit(): void{
    this.getAllStudent()
  }


  constructor(private studentService: StudentService, private route: ActivatedRoute){}

 
  getTableCount(){
    // console.log(table.rows.length)
  }

  getAllStudent(){
    this.studentService.getAllStudent().subscribe({
      next: (data)=>{(
        this.students = data.reverse()
        )},
      error: (e)=> console.log(e)
    })
  }
}




