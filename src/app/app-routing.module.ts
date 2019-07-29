import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {Defines} from '../codes/defines';

const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'home', loadChildren: './home/home.module#HomePageModule'},
    {path: 'login', loadChildren: './login/login.module#LoginModule'},
    {path: Defines.routeProducts, loadChildren: './products/products.module#ProductsPageModule'},
    {path: 'basket', loadChildren: './basket/basket.module#BasketPageModule'},
    {path: 'config', loadChildren: './config/config.module#ConfigPageModule'},
    {path: 'newuser', loadChildren: './newuser/newuser.module#NewuserPageModule'},
    {path: 'list', loadChildren: './list/list.module#ListPageModule'},
    {path: 'products', loadChildren: './products/products.module#ProductsPageModule'},
    {path: 'basket', loadChildren: './basket/basket.module#BasketPageModule'},
    {path: 'config', loadChildren: './config/config.module#ConfigPageModule'},
    {path: 'newuser', loadChildren: './newuser/newuser.module#NewuserPageModule'},
    {path: 'remember-password', loadChildren: './remember-password/remember-password.module#RememberPasswordPageModule'},
  { path: 'orders', loadChildren: './orders/orders.module#OrdersPageModule' },
  { path: Defines.routeBasketResult, loadChildren: './basket-result/basket-result.module#BasketResultPageModule' },


];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
