import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Sitio } from '../models/sitioModel';

const baseURL= environment.baseURL;
@Injectable({
  providedIn: 'root'
})
export class SitioServiceService {
  //URL_BASE = environment.baseURL;
  constructor(private http: HttpClient) { }
  get headers(){
    return { headers:{'Access-Control-Allow-Origin':'*'}}
  }
  //Metodo GET
  getSitios(){
    return this.http.get<Sitio[]>(`${baseURL}sitios`)
  }

  //Metodo POT 
  saveSitio(data:Sitio){
    return this.http.post(`${baseURL}sitios`, data);
  }
}
