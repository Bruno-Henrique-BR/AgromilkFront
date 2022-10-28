import { Component ,OnInit} from '@angular/core';

declare var $: any;
declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}
@Component({
    selector: 'app-marca-cmp',
    templateUrl: 'marca.component.html'
})


export class MarcaComponent implements OnInit {
    public tableData1: TableData;
    ngOnInit() {
    this.tableData1 = {
        headerRow: [ 'ID', 'Nome', 'Descrição', 'Ação'],
        dataRows: [
            
            ['1', 'FrigoMor', 'Tanque para armazenamento de leite', 'btn-round'],
            ['2', 'Sulinox', 'Tanque para armazenamento de leite',  'btn-round'],
            ['3', 'Reafrio', 'Tanque para armazenamento de leite',  'btn-round'],

          
        ]
     };
}
}


