import { Routes } from '@angular/router';

import { ButtonsComponent } from './buttons/buttons.component';
import { GridSystemComponent } from './grid/grid.component';
import { LaticinioComponent } from './laticinio/laticinio.component';
import { MarcaComponent } from './marca/marca.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { LoteListComponent } from './lote/lote-list/lote-list.component';
import { LoteFormComponent } from './lote/lote-form/lote-form.component';
import { SweetAlertComponent } from './sweetalert/sweetalert.component';
import { TypographyComponent } from './typography/typography.component';
import { FuncionarioListComponent } from './funcionario/funcionario-list/funcionario-list.component';
import { FuncionarioFormComponent } from './funcionario/funcionario-form/funcionario-form.component';


export const CadastrosRoutes: Routes = [
    {
        path: '',
        children: [{
            path: 'buttons',
            component: ButtonsComponent
        }]
    }, {
        path: '',
        children: [{
            path: 'grid',
            component: GridSystemComponent
        }]
    }, {
        path: '',
        children: [{
            path: 'marca',
            component: MarcaComponent
        }]
    }, {
        path: '',
        children: [{
            path: 'laticinio',
            component: LaticinioComponent
        }]
    }, {
        path: '',
        children: [{
            path: 'lote',
            component: LoteListComponent,
        }]
    },
    {
        path: 'lote/cadastrar',
        component: LoteFormComponent,

    },


    {
        path: '',
        children: [{
            path: 'funcionario',
            component: FuncionarioListComponent,
        }]
    },
    {
        path: 'funcionario/cadastrar',
        component: FuncionarioFormComponent,

    },
    {
        path: '',
        children: [{
            path: 'sweet-alert',
            component: SweetAlertComponent
        }]
    }, {
        path: '',
        children: [{
            path: 'typography',
            component: TypographyComponent
        }]
    }
];
