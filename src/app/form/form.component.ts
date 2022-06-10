import { Component, OnInit } from '@angular/core';
import { Emp } from '../emp';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  skills = ['Java', 'Angular', 'NodeJS', 'React', 'TypeScript', 'HTML', 'CSS'];

  model = new Emp(101, 'Joseph', 100000, this.skills[0]);

  submitted = false;

  onSubmit() {
    this.submitted = true;
    console.log(this.model);
  }

  get diagnostic() {
    return JSON.stringify(this.model);
  }
  constructor() {}

  ngOnInit(): void {}
}
