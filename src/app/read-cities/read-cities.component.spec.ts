import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadCitiesComponent } from './read-cities.component';

describe('ReadCitiesComponent', () => {
  let component: ReadCitiesComponent;
  let fixture: ComponentFixture<ReadCitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadCitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadCitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
