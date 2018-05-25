import { Component, OnInit } from '@angular/core';
import {Gpu } from '../../Gpu';
import {GpuService} from '../../services/gpu.service';
@Component({
  selector: 'app-gpu',
  templateUrl: './gpu.component.html',
  styleUrls: ['./gpu.component.css']
})
export class GpuComponent implements OnInit {
  gpus:Gpu[];
  constructor(private gpuService:GpuService) {
    this.gpuService.getGpus()
    .subscribe(gpus=>{
      this.gpus = gpus;
    })
   }

  ngOnInit() {
  }

}
