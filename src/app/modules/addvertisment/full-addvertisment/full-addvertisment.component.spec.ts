import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullAddvertismentComponent } from './full-addvertisment.component';

describe('FullAddvertismentComponent', () => {
  let component: FullAddvertismentComponent;
  let fixture: ComponentFixture<FullAddvertismentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullAddvertismentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullAddvertismentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
