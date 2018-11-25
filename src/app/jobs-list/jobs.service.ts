import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {JobsModel} from '../models/jobs.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobsService {


  constructor(private http: HttpClient) {
  }

  getJobs(): Observable<JobsModel[]> {
    return this.http.get<JobsModel[]>('https://koodaktv.herokuapp.com/api/jobs/');
  }
}
