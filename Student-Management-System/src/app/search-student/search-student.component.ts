import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Student } from './student';
import { StudentService } from '../student.service';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

@Component({
  selector: 'app-search-student',
  templateUrl: './search-student.component.html',
  styleUrls: ['./search-student.component.css']
})

export class SearchStudentComponent implements OnInit{
  foundUsers$!: Observable<Student[]>;
  private searchTerms = new Subject<string>();

  constructor(private studentServ: StudentService){}

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.foundUsers$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.studentServ.searchHeroes(term)),
    );
  }

}

