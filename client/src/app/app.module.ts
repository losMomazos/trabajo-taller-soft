import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { MotherboardComponent } from './components/motherboard/motherboard.component';
import{MotherService} from './services/mother.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    InicioComponent,
    MotherboardComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [MotherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
