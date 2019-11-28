import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'advertisment', loadChildren: '../addvertisment/addvertisment.module#AddvertismentModule' },
    { path: 'post-advertisment', loadChildren: '../post-add/post-add.module#PostAddModule' },
    { path: 'profile', loadChildren: '../profile/profile.module#ProfileModule' },
    { path: 'follow' ,  loadChildren: '../addvertisment/addvertisment.module#AddvertismentModule'},
    { path: 'unfollow' ,  loadChildren: '../addvertisment/addvertisment.module#AddvertismentModule'},
    { path: '', loadChildren: '../addvertisment/addvertisment.module#AddvertismentModule'},
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
