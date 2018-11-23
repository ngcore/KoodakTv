import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SignupModel} from '../models/signup.model';

@Injectable({
  providedIn: 'root'
})
export class JobsService {


  constructor(private http: HttpClient) {
  }

  getConfig() {
    return this.http.get<SignupModel[]>('http://koodaktv.herokuapp.com/api/jobs/');
  }
}
