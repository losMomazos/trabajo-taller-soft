import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailcpuComponent } from './detailcpu.component';

describe('DetailcpuComponent', () => {
  let component: DetailcpuComponent;
  let fixture: ComponentFixture<DetailcpuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailcpuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailcpuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
