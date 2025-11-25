import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { DinoType } from '../services/dinoService';
import { CartService } from '../services/cartService';

@Component({
  selector: 'app-menu',
  imports: [RouterLink],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class Menu {

  public dinoQtd: number = 0;
  protected cartActive: boolean = false;

  constructor(private cartService: CartService){
    this.cartService.cartItemsHasChanged().subscribe((products: Array<DinoType>) => {
      this.dinoQtd = products.length;
    })
  }

  protected showCart(){
    this.cartActive = !this.cartActive
  }
}
