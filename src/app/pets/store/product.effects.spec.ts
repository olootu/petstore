import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ProductEffects } from './product.effects';

describe('ProductEffects', () => {
  const actions$: Observable<any> = null;
  let effects: ProductEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProductEffects,
        provideMockActions(() => actions$)
      ],
      imports: [
        HttpClientTestingModule
      ]
    });

    effects = TestBed.get(ProductEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
