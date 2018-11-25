export class Person {

  constructor() {
    this.khordsal_proficiency = false;
    this.koodak_proficiency = false;
    this.nojavan_proficiency = false;
    //
    this.product_tv = false;
    this.product_cinema = false;
    this.product_short = false;
    this.product_animation = false;
    this.product_software = false;
    this.product_game = false;
  }

  public id: number;
  public first_name: string;
  public last_name: string;
  public birth_date: Date;
  public phone: number;
  public gender: boolean;
  public website: string;
  public email: string;
  public imageFile: File;
  public hawzah_edu: string;
  public uni_edu: string;
  public uni_edu_field: string;
  public edu_descriptions: string;
  public khordsal_proficiency: boolean;
  public koodak_proficiency: boolean;
  public nojavan_proficiency: boolean;
  public other_jobs_desc: string;
  public product_tv: boolean;
  public product_cinema: boolean;
  public product_short: boolean;
  public product_animation: boolean;
  public product_software: boolean;
  public product_game: boolean;
  public product_other: string;
  public resume: string;
  public current_act: string;
  public compilations: string;
  public projects: string;
  public social_networks: string;
  public honors_rewards: string;
  public innovations: string;
  public courses_passed: string;
  public courses_teaching: string;
  public ideas: string;
  public suggestions: string;
}
