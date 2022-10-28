import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../app.module';

import { ButtonsComponent } from './buttons/buttons.component';
import { CadastrosRoutes } from './cadastros.routing';
import { GridSystemComponent } from './grid/grid.component';
import { MarcaComponent } from './marca/marca.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { PanelsComponent } from './panels/panels.component';
import { SweetAlertComponent } from './sweetalert/sweetalert.component';
import { TypographyComponent } from './typography/typography.component';
import { LaticinioComponent } from './laticinio/laticinio.component';
import { LoteListComponent } from './lote/lote-list/lote-list.component'
import { LoteFormComponent } from './lote/lote-form/lote-form.component'
import { FuncionarioFormComponent } from './funcionario/funcionario-form/funcionario-form.component';
import { FuncionarioListComponent } from './funcionario/funcionario-list/funcionario-list.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(CadastrosRoutes),
    FormsModule,
    MaterialModule
  ],
  declarations: [
      ButtonsComponent,
      GridSystemComponent,
      MarcaComponent,
      LaticinioComponent,
      LoteListComponent,
      LoteFormComponent,
      FuncionarioFormComponent,
      FuncionarioListComponent,
      NotificationsComponent,
      PanelsComponent,
      SweetAlertComponent,
      TypographyComponent
  ]
})

export class CadastrosModule {}
