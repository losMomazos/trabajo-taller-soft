import { Injectable } from '@angular/core';
import {HttpClient,HttpParams} from '@angular/common/http';
import {Motherboard} from '../Motherboard';
import {Cpu} from '../Cpu';
import {Gpu} from '../Gpu';
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
  getMotherParameters(){
    let params = new HttpParams().set('socket','LGA 1151');
    //params.set('firstname', yourFirstNameData);
    //params.set('lastname', yourLastNameData);
    return this.http.get<Motherboard[]>(`${this.domain}/api/motherboard`,{params:params})
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
  getGpu(id){
    console.log("pase por aqui");
    return this.http.get<Gpu[]>(`${this.domain}/api/motherboard/compatibilidadgpu/${id}`)
    .pipe(map(res=>res));
  }
}
