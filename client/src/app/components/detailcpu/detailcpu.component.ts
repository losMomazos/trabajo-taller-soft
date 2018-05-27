import { Component, OnInit } from '@angular/core';
import {Motherboard} from '../../Motherboard';
import { CpuService } from '../../services/cpu.service';
import {Cpu} from '../../Cpu';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-detailcpu',
  templateUrl: './detailcpu.component.html',
  styleUrls: ['./detailcpu.component.css']
})
export class DetailcpuComponent implements OnInit {
  cpu:Cpu;
  motherCompatibles:Motherboard[];
  constructor(private ruta:ActivatedRoute,private cpuService:CpuService) { 
    this.ruta.params.subscribe(params=>{
      this.cpuService.getDetails(params['id']).subscribe(cpu=>{
        this.cpu = cpu;
      })
      this.cpuService.getMother(params['id']).subscribe(mothers=>{
        this.motherCompatibles =  mothers;
      })
    })

  }

  ngOnInit() {
  }

}
