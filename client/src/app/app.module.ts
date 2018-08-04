import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
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
import { CompareCpuComponent } from './components/compare-cpu/compare-cpu.component';
import { CompareGpuComponent } from './components/compare-gpu/compare-gpu.component';
import { LoginComponent } from './components/login/login.component';
import { CrudComponent } from './components/crud/crud.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './auth.guard';
import {TokenInterceptorService} from './services/token-interceptor.service'
const routes:Routes=[
  {path:'',component:InicioComponent },
  {path:'login',component:LoginComponent},
  {path:'crud',component:CrudComponent,canActivate:[AuthGuard]},
  {path:'motherboard',component:MotherboardComponent},
  {path:'motherboard/details/:id',component:DetailsComponent},
  {path:'motherboard/compare/:id',component:CompareComponent},
  {path:'cpu/compare/:id',component:CompareCpuComponent},
  {path:'gpu/compare/:id',component:CompareGpuComponent},
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
    CompareCpuComponent,
    CompareGpuComponent,
    LoginComponent,
    CrudComponent,
    
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
  providers: [MotherService,CpuService,GpuService,AuthService,AuthGuard,
    {provide:HTTP_INTERCEPTORS,useClass:TokenInterceptorService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
