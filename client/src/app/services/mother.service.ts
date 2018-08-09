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
  getMotherParameters(parametros:any[]){
    let params = new HttpParams();
    for(var i=0;i<parametros.length;i++){
      if(parametros[i].socket){
        params = params.set('socket',parametros[i].socket);
      }else if(parametros[i].chipset){
        params = params.set('chipset',parametros[i].chipset);
      }else if(parametros[i].format){
        params = params.set('format',parametros[i].format);
      }
    }
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
  deleteMother(id){
    return this.http.delete<any>(`${this.domain}/api/motherboard/${id}`)
    .pipe(map(res=>res));
  }
  addMother(newMother){
    return this.http.post<any>(`${this.domain}/api/motherboard`,newMother)
    .pipe(map(res=>res))
  }
}
