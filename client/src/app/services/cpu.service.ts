import { Injectable } from '@angular/core';
import {Cpu} from '../Cpu';
import {Gpu} from '../Gpu';
import {Motherboard} from '../Motherboard';
import {HttpClient} from '@angular/common/http'
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CpuService {
  
  domain:string = "http://localhost:3000";
  constructor(private http:HttpClient) { }

  getCpus(){
    return this.http.get<Cpu[]>(`${this.domain}/api/cpu`)
    .pipe(map(res=>res))
  }
  getDetails(id){
    return this.http.get<Cpu>(`${this.domain}/api/cpu/${id}`)
    .pipe(map(res=>res));
  }
  getMother(id){
    return this.http.get<Motherboard[]>(`${this.domain}/api/cpu/compatibilidadmother/${id}`)
    .pipe(map(res=>res));
  }
}
