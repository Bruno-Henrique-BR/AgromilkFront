import { Component ,OnInit} from '@angular/core';

declare var $: any;
declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}
@Component({
    selector: 'app-laticinio-cmp',
    templateUrl: 'laticinio.component.html'
})


export class LaticinioComponent implements OnInit {
    public tableData1: TableData;
    ngOnInit() {
    this.tableData1 = {
        headerRow: [ 'ID', 'Razão Social', 'CNPJ', 'Telefone', 'Endereço', 'Ação'],
        dataRows: [
            
            ['1', 'Laticinio Piracanjuba', '75.783.636/0001-56', '6230051010', 'Goiania',  'btn-round'],
            ['2', 'Laticinio Leite Branco', '75.783.636/0001-56', '6230051010', 'Nazario',  'btn-round'],
            ['3', 'Laticinio Fazenda Branca', '75.783.636/0001-56', '6230051010', 'Avelinopolis',  'btn-round'],
            ['4', 'Laticinio Santa Barbara', '75.783.636/0001-56', '6230051010', 'Santa Barbara',  'btn-round'],
          
        ]
     };
}
}


