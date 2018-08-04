import { Component, OnInit } from '@angular/core';
import { GpuService} from '../../services/gpu.service';
import {CpuService} from '../../services/cpu.service';
import {MotherService} from '../../services/mother.service';
@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  todo:any[];
  constructor(private _gpuService:GpuService,private _cpuService:CpuService,private _motherService:MotherService) { 
      this._cpuService.getCpus()
      .subscribe(cpu=>{
        this.todo= cpu;
      }) 
      
      
      this._gpuService.getGpus()
      .subscribe(gpu=>{
        this.todo=this.todo.concat(gpu);
      })
      
      this._motherService.getMother()
      .subscribe(mother=>{
        this.todo=this.todo.concat(mother);
      })
  }

  ngOnInit() {
    
  }

}
