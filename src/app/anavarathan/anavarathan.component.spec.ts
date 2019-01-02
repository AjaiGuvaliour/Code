import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnavarathanComponent } from './anavarathan.component';

describe('AnavarathanComponent', () => {
  let component: AnavarathanComponent;
  let fixture: ComponentFixture<AnavarathanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnavarathanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnavarathanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
