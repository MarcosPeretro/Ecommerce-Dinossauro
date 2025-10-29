import { Component } from '@angular/core';
import { Produto } from '../produto/produto';
import { DinoType } from '../../core/services/dinoService';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-produtos-lista',
  imports: [Produto],
  templateUrl: './produtos-lista.html',
  styleUrl: './produtos-lista.css'
})
export class ProdutosLista {

  protected dinoProducts: Array<DinoType> = [];

  constructor(){
    this.dinoProducts.push(
      {
      id: 1,
      title: "Akilassauro",
      text: "Senhoras e senhores, preparem-se! Se você está procurando segurança, força e presença, o Anquilossauro é o dinossauro perfeito para você! Direto do final do Cretáceo Superior, apresentamos o animal mais blindado que a natureza já produziu",
      price: 10500,
      image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTYuaIGa56-lN4jBqxFodPF1qjE6dtaWQliUb6pgn_w0qaCsoScy8KMKz2jAIfTlq-X45ZurtH5t_IL8JszQm74erUUA4L1_hxiDhxmWlw"
      },
    );
    this.dinoProducts.push(
      {
      id: 2,
      title: "Akilassauro",
      text: "Senhoras e senhores, preparem-se! Se você está procurando segurança, força e presença, o Anquilossauro é o dinossauro perfeito para você! Direto do final do Cretáceo Superior, apresentamos o animal mais blindado que a natureza já produziu",
      price: 10500,
      image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTYuaIGa56-lN4jBqxFodPF1qjE6dtaWQliUb6pgn_w0qaCsoScy8KMKz2jAIfTlq-X45ZurtH5t_IL8JszQm74erUUA4L1_hxiDhxmWlw"
      },
    );
    this.dinoProducts.push(
      {
      id: 3,
      title: "Akilassauro",
      text: "Senhoras e senhores, preparem-se! Se você está procurando segurança, força e presença, o Anquilossauro é o dinossauro perfeito para você! Direto do final do Cretáceo Superior, apresentamos o animal mais blindado que a natureza já produziu",
      price: 10500,
      image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTYuaIGa56-lN4jBqxFodPF1qjE6dtaWQliUb6pgn_w0qaCsoScy8KMKz2jAIfTlq-X45ZurtH5t_IL8JszQm74erUUA4L1_hxiDhxmWlw"
      },
    );
  }
}
