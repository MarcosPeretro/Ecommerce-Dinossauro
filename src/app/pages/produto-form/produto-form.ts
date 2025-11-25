import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DinoService } from '../../core/services/dinoService';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produto-form',
  imports: [ReactiveFormsModule],
  templateUrl: './produto-form.html',
  styleUrl: './produto-form.css'
})
export class ProdutoForm implements OnInit {
  protected formGroup!: FormGroup;
  private produtoId!: string;
  protected isUpdatedMode: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private dinoService: DinoService,
    private route: ActivatedRoute
  ){}
  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      title: ['', Validators.required],
      text: ['', Validators.required],
      price: ['', Validators.required],
      image: ['', Validators.required],
    });

    this.produtoId = this.route.snapshot.paramMap.get('id') || '';

    this.initUpdate();
  }

  private initUpdate(){
    if (this.produtoId) {
      this.dinoService.get(this.produtoId).subscribe((dino: any) =>  {
        this.isUpdatedMode = true;
        this.formGroup.patchValue(dino)
      })
    }
  }

  public onSubmit(){
    const value = this.formGroup.value;

    if (this.formGroup.valid) {
      alert("Preencha os campos");
      return;
    }

    if (this.isUpdatedMode) {
      value.id = this.produtoId;
      this.dinoService.updateDino(value);
    }else{
      this.dinoService.addDino(value);
    }
  }
    
  
}
