import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Item } from 'src/app/interfaces/iItem';
import { ListaDeCompraService } from 'src/app/service/lista-de-compra.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit, OnChanges {

  @Input() itemParaEditar!: Item;
  editando!: boolean;
  textoBtn!: string;

  nomeNovoItem!: string;

  constructor(private listaService: ListaDeCompraService) { }

  ngOnInit(): void { 
    this.textoBtn = "Salvar Item"
    this.editando = false;
  }

  ngOnChanges(changes: SimpleChanges) {
    this.editando = true;
    this.textoBtn = 'Editar Item';
    if (!changes['itemParaEditar'].firstChange) {
      this.nomeNovoItem = this.itemParaEditar.nome;
    }
  }

  adicionarItem() {
    if (this.nomeNovoItem) {
      this.listaService.adicionarItem(this.nomeNovoItem);
    }
    this.limparCampo();
  }

  editarItem() {
    this.listaService.editarItem(this.itemParaEditar, this.nomeNovoItem);
    this.limparCampo();
    this.editando = false;
    this.textoBtn = "Salvar item";
  }

  limparCampo(): void {
    this.nomeNovoItem = '';
  }
}
