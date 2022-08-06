import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductsComponent } from './admin/addproducts/addproducts.component';
import { LoginpageComponent } from './auth/loginpage/loginpage.component';
import { CartpageComponent } from './cart/cartpage/cartpage.component';
import { ItemsComponent } from './home/items/items.component';

const routes: Routes = [
  {
    component: AddproductsComponent,
    path: 'addproducts'
  },
  {
    component: CartpageComponent,
    path: 'cart'
  },
  {
    component: ItemsComponent,
    path: "home"
  },
  {
    component: LoginpageComponent,
    path: ""
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
