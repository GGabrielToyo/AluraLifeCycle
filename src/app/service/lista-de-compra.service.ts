import { Item } from 'src/app/interfaces/iItem';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaDeCompraService {

  private listaDeCompra: Item[] = [
    {
      "id": 1,
      "nome": "Queijo prato",
      "data": "Segunda-feira (31/10/2022) às 08:30",
      "comprado": false
    },
    {
      "id": 2,
      "nome": "Leite integral",
      "data": "Segunda-feira (31/10/2022) às 08:30",
      "comprado": false
    },
    {
      "id": 3,
      "nome": "Mamão papaia",
      "data": "Segunda-feira (31/10/2022) às 08:30",
      "comprado": true
    },
  ]

  constructor() {
    console.log('Instanciando dependências necessárias para o serviço.');
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
  }

  editarItem(itemAntigo: Item, nomeEditadoItem: string) {
    const itemEditado: Item = {
      id: itemAntigo.id,
      nome: nomeEditadoItem,
      data: itemAntigo.data,
      comprado: itemAntigo.comprado
    }

    this.listaDeCompra.splice(Number(itemAntigo.id) - 1, 1, itemEditado);
  }

}
