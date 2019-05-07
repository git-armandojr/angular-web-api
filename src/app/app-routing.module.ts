import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductEditComponent } from './product-edit/product-edit.component';

const routes: Routes = [
  { path: 'products', component: ProductsComponent, data: { title: 'Lista de produtos' } },
  { path: 'product-detail/:id', component: ProductDetailComponent, data: { title: 'Detalhes do produto' } },
  { path: 'product-add', component: ProductAddComponent, data: { title: 'Novo produto' } },
  { path: 'product-edit', component: ProductEditComponent, data: { title: 'Editar produto' } },
  { path: '', redirectTo: '/products', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
