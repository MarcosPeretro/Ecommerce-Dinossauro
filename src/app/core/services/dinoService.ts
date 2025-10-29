import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DinoService {
  
}

export interface DinoType{
  id: number;
  title: string;
  text: string;
  price: number;
  image: string;
}
