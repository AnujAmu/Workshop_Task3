import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvelDashboardComponent } from './marvel-dashboard.component';

describe('MarvelDashboardComponent', () => {
  let component: MarvelDashboardComponent;
  let fixture: ComponentFixture<MarvelDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarvelDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarvelDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
