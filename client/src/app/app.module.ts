import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
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
import {TokenInterceptorService} from './services/token-interceptor.service'
import { RegisterComponent } from './register/register.component';
import { LoginComponent2 } from './login/login.component';
import { RootComponent } from './root/root.component';
import { ROUTING } from './app.routing';


const routes:Routes=[
  
];


@NgModule({
  declarations: [
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
    LoginComponent2,
    RegisterComponent,
    RootComponent

  ],
  imports: [
    RouterModule.forRoot(
      routes
    ),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ROUTING
  ],
  providers: [MotherService,CpuService,GpuService,AuthService,,
    {provide:HTTP_INTERCEPTORS,useClass:TokenInterceptorService,multi:true}],
  bootstrap: [RootComponent]
})
export class AppModule { }
