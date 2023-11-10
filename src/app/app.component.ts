import { Component, OnInit } from '@angular/core';
import { Item } from './interfaces/iItem';
import { ListaDeCompraService } from './service/lista-de-compra.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app-lista-de-compras';

  listaDeCompras!: Array<Item>;
  itemParaEditar!: Item;

  constructor(private listaService: ListaDeCompraService) { }

  ngOnInit(): void {
   this.listaDeCompras = this.listaService.getListaDeCompra();
  }

  editarItem(item: Item){
    this.itemParaEditar = item;
  }

}
