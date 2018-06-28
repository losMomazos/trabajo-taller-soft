import { Component, OnInit } from '@angular/core';
import {Gpu} from '../../Gpu';
import {ActivatedRoute } from '@angular/router';
import {GpuService} from '../../services/gpu.service';
@Component({
  selector: 'app-compare-gpu',
  templateUrl: './compare-gpu.component.html',
  styleUrls: ['./compare-gpu.component.css']
})
export class CompareGpuComponent implements OnInit {
  gpu1:Gpu;
  gpusForCompare:Gpu[];
  gpuForComparison:Gpu;
  constructor(private _route:ActivatedRoute,private _gpuService:GpuService) {
    this._route.params.subscribe(params=>{
      this._gpuService.getDetails(params['id'])
      .subscribe(gpu=>this.gpu1 =  gpu);
      this._gpuService.getGpus()
      .subscribe(gpus=>this.gpusForCompare =  gpus);
    });
   }

  ngOnInit() {
  }

  searchGpu($event){
    this.gpuForComparison = this.gpusForCompare.find((gpu)=>{
      return gpu.name==$event.target.value;
    })
  }

}
