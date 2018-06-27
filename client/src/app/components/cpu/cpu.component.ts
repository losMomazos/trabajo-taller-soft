import { Component, OnInit } from '@angular/core';
import {CpuService} from '../../services/cpu.service';
import {Cpu} from '../../Cpu';
@Component({
  selector: 'app-cpu',
  templateUrl: './cpu.component.html',
  styleUrls: ['./cpu.component.css']
})
export class CpuComponent implements OnInit {
  cpus:Cpu[];
  cpusFilter:Cpu[];
  params:any=[];
  actualParams:string="";
  actualSocket:string="";
  actualFab:string="";
  actualCore:string="";
  constructor(private cpuService:CpuService) {
    this.cpuService.getCpus()
    .subscribe(cpus=>{
      this.cpusFilter = cpus;
      this.cpus =  this.cpusFilter;
    })
  }

  ngOnInit() {
  }

  search(param){
    this.cpusFilter = this.cpus.filter(cpu=>{
      return cpu.name.toLocaleLowerCase().includes(param.toLocaleLowerCase());
    })
  }
  
  select($event){
    if($event.target.id=='socketSelection'){
      if(this.actualParams!=""){
        var a =0;
        while(a<this.params.length && this.params[a].socket!=this.actualParams){
          a++;
        }     
        this.params.splice(a,1);
        this.actualParams ="";
        if($event.target.value==""){
          this.parameters();
        }
      }if($event.target.value!="" && this.actualParams==""){
        this.actualParams = $event.target.value;
        this.params.push({"socket":this.actualParams});
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
    }else if($event.target.id=="coreSelection"){
      if(this.actualCore!=""){
        var a =0;
        while(a<this.params.length && this.params[a].cores!=this.actualCore){
          a++;
        }     
        this.params.splice(a,1);
        this.actualCore ="";
        if($event.target.value==""){
          this.parameters();
        }
      }if($event.target.value!="" && this.actualCore==""){
        this.actualCore = $event.target.value;
        this.params.push({"cores":parseInt(this.actualCore)});
        this.parameters();
      }
    }
  }
  parameters(){
    this.cpuService.getCpuParameters(this.params)
    .subscribe(cpus=>{
      this.cpusFilter =  cpus;
    })
  }
}
