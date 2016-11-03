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
var core_1 = require('@angular/core');
var clima_service_1 = require('../services/clima.service');
var router_1 = require('@angular/router');
var MostrarClimaComponent = (function () {
    function MostrarClimaComponent(_climaService, route, router) {
        this._climaService = _climaService;
        this.route = route;
        this.router = router;
        this.mostrarCiudad();
    }
    MostrarClimaComponent.prototype.mostrarCiudad = function () {
        var _this = this;
        this._climaService.getCiudad().subscribe(function (result) {
            _this.ciudades = result;
        }, function (error) {
            console.log(error);
            alert("Error JSON");
        });
    };
    MostrarClimaComponent.prototype.actualizar = function (value) {
        this.router.navigate(['/clima', value]);
        //alert("ingresado el codigo "+value);
    };
    MostrarClimaComponent = __decorate([
        core_1.Component({
            selector: 'editar-clima',
            templateUrl: 'app/views/mostrar-clima.html',
            providers: [clima_service_1.ClimaService],
            styleUrls: ['app/assets/css/componente.css']
        }), 
        __metadata('design:paramtypes', [clima_service_1.ClimaService, router_1.ActivatedRoute, router_1.Router])
    ], MostrarClimaComponent);
    return MostrarClimaComponent;
}());
exports.MostrarClimaComponent = MostrarClimaComponent;
//# sourceMappingURL=mostrarclima.component.js.map