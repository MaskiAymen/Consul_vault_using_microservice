import { Routes } from '@angular/router';
import {ProductsComponent} from "./products/products.component";
import {CustomersComponent} from "./customers/customers.component";
import {OrdersComponent} from "./orders/orders.component";
import {OrderDetailsComponent} from "./order-details/order-details.component";
import {HomeComponent} from "./home/home.component";
import {ContactComponent} from "./contact/contact.component";



export const routes: Routes = [
  {
    path:"home",component:HomeComponent
  },
  {
    path:"products", component:ProductsComponent
  },
  {
    path:"customers", component:CustomersComponent
  },
  {
    path:"orders/:customerId", component:OrdersComponent
  },
  {
    path : "order-details/:orderId", component : OrderDetailsComponent
  },
  {
    path : "contact", component : ContactComponent
  },

];
