import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {JobsService} from './jobs.service';
import {JobsModel} from '../models/jobs.model';
import * as moment from 'jalali-moment';
import {MatDatepickerInputEvent} from '@angular/material';
import {Person} from '../models/person.model';
import {ChoiceModel} from '../models/ChoiceModel';

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

  jsonDate = '2018-01-08T20:21:29.4674496';
  birth_date: string;
  jobs: JobsModel[] = [];

  constructor(private jobsService: JobsService, private builder: FormBuilder) {
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
  }

  onInput(event: MatDatepickerInputEvent<moment.Moment>) {
    console.log('OnInput: ', event.value);
  }

  onChange(event: MatDatepickerInputEvent<moment.Moment>) {
    this.birth_date = moment(event.value).format('jYYYY/jMM/jDD');
    console.log(this.birth_date);
  }
}

//
// onSubmit(event: any) {
//   this.valuses = event.target.value;
//   console.log(this.valuses);
// }
// getCheckboxes() {
//   console.log(this.jobs.filter(x => x.checked === true).map(x => x.name));
// }
//   onSubmit() {
//     console.log(this.selectedJobs);
//   }
//   onChange(job: JobsListModel) {
//     this.selectedJobs.push(job);
//   }
// }
