import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProductsPage } from './products.page';
import {ProductDlgComponent} from './product-dlg.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [ProductsPage, ProductDlgComponent],
  entryComponents:[ProductDlgComponent]
})
export class ProductsPageModule {}
