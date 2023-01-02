import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValuesListComponent } from './components/values-list/values-list.component';
import { ValueDetailsComponent } from './components/value-details/value-details.component';
import { AddValueComponent } from './components/add-value/add-value.component';

const routes: Routes = [
  { path: '', redirectTo: 'values', pathMatch: 'full' },
    { path: 'values', component: ValuesListComponent },
    { path: 'values/:id', component: ValueDetailsComponent },
    { path: 'add', component: AddValueComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
