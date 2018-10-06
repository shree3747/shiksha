import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoAndeventsComponent } from './video-andevents.component';

describe('VideoAndeventsComponent', () => {
  let component: VideoAndeventsComponent;
  let fixture: ComponentFixture<VideoAndeventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoAndeventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoAndeventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
