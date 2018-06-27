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
  parametros:any=[];
  actualParams:string="";
  actualChipset:string="";
  actualFormat:string="";
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
    this.motherboarsFilter = this.motherboars.filter(mother=>{
      return mother.name.toLocaleLowerCase().includes(variable.toLocaleLowerCase());
    })
  }
  update($event){
    if($event.target.id=='multipleSelection'){
      if(this.actualParams!=""){
        var a =0;
        while(a<this.parametros.length && this.parametros[a].socket!=this.actualParams){
          a++;
        }     
        this.parametros.splice(a,1);
        this.actualParams ="";
        if($event.target.value==""){
          this.parameters();
        }
      }if($event.target.value!="" && this.actualParams==""){
        this.actualParams = $event.target.value;
        this.parametros.push({"socket":this.actualParams});
        this.parameters();
      }
    }else if($event.target.id=="chipsetSelection"){
      if(this.actualChipset!=""){
        var a =0;
        while(a<this.parametros.length && this.parametros[a].chipset!=this.actualChipset){
          a++;
        }     
        this.parametros.splice(a,1);
        this.actualChipset ="";
        if($event.target.value==""){
          this.parameters();
        }
      }if($event.target.value!="" && this.actualChipset==""){
        this.actualChipset = $event.target.value;
        this.parametros.push({"chipset":this.actualChipset});
        this.parameters();
      }
    }else if($event.target.id=="formatSelection"){
      if(this.actualFormat!=""){
        var a =0;
        while(a<this.parametros.length && this.parametros[a].format!=this.actualFormat){
          a++;
        }     
        this.parametros.splice(a,1);
        this.actualFormat ="";
        if($event.target.value==""){
          this.parameters();
        }
      }if($event.target.value!="" && this.actualFormat==""){
        this.actualFormat = $event.target.value;
        this.parametros.push({"format":this.actualFormat});
        this.parameters();
      }
    }

  }
  parameters(){
    this.motherService.getMotherParameters(this.parametros)
    .subscribe(motherboars=>{
      this.motherboarsFilter =  motherboars;
    })
  }
}
