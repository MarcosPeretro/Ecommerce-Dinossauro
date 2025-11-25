import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class DinoService {
  private productsMustBeReloadedSubject: Subject<boolean> = new Subject();

  constructor(private http: HttpClient, private router: Router) { }

  public reloadProductList() {
    this.productsMustBeReloadedSubject.next(true);
  }

  public productsMustBeReloaded(): Observable<boolean> {
    return this.productsMustBeReloadedSubject.asObservable();
  }
  
  public getAll(): Observable<any> {
    return this.http.get('http://localhost:3000/dinoProduto');
  }

  public get(id: string): any {
    return this.http.get(`http://localhost:3000/dinoProduto/${id}`);
  }

  public delete(id: number): any {
    return this.http.delete(`http://localhost:3000/dinoProduto/${id}`);
  }

  public addDino(value: Partial<DinoType>) {
    this.getAll().subscribe((products) => {
      let maxId = 0;
      products.forEach((element: any) => {
        if (element.id > maxId) {
          maxId = element.id;
        }
      });
      maxId = maxId + 1;

      value.id = `${maxId}`;
      this.http.post("http://localhost:3000/dinoProduto", value).subscribe(() => {
        alert("Produto inserido!");
        this.reloadProductList(); 
        this.router.navigate(["/dinoProduto"]);
      })
    });
  }

  public updateDino(value: DinoType){
    this.http.put(`http://localhost:3000/dinoProduto/${value.id}`, value).subscribe(() => {
      alert("Produto alterado!");
      this.reloadProductList();
      this.router.navigate(["/produtos"])
    })
  }
  
}

export interface DinoType {
  id: string;
  title: string;
  text: string;
  price: number;
  image: string;
}

export interface ProductOnCartType extends DinoType {
  quantity?: number;
  observations?: string;
}
