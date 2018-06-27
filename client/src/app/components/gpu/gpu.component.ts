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
  gpusFilter:Gpu[];
  params:any=[];
  actualParams:string="";
  actualMemory:string="";
  actualFab:string="";
  constructor(private gpuService:GpuService) {
    this.gpuService.getGpus()
    .subscribe(gpus=>{
      this.gpusFilter = gpus;
      this.gpus = this.gpusFilter;
    })
   }

  ngOnInit() {
  }
  search(param){
    this.gpusFilter = this.gpus.filter(gpu=>{
      return gpu.name.toLocaleLowerCase().includes(param.toLocaleLowerCase());
    })
  }
  select($event){
    if($event.target.id=='memorySelection'){
      if(this.actualParams!=""){
        var a =0;
        while(a<this.params.length && this.params[a].memory!=this.actualParams){
          a++;
        }     
        this.params.splice(a,1);
        this.actualParams ="";
        if($event.target.value==""){
          this.parameters();
        }
      }if($event.target.value!="" && this.actualParams==""){
        this.actualParams = $event.target.value;
        this.params.push({"memory":this.actualParams});
        this.parameters();
      }
    }else if($event.target.id=="fabSelection"){
      if(this.actualFab!=""){
        var a =0;
        while(a<this.params.length && this.params[a].fab!=this.actualFab){
          a++;
        }     
        this.params.splice(a,1);
        this.actualFab ="";
        if($event.target.value==""){
          this.parameters();
        }
      }if($event.target.value!="" && this.actualFab==""){
        this.actualFab = $event.target.value;
        this.params.push({"fab":this.actualFab});
        this.parameters();
      }
    }

  }
  parameters(){
    this.gpuService.getGpuParameters(this.params)
    .subscribe(gpus=>{
      this.gpusFilter = gpus;
    })
  }
}
