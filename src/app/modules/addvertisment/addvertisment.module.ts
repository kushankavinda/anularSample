import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullAddvertismentComponent } from './full-addvertisment/full-addvertisment.component';
import { CardModule } from 'primeng/card';
import { AddvertismentRoutingModule } from './addvertisment-routing.module';
import { ButtonModule } from 'primeng/button';
import { FullAddvertismentsService } from './full-addvertisment/full-addvertisments.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [FullAddvertismentComponent],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    HttpClientModule,
    AddvertismentRoutingModule
  ],
  providers: [FullAddvertismentsService]
})
export class AddvertismentModule { }
