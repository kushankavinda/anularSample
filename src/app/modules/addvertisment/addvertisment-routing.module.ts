import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullAddvertismentComponent } from './full-addvertisment/full-addvertisment.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: FullAddvertismentComponent },
  ])],
  exports: [RouterModule]
})
export class AddvertismentRoutingModule { }
