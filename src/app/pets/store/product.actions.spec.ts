import * as fromProduct from './product.actions';

describe('loadProducts', () => {
  it('should return an action', () => {
    expect(fromProduct.loadProducts().type).toBe('[Pets List Component] Load Pets');
  });
});
