
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

// Config router
import {routing, appRoutingProviders} from './app.routing';

// Componentes
import { AppComponent }  from './app.component';
import {VistaClimaComponent}  from './components/vistaclima.component';
import{MostrarClimaComponent} from './components/mostrarclima.component';
 
@NgModule({
   declarations: [ AppComponent, 
            VistaClimaComponent,
            MostrarClimaComponent

          ],
         
  imports:      [ BrowserModule,
  				  HttpModule,
  				  FormsModule,
  				  routing
  				],
 

   providers:   [ appRoutingProviders,{provide: LocationStrategy, useClass: HashLocationStrategy} ],

  bootstrap:    [ AppComponent ]
  
})
 
export class AppModule { }
