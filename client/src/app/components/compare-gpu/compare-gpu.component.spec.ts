import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareGpuComponent } from './compare-gpu.component';

describe('CompareGpuComponent', () => {
  let component: CompareGpuComponent;
  let fixture: ComponentFixture<CompareGpuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompareGpuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareGpuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
