import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonListComponent } from './person-list/person-list.component';
import { CreatePersonComponent } from './create-person/create-person.component';


const routes: Routes = [
  { path: '', redirectTo: 'person', pathMatch: 'full' },
  { path: 'persons', component: PersonListComponent },
  { path: 'add-person', component: CreatePersonComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
