import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { PetService } from '../services/pet.service';
import * as fromPetActions from './product.actions';
import { of } from 'rxjs';



@Injectable()
export class ProductEffects {



  constructor(private actions$: Actions, private petService: PetService) { }

  loadProducts$ = createEffect(() => this.actions$.pipe(
    ofType(fromPetActions.loadProducts),
    mergeMap(() => this.petService.getProducts()
      .pipe(
        map(pets => fromPetActions.loadProductsSuccess({ pets })),
        catchError(error => of(fromPetActions.loadProductsFailure({ error }))
        )
      ))
  )
  );

}
