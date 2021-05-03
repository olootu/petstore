import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './components/pet-details/details.component';
import { ProductAddComponent } from './components/pet-add/pet-add.component';
import { ProductEditComponent } from './components/pet-edit/pet-edit.component';

const routes: Routes = [
  { path: 'details/:id', component: DetailsComponent },
  { path: 'add', component: ProductAddComponent },
  { path: 'edit/:id', component: ProductEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {}
