import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostYourAddComponent } from './post-your-add.component';

describe('PostYourAddComponent', () => {
  let component: PostYourAddComponent;
  let fixture: ComponentFixture<PostYourAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostYourAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostYourAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
