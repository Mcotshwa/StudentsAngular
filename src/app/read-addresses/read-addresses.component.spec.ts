import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadAddressesComponent } from './read-addresses.component';

describe('ReadAddressesComponent', () => {
  let component: ReadAddressesComponent;
  let fixture: ComponentFixture<ReadAddressesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadAddressesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadAddressesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
