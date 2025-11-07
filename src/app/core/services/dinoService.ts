import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DinoService {
  
  private productsSubject: BehaviorSubject<Array<ProductOnCartType>> = new BehaviorSubject<Array<ProductOnCartType>>([]);

  public getProducts(): Observable<Array<DinoType>> {
    return this.productsSubject.asObservable();
  }

  public getProductById(id: number): any{
    const products = this.productsSubject.getValue();
    return products.find((item: DinoType) => item.id == id);
  }

  public deleteProductById(id: number): any{
    const products = this.productsSubject.getValue().filter((item: DinoType) => item.id != id);
    this.productsSubject.next(products);
  }

  public addProduct(value: Partial<DinoType>){
    let maxId = 0;
    const products = this.productsSubject.getValue();
    products.forEach((el) => {
      if (el.id > maxId) {
        maxId = el.id;
      }
    });

    value.id = maxId+1;
    products.push(value as DinoType);
    this.productsSubject.next(products);
      
  } 
}

  export interface DinoType{
  id: number;
  title: string;
  text: string;
  price: number;
  image: string;
  }

  export interface ProductOnCartType extends DinoType {
  quantity?: number;
  observations?: string;
}
