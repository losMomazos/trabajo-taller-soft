import { Injectable } from '@angular/core';
import {Cpu} from '../Cpu';
import {Gpu} from '../Gpu';
import {Motherboard} from '../Motherboard';
import {HttpClient, HttpParams} from '@angular/common/http'
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
  getCpuParameters(_params:any[]){
    let params = new HttpParams();
    for(var i=0;i<_params.length;i++){
      if(_params[i].socket){
        params = params.set('socket',_params[i].socket);
      }else if(_params[i].fab){
        params = params.set('fab',_params[i].fab);
      }else if(_params[i].cores){
        params = params.set('nucleos',_params[i].cores);
      }
    }
    return this.http.get<Cpu[]>(`${this.domain}/api/cpu`,{params:params})
    .pipe(map(res=>res));
  }
}
