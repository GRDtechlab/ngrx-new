import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventdetComponent } from './eventdet.component';

describe('EventdetComponent', () => {
  let component: EventdetComponent;
  let fixture: ComponentFixture<EventdetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventdetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventdetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
