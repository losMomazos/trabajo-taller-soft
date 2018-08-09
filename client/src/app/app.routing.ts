import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { AuthGuard } from './auth.guard';
import { LoginComponent2 } from './login/login.component';
import { CpuComponent } from './components/cpu/cpu.component';
import { MotherboardComponent } from './components/motherboard/motherboard.component';
import { DetailsComponent } from './components/details/details.component';
import { CompareComponent } from './components/compare/compare.component';
import { CompareCpuComponent } from './components/compare-cpu/compare-cpu.component';
import { CompareGpuComponent } from './components/compare-gpu/compare-gpu.component';
import { DetailcpuComponent } from './components/detailcpu/detailcpu.component';
import { GpuComponent } from './components/gpu/gpu.component';
import { DetailgpuComponent } from './components/detailgpu/detailgpu.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './components/login/login.component';
import { CrudComponent } from './components/crud/crud.component';

export const AppRoutes: Routes = [
	{ path: '', component: LoginComponent2 },
	{ path: 'register' , component: RegisterComponent },
	{ path: 'home', component: NavBarComponent },
  //{path:'',component:InicioComponent },
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

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes);