import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {VistaClimaComponent}  from './components/vistaclima.component';
import{MostrarClimaComponent} from './components/mostrarclima.component';

const appRoutes: Routes = [
	{
		path: '',
		redirectTo: '/clima',
		pathMatch: 'full'
	},
	{ path: 'clima', component: VistaClimaComponent},
	{ path: 'mostrar',component: MostrarClimaComponent},
	{ path: 'clima/:codigo', component: VistaClimaComponent},
	

	
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);