import { Component ,OnInit} from '@angular/core';
import { LoteService } from 'src/app/services/lote.service';
import { MessageService } from 'src/app/services/message.service';
import { Lote } from './../../../models/lote';


@Component({
    selector: 'app-lote-form-cmp',
    templateUrl: 'lote-form.component.html'
})


export class LoteFormComponent implements OnInit {
   
    lote: Lote = {
      nome:        '',
      descricao:         '',
      sexo:               '',
    }

    constructor(
      private service: LoteService,
      private message: MessageService,
    ) { }

  
    ngOnInit() {}

  create() {
  this.service.cadastrarLote(this.lote).subscribe(response => {
    this.message.message('Técnico cadastrado com sucesso!!');
  }, err => {
    this.message.message(err.error.error);
  })
}
}


