import { Component, OnInit } from '@angular/core';
import { Sitio } from 'src/app/models/sitioModel';
import { SitioServiceService } from 'src/app/services/sitio-service.service';

@Component({
  selector: 'app-card-sitios',
  templateUrl: './card-sitios.component.html',
  styleUrls: ['./card-sitios.component.scss']
})
export class CardSitiosComponent implements OnInit {

  sitios: Sitio[]=[];

  constructor(private sitioServ: SitioServiceService) { }

  ngOnInit(): void {
    this.loadSitios();
  }

  async loadSitios(){
    await this.sitioServ.getSitios().subscribe((sitios: any)=>{
      this.sitios=sitios;
      console.log(sitios);
    });
    

  }
}
