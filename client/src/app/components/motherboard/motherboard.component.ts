import { Component, OnInit } from '@angular/core';
import {Motherboard}from '../../Motherboard';
import {MotherService} from '../../services/mother.service'


@Component({
  selector: 'app-motherboard',
  templateUrl: './motherboard.component.html',
  styleUrls: ['./motherboard.component.css']
})
export class MotherboardComponent implements OnInit {
  motherboars:Motherboard[];
  constructor(private motherService:MotherService) {
    this.motherService.getMother()
    .subscribe(motherboars=>{
      this.motherboars =  motherboars;
    })
   }

  ngOnInit() {
  }

}
