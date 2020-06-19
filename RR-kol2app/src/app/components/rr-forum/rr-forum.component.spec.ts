import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RRForumComponent } from './rr-forum.component';

describe('RRForumComponent', () => {
  let component: RRForumComponent;
  let fixture: ComponentFixture<RRForumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RRForumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RRForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
