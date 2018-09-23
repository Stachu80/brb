import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RulesMenuComponent } from './rules-menu.component';

describe('RulesMenuComponent', () => {
  let component: RulesMenuComponent;
  let fixture: ComponentFixture<RulesMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RulesMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RulesMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
