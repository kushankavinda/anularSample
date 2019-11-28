import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostYourAddComponent } from './post-your-add/post-your-add.component';
import { PostAddvertismentRoutingModule } from './postAddvertisment-routing.module';
import {InputTextModule} from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {SelectButtonModule} from 'primeng/selectbutton';
import { PostAddServiceService } from './post-add-service.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [PostYourAddComponent],
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    DropdownModule,
    ButtonModule,
    SelectButtonModule,
    HttpClientModule,
    PostAddvertismentRoutingModule
  ],
  providers: [PostAddServiceService]
})
export class PostAddModule { }
