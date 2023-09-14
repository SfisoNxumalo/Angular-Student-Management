import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const student_api = ""
 

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(

    private http: HttpClient

  ) { }

  getStudent(data: any, id: any){
    return this.http.get(student_api+id)
  }
  updateStudents(data: any, id: any){
    return this.http.put(student_api+id, data)
  }

  getAllStudent(){
    
    return this.http.get(student_api, httpOptions)
  }
}
createStudent(data: any){

  return this.http.post(student_api, httpOptions)
}





deleteStudent(studentid: any, id: any){
  return this.http.delete(student_api + `${studentid}/${id}`, httpOptions)
}







@