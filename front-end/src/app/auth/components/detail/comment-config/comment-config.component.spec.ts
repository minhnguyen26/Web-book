import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentConfigComponent } from './comment-config.component';

describe('CommentConfigComponent', () => {
  let component: CommentConfigComponent;
  let fixture: ComponentFixture<CommentConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
