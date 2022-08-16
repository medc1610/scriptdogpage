import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenurComponent } from './menur.component';

describe('MenurComponent', () => {
  let component: MenurComponent;
  let fixture: ComponentFixture<MenurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
