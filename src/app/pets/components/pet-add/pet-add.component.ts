import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PetService } from '../../services/pet.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pet-add',
  templateUrl: './pet-add.component.html',
  styleUrls: ['./pet-add.component.scss']
})
export class ProductAddComponent implements OnInit {
  constructor(
    private productService: PetService,
    private router: Router,
    private fb: FormBuilder
    ) {}

  petFormGroup: FormGroup;
  ngOnInit() {
    this.petFormGroup = this.fb.group({
      id: [0, Validators.required],
      name: ['', Validators.required],
      date: ['', Validators.required],
      imageUrl: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  onSubmit() {
    const productObserver = {
      next: product => (
        this.router.navigate(['/home'])
      ),
      error: err => console.error(err)
    };

    this.productService.createProduct(this.petFormGroup.value).subscribe(productObserver);
  }
}
