import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Lote } from 'src/app/models/lote';
import { LoteService } from 'src/app/services/lote.service';


@Component({
    selector: 'app-lote-list-cmp',
    templateUrl: 'lote-list.component.html'
})


export class LoteListComponent implements AfterViewInit {
    lote: Lote[] = [];

    displayedColumns: string[] = ['id', 'nome', 'descricao', 'sexo', 'acao'];
    dataSource = new MatTableDataSource<Lote>(this.lote);

    @ViewChild(MatPaginator) paginator!: MatPaginator;

    constructor(
        private service: LoteService,
        private router: Router) { }

    ngAfterViewInit() {
        this.listarTodos();
    }

    listarTodos(): void {
        this.service.listarTodos().subscribe((resposta) => {
            this.lote = resposta;
            this.dataSource = new MatTableDataSource<Lote>(this.lote);
            this.dataSource.paginator = this.paginator;
        })
    }

    navigateToCreate(): void {
        this.router.navigate(['/agromilk/lote'])

    }
}


