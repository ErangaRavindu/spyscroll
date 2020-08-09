import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {SearchPageComponent} from './pages/search-page/search-page.component';
import {ProductPageComponent} from './pages/product-page/product-page.component';
import {LoginComponent} from './pages/user/login/login.component';
import {CheckoutComponent} from './pages/checkout/checkout.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'search',
    component: SearchPageComponent,
  },
  {
    path: 'product',
    component: ProductPageComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
  },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
