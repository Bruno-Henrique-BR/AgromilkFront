import { Component ,OnInit} from '@angular/core';

declare var $: any;
declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}
@Component({
    selector: 'app-funcionario-list-cmp',
    templateUrl: 'funcionario-list.component.html'
})


export class FuncionarioListComponent implements OnInit {
    public tableData1: TableData;
    ngOnInit() {
    this.tableData1 = {
        headerRow: [ 'ID', 'Nome', 'Descrição', 'Sexo', 'Ação'],
        dataRows: [
            
            ['1', 'Lote 1', 'Lote de misto', 'Misto', 'btn-round'],
            ['2', 'Lote 2', 'Lote de femeas', 'Femea',  'btn-round'],
            ['3', 'Lote 3', 'Lote de misto', 'Misto', 'btn-round'],

          
        ]
     };
}
}


