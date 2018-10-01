import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitorContentComponent } from './competitor-content.component';

describe('CompetitorContentComponent', () => {
  let component: CompetitorContentComponent;
  let fixture: ComponentFixture<CompetitorContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetitorContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitorContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
