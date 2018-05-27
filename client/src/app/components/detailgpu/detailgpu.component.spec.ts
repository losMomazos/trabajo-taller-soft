import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailgpuComponent } from './detailgpu.component';

describe('DetailgpuComponent', () => {
  let component: DetailgpuComponent;
  let fixture: ComponentFixture<DetailgpuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailgpuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailgpuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
