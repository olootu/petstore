import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { PetListComponent } from './components/pet-list/pet-list.component';
import { AngMaterialModule } from './ang-material/ang-material.module';

@NgModule({
  declarations: [HeaderComponent, PetListComponent],
  imports: [CommonModule, RouterModule, AngMaterialModule],
  exports: [HeaderComponent, PetListComponent]
})
export class SharedModule {}
