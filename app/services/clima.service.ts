import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import "rxjs/add/operator/map";
import {URLSearchParams} from '@angular/http';
import { Observable } from "rxjs/Observable";

@Injectable()
export class ClimaService{

	constructor(private _http: Http){}

	getPosts(codCiudad:string){
		 let params = new URLSearchParams();
  params.set('codciudad',codCiudad);
		//return this._http.get("https://jsonplaceholder.typicode.com/posts1")
		return this._http.get("http://localhost:8085/backendtiempo/webresources/servicios/climaciudad",{ search: params }).map(res => res.json());
	}


	getCiudad(){
		return this._http.get("http://localhost:8085/backendtiempo/webresources/servicios/mostrardatosclimas").map(res => res.json());
	}



}