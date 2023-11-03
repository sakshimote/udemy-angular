import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeeEditComponent } from './recipee-edit.component';

describe('RecipeeEditComponent', () => {
  let component: RecipeeEditComponent;
  let fixture: ComponentFixture<RecipeeEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecipeeEditComponent]
    });
    fixture = TestBed.createComponent(RecipeeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
