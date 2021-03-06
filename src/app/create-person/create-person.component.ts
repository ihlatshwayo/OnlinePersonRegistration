import { Component, OnInit } from '@angular/core';
 
import { Person } from '../Person';
import { PersonService } from '../person.service';
 
@Component({
  selector: 'app-create-person',
  templateUrl: './create-person.component.html',
  styleUrls: ['./create-person.component.css']
})
export class CreatePersonComponent implements OnInit {
 
  person: Person = new Person();
  submitted = false;
 
  constructor(private personService: PersonService) { }
 
  ngOnInit() {
  }
 
  newPerson(): void {
    this.submitted = false;
    this.person = new Person();
  }
 
  save() {
    this.personService.createPerson(this.person)
      .subscribe(
        data => {
          console.log(data);
          this.submitted = true;
        },
        error => console.log(error));
    this.person = new Person();
  }
 
  onSubmit() {
    this.save();
  }
}