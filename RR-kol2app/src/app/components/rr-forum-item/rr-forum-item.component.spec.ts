import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RRForumItemComponent } from './rr-forum-item.component';

describe('RRForumItemComponent', () => {
  let component: RRForumItemComponent;
  let fixture: ComponentFixture<RRForumItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RRForumItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RRForumItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
