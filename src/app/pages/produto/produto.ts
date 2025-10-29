import { Component, Input } from '@angular/core';
import { DinoType } from '../../core/services/dinoService';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-produto',
  imports: [],
  templateUrl: './produto.html',
  styleUrl: './produto.css'
})
export class Produto {
  
  @Input()
  public product!: DinoType;
}
