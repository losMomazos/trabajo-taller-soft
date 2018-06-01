import { Injectable } from '@angular/core';
import {Cpu} from '../Cpu';
import {Gpu} from '../Gpu';
import {Motherboard} from '../Motherboard';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class GpuService {
  domain:string = "http://localhost:3000";
  constructor(private http:HttpClient) { }
  getGpus(){
    return this.http.get<Gpu[]>(`${this.domain}/api/gpu`)
    .pipe(map(res=>res));
  }
  getDetails(id){
    return this.http.get<Gpu>(`${this.domain}/api/gpu/${id}`)
    .pipe(map(res=>res));
  }
  getMother(id){
    return this.http.get<Motherboard[]>(`${this.domain}/api/gpu/compatibilidadmother/${id}`)
    .pipe(map(res=>res));
  }
}
