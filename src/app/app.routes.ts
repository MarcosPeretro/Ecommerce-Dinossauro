import { Routes } from '@angular/router';
import { Menu } from './core/menu/menu';
import { ProdutosLista } from './pages/produtos-lista/produtos-lista';
import { Carrinho } from './pages/carrinho/carrinho';
import { ProdutoForm } from './pages/produto-form/produto-form';
import { ProdutoDetalhes } from './pages/produto-detalhes/produto-detalhes';

export const routes: Routes = [
    {path: 'home', component: Menu },
    {path: 'produtos', component: ProdutosLista },
    {path: 'produto/:id', component: ProdutoDetalhes },
    {path: 'carrinho', component: Carrinho },
    {path: 'cadastro', component: ProdutoForm },
    {path: '', redirectTo: "Menu", pathMatch: "full"},
    {path: '**', redirectTo: "Menu", pathMatch: "full"},
];
