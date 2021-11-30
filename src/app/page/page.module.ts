import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRoutingModule } from './page-routing.module';
import { PageComponent } from './page.component';
import { AsignaturaComponent } from './asignatura/asignatura.component';
import { UnidadesComponent } from './unidades/unidades.component';
import { SesionComponent } from './sesion/sesion.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PageComponent,
    AsignaturaComponent,
    UnidadesComponent,
    SesionComponent
  ],
  imports: [
    CommonModule,
    PageRoutingModule,
    SharedModule
  ]
})
export class PageModule { }
