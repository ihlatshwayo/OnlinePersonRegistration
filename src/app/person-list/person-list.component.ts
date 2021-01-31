import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service';
import { Person } from '../Person';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {
 
  persons: Observable<Person[]>;
 
  constructor(private customerService: PersonService) { }
 
  ngOnInit() {
    this.reloadData();
  }
 
 
  reloadData() {
    this.persons = this.customerService.getPersonsList();
  }
}
