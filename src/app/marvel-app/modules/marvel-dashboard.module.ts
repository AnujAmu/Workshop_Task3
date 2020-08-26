import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarvelDashboardComponent } from '../pages/marvel-dashboard.component';
import { MaterialModule } from 'src/app/material/material.module';
import { FacesContainerComponent } from '../components/faces-container/faces-container.component';
import { CameraViewComponent } from '../components/camera-view/camera-view.component';



@NgModule({
  declarations: [
    MarvelDashboardComponent,
    FacesContainerComponent,
    CameraViewComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    MarvelDashboardComponent,
    FacesContainerComponent,
    CameraViewComponent
  ]
})
export class MarvelDashboardModule { }
