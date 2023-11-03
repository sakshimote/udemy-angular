import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeeItemComponent } from './recipee-item.component';

describe('RecipeeItemComponent', () => {
  let component: RecipeeItemComponent;
  let fixture: ComponentFixture<RecipeeItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecipeeItemComponent]
    });
    fixture = TestBed.createComponent(RecipeeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
