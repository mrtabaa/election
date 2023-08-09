import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAdminComponent } from './show-admin.component';

describe('ShowAdminComponent', () => {
  let component: ShowAdminComponent;
  let fixture: ComponentFixture<ShowAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
