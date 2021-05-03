import { createAction, props } from '@ngrx/store';
import { Pet } from '../models/pet';

export const loadProducts = createAction(
  '[Pets List Component] Load Pets'
);

export const loadProductsSuccess = createAction(
  '[Pet Effect] Load Pet Success',
  props<{ pets: Pet[] }>()
);

export const loadProductsFailure = createAction(
  '[Pet Effect] Load Pets Failure',
  props<{ error: any }>()
);
