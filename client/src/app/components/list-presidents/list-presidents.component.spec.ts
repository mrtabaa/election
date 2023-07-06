import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPresidentsComponent } from './list-presidents.component';

describe('ListPresidentsComponent', () => {
  let component: ListPresidentsComponent;
  let fixture: ComponentFixture<ListPresidentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPresidentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPresidentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
