import { Component, OnInit } from '@angular/core';
import {Cpu} from '../../Cpu';
import{ActivatedRoute } from '@angular/router'
import {CpuService} from '../../services/cpu.service';
@Component({
  selector: 'app-compare-cpu',
  templateUrl: './compare-cpu.component.html',
  styleUrls: ['./compare-cpu.component.css']
})
export class CompareCpuComponent implements OnInit {
  cpuForComparison:Cpu;
  cpu1:Cpu;
  cpusForCompare:Cpu[];
  constructor(private _route:ActivatedRoute,private _cpuService:CpuService) {
    this._route.params.subscribe(params=>{
      this._cpuService.getDetails(params['id'])
      .subscribe(cpu=>this.cpu1 =  cpu);
      this._cpuService.getCpus()
      .subscribe(cpus=>this.cpusForCompare =  cpus);
    });
   }

  ngOnInit() {

  }
  searchCpu($event){
    this.cpuForComparison = this.cpusForCompare.find((cpu)=>{
      return cpu.name==$event.target.value;
    })
  }

}
