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
  cpu:string="cpu";
  gpu:string="gpu";
  mother:string="mother";
  cpuAdd={category:'Cpu'};
  gpuAdd={};
  motherAdd={};
  choiceCpu:boolean=false;
  choiceGpu:boolean=false;
  choiceMother:boolean=false;
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
            while(i<this.todo.length && this.todo[i]._id==data._id){
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
              if(this.todo[i]._id == data._id) {
                this.todo.splice(i, 1);
              }
            }
          }   
        })
      }else{
        this._motherService.deleteMother(id)
        .subscribe(data=>{
          console.log(data.id);
          if(data.n == 1) {
            for(let i = 0; i < this.todo.length; i++) {
              if(this.todo[i]._id == data._id) {
                this.todo.splice(i, 1);
              }
            }
          }   
        })
      }

    }
  }



  choiceForm(category){
    if(category==="cpu"){
      this.choiceCpu=true;
      this.choiceGpu=false;
      this.choiceMother=false;
    }
    if(category==="gpu"){
      this.choiceCpu=false;
      this.choiceGpu=true;
      this.choiceMother=false;
    }
    if(category==="mother"){
      this.choiceCpu=false;
      this.choiceGpu=false;
      this.choiceMother=true;
    }
  }

  muestraCpuForm(){
    return this.choiceCpu && !this.choiceGpu && !this.choiceMother;
  }
  muestraGpuForm(){
    return this.choiceGpu && !this.choiceCpu && !this.choiceMother;
  }
  muestraMotherForm(){
    return !this.choiceCpu && !this.choiceGpu && this.choiceMother;
  }

  resetCpu(){
    this.cpuAdd={category:'Cpu'};
  }

  add(){
    if(this.muestraCpuForm()){
      this._cpuService.addCpu(this.cpuAdd)
      .subscribe(cpu=>{
        this.todo.push(cpu);
        this.resetCpu();
      })
    }
  }
}
