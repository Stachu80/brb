import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForKidsContentComponent } from './for-kids-content.component';

describe('ForKidsContentComponent', () => {
  let component: ForKidsContentComponent;
  let fixture: ComponentFixture<ForKidsContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForKidsContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForKidsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
