import { Routes } from '@angular/router';
import { Menu } from './core/menu/menu';
import { ProdutosLista } from './pages/produtos-lista/produtos-lista';
import { Carrinho } from './pages/carrinho/carrinho';

export const routes: Routes = [
    {path: 'home', component: Menu },
    {path: 'produtos', component: ProdutosLista },
    {path: 'carrinho', component: Carrinho },
    {path: '', redirectTo: "Menu", pathMatch: "full"},
    {path: '**', redirectTo: "Menu", pathMatch: "full"},
];
