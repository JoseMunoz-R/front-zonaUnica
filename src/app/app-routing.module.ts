import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { MunicipiosComponent } from './components/municipios/municipios.component';
import { PlatosComponent } from './components/platos/platos.component';
import { CardSitiosComponent } from './components/sitios/card-sitios/card-sitios.component';
import { FrmSitiosComponent } from './components/sitios/frm-sitios/frm-sitios.component';
import { SitiosComponent } from './components/sitios/sitios.component';

const routes: Routes = [{
  path: 'home',
  component: InicioComponent,
  children:[
  ]
},
{
  path: 'sitios',
  component: SitiosComponent,
  children:[
    //{path:'ltsSitios', component:CardSitiosComponent}
  ]
},
{
  path: 'platos',
  component: PlatosComponent
},
{
  path: 'municipios',
  component: MunicipiosComponent
},
{path:'sitioNuevo', component:FrmSitiosComponent},
{
  path: '**',
  pathMatch: 'full',
  redirectTo: 'sitios'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
