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

const routes:Routes=[
  {path:'',component:InicioComponent },
  {path:'motherboard',component:MotherboardComponent},
  {path:'motherboard/details/:id',component:DetailsComponent},
  {path:'cpu',component:CpuComponent},
  {path:'gpu',component:GpuComponent},
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
    
  ],
  imports: [
    RouterModule.forRoot(
      routes
    ),
    BrowserModule,
    HttpClientModule
  ],
  providers: [MotherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
