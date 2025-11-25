import { Component } from '@angular/core';
import { Produto } from '../produto/produto';
import { DinoService, DinoType } from '../../core/services/dinoService';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-produtos-lista',
  imports: [Produto],
  templateUrl: './produtos-lista.html',
  styleUrl: './produtos-lista.css'
})
export class ProdutosLista {

  protected dinoProducts: Array<DinoType> = [];

  constructor(private dinoService: DinoService){
   this.loadData();

   this.dinoService.productsMustBeReloaded().subscribe(() => {
    this.loadData();
   })
  }

  private loadData() {
    this.dinoService.getAll().subscribe((dino: Array<DinoType>) =>  {
      this.dinoProducts = dino;
    });
  }
}
