import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Motherboard} from '../Motherboard';
import {Cpu} from '../Cpu';
import {map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class MotherService {
  domain:string = "http://localhost:3000"
  constructor(private http:HttpClient) { }

  getMother(){
    return this.http.get<Motherboard[]>(`${this.domain}/api/motherboard`)
    .pipe(map(res=>res));
    
  }
  getDetails(id){
    return this.http.get<Motherboard>(`${this.domain}/api/motherboard/${id}`)
    .pipe(map(res=>res));
  }
  getCpu(id){
    return this.http.get<Cpu[]>(`${this.domain}/api/motherboard/compatibilidadcpu/${id}`)
    .pipe(map(res=>res));
  }
}
