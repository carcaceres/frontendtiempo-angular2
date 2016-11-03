// Importar el núcleo de Angular
import {Component} from '@angular/core';
import {Clima} from "../model/clima";
import {ClimaService} from '../services/clima.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
 
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'vista-clima',
    templateUrl:'app/views/datos-clima.html',
    providers: [ClimaService],
    styleUrls: ['app/assets/css/componente.css']
})
 
// Clase del componente donde irán los datos y funcionalidades
export class VistaClimaComponent {
public mostrarDatos:boolean;
public codigo:string;
public clima;
public posts;
public ciudades;
public grado;
public mostrarSel:boolean;


    constructor(private _climaService: ClimaService,private route: ActivatedRoute,
        private router: Router){
this.mostrarDatos=false;
this.mostrarSel=false;
        this.clima = new Clima();
        this.codigo="10200";
      this.consultaJson(this.codigo);

    }


    ngOnInit(){
        this.route.params.forEach((params: Params) => {
            this.codigo= params['codigo'];
            console.log(params['codigo']);
             this.consultaJson(this.codigo);

        });
    }



consultaJson(codCiudad:string){
    this._climaService.getPosts(codCiudad).subscribe(
                result => {
                    this.posts = result;
                    this.clima.celsius=this.posts[0].celsius;
                    this.clima.codCiudad=this.posts[0].codCiudad;
                    this.clima.farenheit=this.posts[0].farenheit;
                    this.clima.humedad=this.posts[0].humedad
                    this.clima.idestado=this.posts[0].idestado;
                    this.clima.nomCiudad=this.posts[0].nomCiudad;
                    this.clima.nomestado=this.posts[0].nomestado;
                    this.clima.probprec=this.posts[0].probprec;
                    this.clima.viento=this.posts[0].viento;
                    this.clima.dia=this.diaSemana();
                    this.clima.urlImg=this.posts[0].url;
                    this.urlImagen(this.clima);
                    this.grado=this.clima.celsius+"°C";
                   },
                error => {
                    console.log(<any>error);
                      alert("Error JSON");
                }
            );



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




clicked(event) {
   this.consultaJson(this.codigo);

  }



public diaSemana():string{
     var fecha = new Date();

        var semana0 = "Domingo";
        var semana1 = "Lunes";
        var semana2 = "Martes";
        var semana3 = "Miercoles";
        var semana4 = "Jueves";
        var semana5 = "Viernes";
        var semana6 = "Sabado";

        var hoy = fecha.getDay();

        return eval("semana" + hoy);
}


public urlImagen(clima:Clima){

if(this.clima.idestado=="1"){
    this.clima.url="app/assets/images/soleado.png"
}

else if(this.clima.idestado=="2"){
    this.clima.url="app/assets/images/parcialnub.png"
}
else if(this.clima.idestado=="3"){
    this.clima.url="app/assets/images/nublado.png"
}
else if(this.clima.idestado=="4"){
    this.clima.url="app/assets/images/tormelect.png"
}


 }


 onShowHide(value){
this.mostrarDatos=value;
}
onShowHideSel(value){
    this.mostrarSel=value;
}


onFarenheit(value){
    this.mostrarDatos=value;
this.grado=this.clima.farenheit+"°F";
}

onCelsius(value){
    this.mostrarDatos=value;
this.grado=this.clima.celsius+"°C";
}

}