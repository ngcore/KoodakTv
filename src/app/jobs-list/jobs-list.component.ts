import {Component, OnInit} from '@angular/core';
import {JobService} from './jobs.service';
import {Job} from '../models/job.model';
import * as moment from 'jalali-moment';
import {MatDatepickerInputEvent} from '@angular/material';
import {Person} from '../models/person.model';
import {Choice} from '../models/choice.model';
import {PersonService} from './person.service';
import {PersonJob} from '../models/personJob.model';
import {PersonJobService} from './personJob.service';

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.css']
})

export class JobsListComponent implements OnInit {
  model: Person = new Person();

  hawzah: Choice[] = [
    {value: 'NN', title: 'هیچکدام'},
    {value: 'LVL1', title: 'سطح یک'},
    {value: 'LVL2', title: 'سطح دو'},
    {value: 'LVL3', title: 'سطح سه'},
    {value: 'LVL4', title: 'سطح چهار'}
  ];
  university: Choice[] = [
    {value: 'NN', title: 'هیچکدام'},
    {value: 'DPL', title: 'دیپلم'},
    {value: 'KRD', title: 'کاردانی'},
    {value: 'KRS', title: 'کارشناسی'},
    {value: 'KRSA', title: 'کارشناسی ارشد'},
    {value: 'DCT', title: 'دکتری'}
  ];

  jobs: Job[] = [];
  selectedJobs = [];

  constructor(private jobsService: JobService,
              private personService: PersonService,
              private personJobService: PersonJobService) {
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
      const personJobs: PersonJob[] = [];
      for (const jobId of this.selectedJobs) {
        personJobs.push(new PersonJob(person.id, jobId));
      }
      this.personJobService.postPersonJobs(personJobs).subscribe(result => {
        console.log(result);
        alert('All operations succeeded.');
      }, error => {
        console.log(error);
        alert('Failed to submit jobs.');
      });
    }, error => {
      console.log(error);
      alert('Failed to submit person info.');
    });
  }

  onInput(event: MatDatepickerInputEvent<moment.Moment>) {
    this.model.birth_date = moment(event.value.toDate()).format('YYYY-MM-DD');
  }

  onChange(event: MatDatepickerInputEvent<moment.Moment>) {
    this.model.birth_date = moment(event.value.toDate()).format('YYYY-MM-DD');
  }
}
