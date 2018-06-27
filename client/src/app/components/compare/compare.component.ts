import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MotherService} from '../../services/mother.service';
import {Motherboard} from '../../Motherboard';
@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css']
})
export class CompareComponent implements OnInit {
  mother1:Motherboard;
  motherForComparison:Motherboard;
  mothersForCompare:Motherboard[];
  constructor(private _route:ActivatedRoute, private _motherService:MotherService) {
    this._route.params.subscribe(params=>{
      this._motherService.getDetails(params['id'])
      .subscribe(motherboard=>this.mother1 =  motherboard);
      this._motherService.getMother()
      .subscribe(motherboards=>this.mothersForCompare =  motherboards);
    });
    
  }

  ngOnInit() {

  }
  searchMother($event){
    this.motherForComparison = this.mothersForCompare.find((mother)=>{
      return mother.name==$event.target.value;
    })
  }
}
