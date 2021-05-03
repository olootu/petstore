import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap, map } from 'rxjs/operators';
import { PetService } from '../../services/pet.service';
import { Observable } from 'rxjs';
import { Pet } from '../../models/pet';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  product$: Observable<Pet>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: PetService
  ) {}

  ngOnInit() {
    this.product$ = this.service.getSingleProduct(
      this.route.snapshot.paramMap.get('id')
    );
  }

  deleteProduct(id: number) {
    const productsObserver = {
      next: () => {
        this.router.navigate(['/pets/list']);
      },
      error: err => console.error(err)
    };
    this.service.deleteProduct(id).subscribe(productsObserver);
  }
}
