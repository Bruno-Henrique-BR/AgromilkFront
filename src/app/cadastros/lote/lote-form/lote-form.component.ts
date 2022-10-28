import { Component ,OnInit} from '@angular/core';

declare var $: any;
declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}
@Component({
    selector: 'app-lote-form-cmp',
    templateUrl: 'lote-form.component.html'
})


export class LoteFormComponent implements OnInit {
    selectedValue: string;
    currentSexo: string[];

    sexos = [
      {value: 'misto-0', viewValue: 'Misto'},
      {value: 'femea-1', viewValue: 'Femea'},
      {value: 'macho-2', viewValue: 'Macho'},
    
    ];
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


