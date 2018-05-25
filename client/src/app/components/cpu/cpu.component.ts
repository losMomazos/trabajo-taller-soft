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
  constructor(private cpuService:CpuService) {
    this.cpuService.getCpus()
    .subscribe(cpus=>{
      this.cpus = cpus;
    })
  }

  ngOnInit() {
  }

}
