import { Component, OnInit } from '@angular/core';
import { GpuService} from '../../services/gpu.service';
import {CpuService} from '../../services/cpu.service';
import {MotherService} from '../../services/mother.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  todo:any[];
  thing:string='';
  cpu:string="cpu";
  gpu:string="gpu";
  mother:string="mother";
  cpuAdd={category:'Cpu'};
  gpuAdd={category:'Gpu'};
  motherAdd={category:'Motherboard'};
  choiceCpu:boolean=false;
  choiceGpu:boolean=false;
  choiceMother:boolean=false;
  constructor(private _gpuService:GpuService,private _cpuService:CpuService,private _motherService:MotherService, private router: Router) {
    if(!localStorage.getItem('loggedInUser')){
      this.router.navigate(['/']);
    }

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
  deleteThing(element){
    const response = confirm('Estas seguro de eliminar ?');
    const id = element._id;
    const todo = this.todo;
    if(response){
      if(element.category==='Cpu'){
          this._cpuService.deleteCpu(element._id)
          .subscribe(data=>{
            for(let i = 0; i <todo.length; i++) {
              if(todo[i]._id ==id) {
                todo.splice(i, 1);
              }
            }
          })
      }else if(element.category==='Gpu'){
        this._gpuService.deleteGpu(element._id)
        .subscribe(data=>{
            for(let i = 0; i < this.todo.length; i++) {
              if(this.todo[i]._id == id) {
                this.todo.splice(i, 1);
              }
            }

        })
      }else{
        this._motherService.deleteMother(element._id)
        .subscribe(data=>{
            for(let i = 0; i < this.todo.length; i++) {
              if(this.todo[i]._id == id) {
                this.todo.splice(i, 1);
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
  resetGpu(){
    this.cpuAdd={category:'Gpu'};
  }
  resetMother(){
    this.cpuAdd={category:'Motherboard'};
  }

  add(){
    if(this.muestraCpuForm()){
      this._cpuService.addCpu(this.cpuAdd)
      .subscribe(cpu=>{
        this.todo.push(cpu);
        this.resetCpu();
      })
    }else if(this.muestraGpuForm()){
      this._gpuService.addGpu(this.gpuAdd)
      .subscribe(gpu=>{
        this.todo.push(gpu);
        this.resetGpu();
      })
    }else if(this.muestraMotherForm()){
      this._motherService.addMother(this.motherAdd)
      .subscribe(mother=>{
        this.todo.push(mother);
        this.resetMother();
      })
    }
  }

  
}
