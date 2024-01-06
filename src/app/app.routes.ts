import { Routes } from '@angular/router';
import { ShopComponent } from './pages/shop/shop.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { 
    path: 'shop', component: ShopComponent,
  },
  {
    path: 'contact', component: ContactComponent,
  },
  {
    path: '**', redirectTo: 'shop', pathMatch: 'full'
  }
];
