import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RRForumItemDetailsComponent } from './rr-forum-item-details.component';

describe('RRForumItemDetailsComponent', () => {
  let component: RRForumItemDetailsComponent;
  let fixture: ComponentFixture<RRForumItemDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RRForumItemDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RRForumItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
