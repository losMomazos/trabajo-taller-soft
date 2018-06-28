import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareCpuComponent } from './compare-cpu.component';

describe('CompareCpuComponent', () => {
  let component: CompareCpuComponent;
  let fixture: ComponentFixture<CompareCpuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompareCpuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareCpuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
