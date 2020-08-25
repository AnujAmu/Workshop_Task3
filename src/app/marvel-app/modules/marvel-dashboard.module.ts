import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarvelDashboardComponent } from '../pages/marvel-dashboard.component';
import { MaterialModule } from 'src/app/material/material.module';



@NgModule({
  declarations: [
    MarvelDashboardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    MarvelDashboardComponent
  ]
})
export class MarvelDashboardModule { }
