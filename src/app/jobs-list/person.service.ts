import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Person} from '../models/person.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class PersonService {
  constructor(private http: HttpClient) {

  }

  postPerson(person: Person): Observable<Person> {
    return this.http.post<Person>(
      'https://koodaktv.herokuapp.com/api/persons/', person);
  }
}
