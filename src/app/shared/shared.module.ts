import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumsComponent } from './components/breadcrums/breadcrums.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    BreadcrumsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    BreadcrumsComponent
  ]
})
export class SharedModule { }
