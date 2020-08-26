import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacesContainerComponent } from './faces-container.component';

describe('FacesContainerComponent', () => {
  let component: FacesContainerComponent;
  let fixture: ComponentFixture<FacesContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacesContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
