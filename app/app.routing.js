"use strict";
var router_1 = require('@angular/router');
var vistaclima_component_1 = require('./components/vistaclima.component');
var mostrarclima_component_1 = require('./components/mostrarclima.component');
var appRoutes = [
    {
        path: '',
        redirectTo: '/clima',
        pathMatch: 'full'
    },
    { path: 'clima', component: vistaclima_component_1.VistaClimaComponent },
    { path: 'mostrar', component: mostrarclima_component_1.MostrarClimaComponent },
    { path: 'clima/:codigo', component: vistaclima_component_1.VistaClimaComponent },
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map