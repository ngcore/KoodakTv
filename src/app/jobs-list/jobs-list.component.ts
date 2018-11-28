import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {JobsService} from './jobs.service';
import {JobsModel} from '../models/jobs.model';
import * as moment from 'jalali-moment';
import {MatDatepickerInputEvent} from '@angular/material';
import {Person} from '../models/person.model';
import {ChoiceModel} from '../models/ChoiceModel';
import {PersonService} from './person.service';

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.css']
})

export class JobsListComponent implements OnInit {
  model: Person = new Person();

  hawzah: ChoiceModel[] = [
    {value: 'NN', title: 'هیچکدام'},
    {value: 'LVL1', title: 'سطح یک'},
    {value: 'LVL2', title: 'سطح دو'},
    {value: 'LVL3', title: 'سطح سه'},
    {value: 'LVL4', title: 'سطح چهار'}
  ];
  university: ChoiceModel[] = [
    {value: 'NN', title: 'هیچکدام'},
    {value: 'DPL', title: 'دیپلم'},
    {value: 'KRD', title: 'کاردانی'},
    {value: 'KRS', title: 'کارشناسی'},
    {value: 'KRSA', title: 'کارشناسی ارشد'},
    {value: 'DCT', title: 'دکتری'}
  ];

  jobs: JobsModel[] = [];

  constructor(private jobsService: JobsService, private personService: PersonService) {
    // Get jobs
    this.jobsService.getJobs().subscribe(jobs => {
      this.jobs = jobs;
    });
  }

  ngOnInit() {
  }

  onFileSelected(event) {
    this.model.imageFile = event.target.files[0];
  }

  are(value) {
    console.log(value);
    this.personService.postPerson(value).subscribe(person => {
      console.log(person);
      alert('Success');
    }, error => {
      console.log(error);
      alert('Failure');
    });
  }

  onInput(event: MatDatepickerInputEvent<moment.Moment>) {
    this.model.birth_date = moment(event.value.toDate()).format('YYYY-MM-DD');
  }

  onChange(event: MatDatepickerInputEvent<moment.Moment>) {
    this.model.birth_date = moment(event.value.toDate()).format('YYYY-MM-DD');
  }
}
