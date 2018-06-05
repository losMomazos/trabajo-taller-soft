import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MotherService} from '../../services/mother.service';
import {Motherboard} from '../../Motherboard';
import {Cpu} from '../../Cpu';
import { Gpu } from '../../Gpu';
//import { Observable } from 'rxjs';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  motherboard:any;
  cpuCompatibles:Cpu[];
  gpuCompatibles:Gpu[];
  constructor(private ruta:ActivatedRoute,private motherService:MotherService) {
    this.ruta.params.subscribe(params=>{
      
      this.motherService.getDetails(params['id']).subscribe(motherboard=>{
        this.motherboard = motherboard;
        
      });
      this.motherService.getCpu(params['id']).subscribe(cpus=>{
        this.cpuCompatibles = cpus;
      });
      this.motherService.getGpu(params['id']).subscribe(gpus=>{
        this.gpuCompatibles = gpus;
      });
    })

  }

  ngOnInit() {
  }

}
