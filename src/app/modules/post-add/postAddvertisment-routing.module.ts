import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostYourAddComponent } from './post-your-add/post-your-add.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: PostYourAddComponent },
  ])],
  exports: [RouterModule]
})
export class PostAddvertismentRoutingModule { }
