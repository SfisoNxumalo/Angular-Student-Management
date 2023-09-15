import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const student_api = "http://localhost:3865/students/"
 

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(

    private http: HttpClient

  ) { }
  

 post(data:any): Observable<any> {
    return this.http.post(
      student_api + "create",
      data
       

      
    );
  }
  getStudent(data: any, id: any){
    return this.http.get(student_api+id)
  }
  updateStudents(data: any, id: any){
    return this.http.put(student_api+id, data)
  }

  getAllStudent(){
    
    return this.http.get(student_api,)
  }

  deleteOne (data:any, id: any){

    return this.http.put(student_api+id, data)
  }

}








