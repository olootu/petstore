import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  createReducer,
  on
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { Pet } from '../models/pet';
import { loadProductsSuccess, loadProductsFailure } from './product.actions';

export const productStateFeatureKey = 'productState';

export interface ProductState {
  pets: Pet[];
  error: any;
}

export const initialState: ProductState = {
  pets: [],
  error: undefined
};

export const reducers = createReducer(
  initialState,
  on(loadProductsSuccess, (state, action) => {
    return {
      pets: action.pets
    };
  }),
  on(loadProductsFailure, (state, action) => {
    return {
      pets: state.pets,
      error: action.error
    };
  })
);

export const selectProductsFeature = createFeatureSelector<ProductState>(
  productStateFeatureKey
);

export const selectProducts = createSelector(
  selectProductsFeature,
  (state: ProductState) => state.pets
);


export const metaReducers: MetaReducer<ProductState>[] = !environment.production ? [] : [];
