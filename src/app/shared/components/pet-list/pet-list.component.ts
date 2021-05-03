import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pet } from 'src/app/pets/models/pet';
import { PetService } from 'src/app/pets/services/pet.service';
import {MatDialog} from '@angular/material';
import { DetailModalComponent } from './../../../pets/components/detail-modal/detail-modal.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.scss']
})
export class PetListComponent implements OnInit {
  pets: Pet[] = [];

  product: Pet;

  constructor(
    private productService: PetService,
    public router: Router,
    public dialog: MatDialog,
    private service: PetService,
    ) {}

  ngOnInit() {
    this.loadProducts();
  }

  openDialog(id): void {
    if (id) {
      this.service.getSingleProduct(id)
      .subscribe(pet => {
        this.product = pet;
        const dialogRef = this.dialog.open(DetailModalComponent, {
          data: this.product
        });
      });
      }
    }

  loadProducts() {
    const productsObserver = {
      next: pets => (this.pets = pets),
      error: err => console.error(err)
    };

    this.productService.getProducts().subscribe(productsObserver);
  }

  deleteProduct(id: number) {
    const productsObserver = {
      next: () => {
        this.ngOnInit();
      },
      error: err => console.error(err)
    };
    this.productService.deleteProduct(id).subscribe(productsObserver);
  }
}
