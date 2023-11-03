import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeeStartComponent } from './recipee-start.component';

describe('RecipeeStartComponent', () => {
  let component: RecipeeStartComponent;
  let fixture: ComponentFixture<RecipeeStartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecipeeStartComponent]
    });
    fixture = TestBed.createComponent(RecipeeStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
