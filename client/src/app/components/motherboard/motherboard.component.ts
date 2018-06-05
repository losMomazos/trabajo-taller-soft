import {Component, OnInit } from '@angular/core';
import {Motherboard}from '../../Motherboard';
import {MotherService} from '../../services/mother.service'
import { $ } from 'protractor';


@Component({
  selector: 'app-motherboard',
  templateUrl: './motherboard.component.html',
  styleUrls: ['./motherboard.component.css']
})
export class MotherboardComponent implements OnInit {
  motherboars:Motherboard[];
  motherboarsFilter:Motherboard[];
  constructor(private motherService:MotherService) {
    
    this.motherService.getMother()
    .subscribe(motherboars=>{
      this.motherboars =  motherboars;
      this.motherboarsFilter = this.motherboars;
    })
   /*
    this.motherService.getMotherParameters()
    .subscribe(motherboars=>{
      this.motherboarsFilter = motherboars;
    })
    */
  }

  ngOnInit() {
  }
  funciona(variable:string){
    console.log(variable);
    this.motherboarsFilter = this.motherboars.filter(mother=>{
      return mother.name.toLocaleLowerCase().includes(variable.toLocaleLowerCase());
    })
  }
  update($event){
    console.log($event.target.value);
  }
  parameters(){
    this.motherService.getMotherParameters()
    .subscribe(motherboars=>{
      this.motherboars =  motherboars;
    })
  }
}
