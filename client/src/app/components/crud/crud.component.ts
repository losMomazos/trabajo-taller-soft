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
  thing:String='';
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
  deleteThing(thing){
    const response = confirm('Estas seguro de eliminar ?');
    const id = thing._id;
    console.log(id);
    if(response){
      if(thing.category==='Cpu'){
          this._cpuService.deleteCpu(id)
          .subscribe(data=>{
            console.log(data);
            let i=0;
            while(i<this.todo.length && this.todo[i]._id==id){
              i++;
            }
            this.todo.splice(i, 1); 
            
          })
      }else if(thing.category==='Gpu'){
        this._gpuService.deleteGpu(id)
        .subscribe(data=>{
          console.log(data.id);
          if(data.n == 1) {
            for(let i = 0; i < this.todo.length; i++) {
              if(this.todo[i]._id == id) {
                this.todo.splice(i, 1);
              }
            }
}
          
        })
      }else{
        
      }

    }
  }
}
