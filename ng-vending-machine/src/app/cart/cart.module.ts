import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartpageComponent } from './cartpage/cartpage.component';



@NgModule({
  declarations: [
    CartpageComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CartpageComponent
  ]
})
export class CartModule { }
