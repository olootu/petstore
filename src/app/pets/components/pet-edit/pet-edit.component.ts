import { Component, OnInit } from '@angular/core';
import { PetService } from '../../services/pet.service';
import { Pet } from '../../models/pet';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-pet-edit',
  templateUrl: './pet-edit.component.html',
  styleUrls: ['./pet-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: PetService,
    private fb: FormBuilder
  ) {
    this.petFormGroup = this.fb.group({
      id: [0, Validators.required],
      name: ['', Validators.required],
      date: ['', Validators.required],
      imageUrl: ['', Validators.required],
      description: ['', Validators.required],
    });
  }
  petFormGroup: FormGroup;

  ngOnInit() {
    this.service
      .getSingleProduct(this.route.snapshot.paramMap.get('id'))
      .subscribe(pet => {
        // this.model = pet;

        this.petFormGroup.patchValue({
          id: pet.id,
          name: pet.name,
          date: pet.date,
          imageUrl: pet.imageUrl,
          description: pet.description
        });
      });
  }

  onSubmit() {
    const productObserver = {
      next: product => {
        this.router.navigate(['/home']);
      },
      error: err => console.error(err)
    };
    this.service.editProduct(this.petFormGroup.value).subscribe(productObserver);
  }
}
