import { Component, OnInit } from '@angular/core';
import {GpuService} from '../../services/gpu.service';
import {ActivatedRoute} from '@angular/router';
import { Gpu } from '../../Gpu';
import{Motherboard}from '../../Motherboard'
@Component({
  selector: 'app-detailgpu',
  templateUrl: './detailgpu.component.html',
  styleUrls: ['./detailgpu.component.css']
})
export class DetailgpuComponent implements OnInit {
  gpu:Gpu;
  motherCompatibles:Motherboard[];
  constructor(private ruta:ActivatedRoute,private gpuService:GpuService) {

   }

  ngOnInit() {
    const id = this.ruta.snapshot.paramMap.get('id');
    this.gpuService.getDetails(id).subscribe(gpu=>{
      this.gpu = gpu;
    })
    this.gpuService.getMother(id).subscribe(mothers=>{
      this.motherCompatibles =  mothers;
    })
  }

}
