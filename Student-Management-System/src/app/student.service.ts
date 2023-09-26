import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Student } from './search-student/student';
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

  getStudent(id: any){
    return this.http.get(student_api+"getStudents/"+id)
  }
  updateStudents(data: any, id: any){
    return this.http.put(student_api+"updateStudents/"+id, data)
  }

  getAllStudent(){
    
    return this.http.get<any[]>(student_api+"getStudents")
  }

  deleteOne (id: string){

    return this.http.delete(student_api+"deleteOne/"+id)
  }

  searchHeroes(term: string): Observable<Student[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Student[]>(student_api+"searchStudents/"+term).pipe(
      tap(x => x.length ?
        console.log(`found heroes matching "${term}"`) :
        console.log(`no heroes matching "${term}"`)),
      catchError(this.handleError<Student[]>('searchHeroes', []))
    );

}

private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    console.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

}








