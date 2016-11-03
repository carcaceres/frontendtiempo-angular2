"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Importar el núcleo de Angular
var core_1 = require('@angular/core');
var clima_1 = require("../model/clima");
var clima_service_1 = require('../services/clima.service');
var router_1 = require('@angular/router');
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
var VistaClimaComponent = (function () {
    function VistaClimaComponent(_climaService, route, router) {
        this._climaService = _climaService;
        this.route = route;
        this.router = router;
        this.mostrarDatos = false;
        this.mostrarSel = false;
        this.clima = new clima_1.Clima();
        this.codigo = "10200";
        this.consultaJson(this.codigo);
    }
    VistaClimaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            _this.codigo = params['codigo'];
            console.log(params['codigo']);
            _this.consultaJson(_this.codigo);
        });
    };
    VistaClimaComponent.prototype.consultaJson = function (codCiudad) {
        var _this = this;
        this._climaService.getPosts(codCiudad).subscribe(function (result) {
            _this.posts = result;
            _this.clima.celsius = _this.posts[0].celsius;
            _this.clima.codCiudad = _this.posts[0].codCiudad;
            _this.clima.farenheit = _this.posts[0].farenheit;
            _this.clima.humedad = _this.posts[0].humedad;
            _this.clima.idestado = _this.posts[0].idestado;
            _this.clima.nomCiudad = _this.posts[0].nomCiudad;
            _this.clima.nomestado = _this.posts[0].nomestado;
            _this.clima.probprec = _this.posts[0].probprec;
            _this.clima.viento = _this.posts[0].viento;
            _this.clima.dia = _this.diaSemana();
            _this.clima.urlImg = _this.posts[0].url;
            _this.urlImagen(_this.clima);
            _this.grado = _this.clima.celsius + "°C";
        }, function (error) {
            console.log(error);
            alert("Error JSON");
        });
        this._climaService.getCiudad().subscribe(function (result) {
            _this.ciudades = result;
        }, function (error) {
            console.log(error);
            alert("Error JSON");
        });
    };
    VistaClimaComponent.prototype.clicked = function (event) {
        this.consultaJson(this.codigo);
    };
    VistaClimaComponent.prototype.diaSemana = function () {
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
    };
    VistaClimaComponent.prototype.urlImagen = function (clima) {
        if (this.clima.idestado == "1") {
            this.clima.url = "app/assets/images/soleado.png";
        }
        else if (this.clima.idestado == "2") {
            this.clima.url = "app/assets/images/parcialnub.png";
        }
        else if (this.clima.idestado == "3") {
            this.clima.url = "app/assets/images/nublado.png";
        }
        else if (this.clima.idestado == "4") {
            this.clima.url = "app/assets/images/tormelect.png";
        }
    };
    VistaClimaComponent.prototype.onShowHide = function (value) {
        this.mostrarDatos = value;
    };
    VistaClimaComponent.prototype.onShowHideSel = function (value) {
        this.mostrarSel = value;
    };
    VistaClimaComponent.prototype.onFarenheit = function (value) {
        this.mostrarDatos = value;
        this.grado = this.clima.farenheit + "°F";
    };
    VistaClimaComponent.prototype.onCelsius = function (value) {
        this.mostrarDatos = value;
        this.grado = this.clima.celsius + "°C";
    };
    VistaClimaComponent = __decorate([
        core_1.Component({
            selector: 'vista-clima',
            templateUrl: 'app/views/datos-clima.html',
            providers: [clima_service_1.ClimaService],
            styleUrls: ['app/assets/css/componente.css']
        }), 
        __metadata('design:paramtypes', [clima_service_1.ClimaService, router_1.ActivatedRoute, router_1.Router])
    ], VistaClimaComponent);
    return VistaClimaComponent;
}());
exports.VistaClimaComponent = VistaClimaComponent;
//# sourceMappingURL=vistaclima.component.js.map