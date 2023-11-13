import { Item } from 'src/app/interfaces/iItem';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaDeCompraService {

  private listaDeCompra: Item[] = []

  constructor() {
    this.listaDeCompra = JSON.parse(localStorage.getItem('itens') || '[]');
  }

  getListaDeCompra() {
    return this.listaDeCompra;
  }

  adicionarItem(nomeNovoItem: string) {
    const idNovoItem = this.listaDeCompra.length + 1;

    const novoItem: Item = {
      id: idNovoItem,
      nome: nomeNovoItem,
      data: new Date().toLocaleString('pt-br'),
      comprado: false
    }

    this.listaDeCompra.push(novoItem);
    //this.atualizarLocalStorage();
  }

  editarItem(itemAntigo: Item, nomeEditadoItem: string) {
    const itemEditado: Item = {
      id: itemAntigo.id,
      nome: nomeEditadoItem,
      data: itemAntigo.data,
      comprado: itemAntigo.comprado
    }

    this.listaDeCompra.splice(Number(itemAntigo.id) - 1, 1, itemEditado);
    //this.atualizarLocalStorage();
  }

  atualizarLocalStorage(): void {
    localStorage.setItem('itens', JSON.stringify(this.listaDeCompra));
  }

}
