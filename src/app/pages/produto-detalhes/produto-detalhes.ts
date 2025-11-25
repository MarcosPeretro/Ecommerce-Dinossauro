import { Component } from '@angular/core';
import { DinoService, DinoType } from '../../core/services/dinoService';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../core/services/cartService';

@Component({
  selector: 'app-produto-detalhes',
  imports: [ReactiveFormsModule],
  templateUrl: './produto-detalhes.html',
  styleUrl: './produto-detalhes.css'
})
export class ProdutoDetalhes {
  private dinoId!: string;
  protected dino!: DinoType;
  protected formGroup: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private dinoService: DinoService,
    private cartService: CartService,
    private formBuilder: FormBuilder
  ){
    this.dinoId = this.route.snapshot.paramMap.get('id') || '';
    this.dinoService.get(this.dinoId).subscribe((result: DinoType) =>{
      this.dino = result;
    });

    this.formGroup = this.formBuilder.group({
      quantity: ['1'],
      observations: ['teste', Validators.required],
    });

    // this.formGroup.valueChanges.subscribe((value) => {
    //   console.log(value)
    // });

    // this.formGroup.get('quantity')?.valueChanges.subscribe((value) => {
    //   console.log('Quantity changed:', value);
    //   if (value < 1) {
    //     this.formGroup.get('observations')?.disable();
    //   } else {
    //     this.formGroup.get('observations')?.enable();
    //   }
    // });
  }

  addToCart(){
    if (this.formGroup.invalid) {
      alert('Por favor, preencha os campos corretamente')
      return;
    }

    this.cartService.addItem({
      ...this.dino,
      ...this.formGroup.value
    })
  }

  more(){
    let qtd = this.formGroup.get('quantity')?.value || 0;
    this.formGroup.get('quantity')?.setValue(parseInt(qtd) + 1);
  }

  less(){
    let qtd = this.formGroup.get('quantity')?.value || 0;
    this.formGroup.get('quantity')?.setValue(Math.max(parseInt(qtd) - 1, 0));
  }
}
