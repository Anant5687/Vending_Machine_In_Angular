import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddproductsComponent } from './addproducts/addproducts.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddproductsComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    AddproductsComponent
  ]
})
export class AdminModule { }
