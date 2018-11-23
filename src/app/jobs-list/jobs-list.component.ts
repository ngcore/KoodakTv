import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {JobsService} from './jobs.service';
import {SignupModel} from '../models/signup.model';
import {HawzahEduModel} from '../models/hawzah-edu.model';
import {UniversityEduModel} from '../models/university-edu.model';
import {ProficiencyModel} from '../models/proficiency.model';
import {JobsModel} from '../models/jobs.model';
import {ProductsModel} from '../models/products.model';
import * as moment from 'jalali-moment';
import {MatDatepickerInputEvent} from '@angular/material';

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.css']
})
export class JobsListComponent implements OnInit {
  model: SignupModel = new SignupModel();
  hawzah: HawzahEduModel[] = [
    {hawzah_edu: 'NN', viewValue: 'هیچکدام'},
    {hawzah_edu: 'LVL1', viewValue: 'سطح یک'},
    {hawzah_edu: 'LVL2', viewValue: 'سطح دو'},
    {hawzah_edu: 'LVL3', viewValue: 'سطح سه'},
    {hawzah_edu: 'LVL4', viewValue: 'سطح چهار'}
  ];
  university: UniversityEduModel[] = [
    {uni_edu: 'NN', viewValue: 'هیچکدام'},
    {uni_edu: 'DPL', viewValue: 'دیپلم'},
    {uni_edu: 'KRD', viewValue: 'کاردانی'},
    {uni_edu: 'KRS', viewValue: 'کارشناسی'},
    {uni_edu: 'KRSA', viewValue: 'کارشناسی ارشد'},
    {uni_edu: 'DCT', viewValue: 'دکتری'}
  ];

  first_name: SignupModel;
  last_name: SignupModel;
  phone: SignupModel;
  gender: SignupModel;
  website: SignupModel;
  email: SignupModel;
  uni_edu_field: SignupModel;
  edu_descriptions: SignupModel;
  other_jobs_desc: SignupModel;
  product_other: SignupModel;
  resume: SignupModel;
  current_act: SignupModel;
  compilations: SignupModel;
  projects: SignupModel;
  social_networks: SignupModel;
  honors_rewards: SignupModel;
  innovations: SignupModel;
  courses_passed: SignupModel;
  courses_teaching: SignupModel;
  ideas: SignupModel;
  suggestions: SignupModel;
  jsonDate = '2018-01-08T20:21:29.4674496';
  // birth_date = this.jsonDate;
  birth_date: string;
  jobs: JobsModel[] = [];

  image_file: SignupModel;
  proficiencyList: ProficiencyModel[] = [
    {name: 'khordsal_proficiency ', value: true, title: 'خردسال'},
    {name: 'koodak_proficiency  ', value: true, title: 'کودک'},
    {name: 'nojavan_proficiency  ', value: true, title: 'نوجوان'},
  ];
  productsList: ProductsModel[] = [
    {name: 'product_tv ', value: true, title: 'تلویزیونی'},
    {name: 'product_cinema  ', value: true, title: 'سینمایی'},
    {name: 'product_short  ', value: true, title: 'کار کوتاه'},
    {name: 'product_animation  ', value: true, title: 'انیمیشن'},
    {name: 'product_software  ', value: true, title: 'نرم افزار'},
    {name: 'product_game  ', value: true, title: 'بازی'},
    {name: 'product_other  ', value: true, title: 'سایر'},
  ];

  checked1: SignupModel[] = [];
  checked2: SignupModel[] = [];
  checked3: SignupModel[] = [];

  constructor(private jobsService: JobsService, private builder: FormBuilder) {

    this.showConfig();
  }

// log() {
//     this.proficiencyList.;
// }
  ngOnInit() {
  }

  showConfig() {
    this.jobsService.getConfig().subscribe(data => {
      this.jobs = data;
    });
  }

  onFileSelected(event) {
    this.image_file = event.target.files[0];
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
