import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = '';
  surname = '';
  age: number = null;
  summary = '';

  isDisable() {
    return this.name === '' || this.surname === '' || this.age === null;
  }

  print() {
    this.summary = `${this.name} - ${this.surname} - ${this.age}`;
    this.name = '';
    this.surname = '';
    this.age = null;
  }
}
