import {Component} from '@angular/core';
import {Clima} from "../model/clima";
import {ClimaService} from '../services/clima.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'editar-clima',
    templateUrl:'app/views/mostrar-clima.html',
     providers: [ClimaService],
     styleUrls: ['app/assets/css/componente.css']
   
})
 
// Clase del componente donde irán los datos y funcionalidades

export class MostrarClimaComponent {
        public ciudades;
           constructor(private _climaService: ClimaService,
               private route: ActivatedRoute,
               private router: Router
                     
    ){
                this.mostrarCiudad();
         }

    mostrarCiudad(){
    
 	this._climaService.getCiudad().subscribe(
                result => {
                    this.ciudades = result;
                    
                    
                },
                error => {
                    console.log(<any>error);
                    alert("Error JSON");
                }
            );


}

actualizar(value){
this.router.navigate(['/clima', value]);
//alert("ingresado el codigo "+value);

}


}
