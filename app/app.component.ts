// Importar el núcleo de Angular
import {Component} from '@angular/core';
 
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'my-app',
    template: `
       

            <ul class="nav nav-tabs">
  <li routerLinkActive="active">  <a routerLink="/clima">Pronostico</a></li>
   <li routerLinkActive="active">  <a routerLink="/mostrar">Mostrar</a></li>
    
</ul>

             <router-outlet></router-outlet>
    `
})
 
// Clase del componente donde irán los datos y funcionalidades
export class AppComponent{ }