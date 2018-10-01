import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnersContentComponent } from './partners-content.component';

describe('PartnersContentComponent', () => {
  let component: PartnersContentComponent;
  let fixture: ComponentFixture<PartnersContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartnersContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnersContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
