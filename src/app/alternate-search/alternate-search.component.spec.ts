import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlternateSearchComponent } from './alternate-search.component';

describe('AlternateSearchComponent', () => {
  let component: AlternateSearchComponent;
  let fixture: ComponentFixture<AlternateSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlternateSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlternateSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
