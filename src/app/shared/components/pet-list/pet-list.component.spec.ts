import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AngMaterialModule } from '../../ang-material/ang-material.module';

import { PetListComponent } from './pet-list.component';

describe('PetListComponent', () => {
  let component: PetListComponent;
  let fixture: ComponentFixture<PetListComponent>;
  let spyDelete;
  let spyOpenDialog;
  let spyOnInit;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetListComponent ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        AngMaterialModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetListComponent);
    component = fixture.componentInstance;
    spyDelete = spyOn(component, 'deleteProduct').and.callThrough();
    spyOpenDialog = spyOn(component, 'openDialog').and.callThrough();
    spyOnInit = spyOn(component, 'ngOnInit').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should delete product', () => {
    component.deleteProduct(1);
    expect(spyDelete).toHaveBeenCalled();
  });

  it('should open dialog', () => {
    component.openDialog(1);
    expect(spyOpenDialog).toHaveBeenCalled();
    expect(spyOnInit).toHaveBeenCalled();
  });
});
