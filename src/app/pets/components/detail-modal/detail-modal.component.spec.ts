import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailModalComponent } from './detail-modal.component';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

describe('DetailModalComponent', () => {
  let component: DetailModalComponent;
  let fixture: ComponentFixture<DetailModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailModalComponent ],
      providers: [
        {provide: MatDialogRef, MAT_DIALOG_DATA, useValue: {}},
        { provide: MAT_DIALOG_DATA, useValue: {} }
     ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
