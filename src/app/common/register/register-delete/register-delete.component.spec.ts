import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterDeleteComponent } from './register-delete.component';

describe('RegisterDeleteComponent', () => {
  let component: RegisterDeleteComponent;
  let fixture: ComponentFixture<RegisterDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
