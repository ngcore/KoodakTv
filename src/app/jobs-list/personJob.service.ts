import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PersonJob} from '../models/personJob.model';

@Injectable({
  providedIn: 'root',
})

export class PersonJobService {
  constructor(private http: HttpClient) {

  }

  postPersonJob(personJob: PersonJob): Observable<PersonJob> {
    return this.http.post<PersonJob>(
      'https://koodaktv.herokuapp.com/api/person-jobs/', personJob);
  }

  postPersonJobs(personJobs: PersonJob[]): Observable<PersonJob[]> {
    return this.http.post<PersonJob[]>(
      'https://koodaktv.herokuapp.com/api/person-jobs/', personJobs);
  }
}
