import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { MotherboardComponent } from './components/motherboard/motherboard.component';
import{MotherService} from './services/mother.service';
import{RouterModule,Routes}from '@angular/router';
import { DetailsComponent } from './components/details/details.component';
import { CpuComponent } from './components/cpu/cpu.component';
import { GpuComponent } from './components/gpu/gpu.component'
import {GpuService} from './services/gpu.service';
import {CpuService}from './services/cpu.service';
import { DetailcpuComponent } from './components/detailcpu/detailcpu.component';
import { DetailgpuComponent } from './components/detailgpu/detailgpu.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { CompareComponent } from './components/compare/compare.component';

const routes:Routes=[
  {path:'',component:InicioComponent },
  {path:'motherboard',component:MotherboardComponent},
  {path:'motherboard/details/:id',component:DetailsComponent},
  {path:'motherboard/compare/:id',component:CompareComponent},
  {path:'cpu',component:CpuComponent},
  {path:'cpu/details/:id',component:DetailcpuComponent},
  {path:'gpu',component:GpuComponent},
  {path:'gpu/details/:id',component:DetailgpuComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    InicioComponent,
    MotherboardComponent,
    DetailsComponent,
    CpuComponent,
    GpuComponent,
    DetailcpuComponent,
    DetailgpuComponent,
    CompareComponent,
    
  ],
  imports: [
    RouterModule.forRoot(
      routes
    ),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [MotherService,CpuService,GpuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
