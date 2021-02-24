import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoHighlightComponent } from './video-highlight.component';

describe('VideoHighlightComponent', () => {
  let component: VideoHighlightComponent;
  let fixture: ComponentFixture<VideoHighlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoHighlightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoHighlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
