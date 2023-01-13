import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaxosComponent } from './naxos.component';

describe('NaxosComponent', () => {
  let component: NaxosComponent;
  let fixture: ComponentFixture<NaxosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NaxosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NaxosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
