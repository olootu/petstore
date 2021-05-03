import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './pets-routing.module';
import { PetService } from './services/pet.service';
import { DetailsComponent } from './components/pet-details/details.component';
import { ProductAddComponent } from './components/pet-add/pet-add.component';
import { ProductEditComponent } from './components/pet-edit/pet-edit.component';
import { StoreModule } from '@ngrx/store';
import * as fromProductState from './store';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './store/product.effects';
import { DetailModalComponent } from './components/detail-modal/detail-modal.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    DetailsComponent,
    ProductAddComponent,
    ProductEditComponent,
    DetailModalComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    StoreModule.forFeature(fromProductState.productStateFeatureKey,
      fromProductState.reducers, { metaReducers: fromProductState.metaReducers }),
    EffectsModule.forFeature([ProductEffects])],
  providers: [PetService],
  exports: [
    DetailsComponent,
    ProductAddComponent,
    ProductEditComponent,
    ReactiveFormsModule,
    DetailModalComponent
  ],
  entryComponents: [DetailModalComponent]
})
export class PetsModule { }
