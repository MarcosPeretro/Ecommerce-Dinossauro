import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { DinoService } from '../services/dinoService';

@Component({
  selector: 'app-menu',
  imports: [RouterLink],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class Menu {

  public dinoQtd: number = 0;
  protected cartActive: boolean = false;

  constructor(private dinoService: DinoService){
    this.dinoService.
  }

  protected showCart(){
    this.cart
  }
}
