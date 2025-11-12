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
   
  }
}
