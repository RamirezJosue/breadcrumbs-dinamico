import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsignaturaComponent } from './asignatura/asignatura.component';
import { PageComponent } from './page.component';
import { SesionComponent } from './sesion/sesion.component';
import { UnidadesComponent } from './unidades/unidades.component';

const routes: Routes = [
  {
    path: '',
    component: PageComponent,
    children: [
      {
        path: 'asignaturas',
        component: AsignaturaComponent,
        data: {
          title: 'Asignaturas',
          breadcrumb: [
            {
              label: 'Asignaturas',
              url: 'asignaturas'
            }
          ]
        },
      },
      {
        path: 'asignatura/unidades',
        component: UnidadesComponent,
        data: {
          title: 'Unidades',
          breadcrumb: [
            {
              label: 'Asignaturas',
              url: '/asignaturas'
            },
            {
              label: 'Unidades',
              url: ''
            }
          ]
        },
      },
      {
        path: 'asignatura/unidad/sesiones',
        component: SesionComponent,
        data: {
          title: 'Sesiones',
          breadcrumb: [
            {
              label: 'Asignaturas',
              url: '/asignaturas'
            },
            {
              label: 'Unidades',
              url: '/asignatura/unidades'
            },
            {
              label: 'Sesiones',
              url: ''
            }
          ]
        },
      },
    ]



  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
