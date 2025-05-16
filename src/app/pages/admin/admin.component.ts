import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { Produtos } from '../../entities/produtos';
import { ProdutoService } from '../../services/produto.service';


@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, FormsModule], // ⬅ Adicionar FormsModule aqui
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

// adiconar funções para aceitar upload de imagem
export class AdminComponent implements OnInit {
  novoProduto: Produtos = {
    nome:'',
    categoria:'',
    descricao:'',
    preco:0
  }

  produtos: Produtos [] = [];

  constructor(private produtoService: ProdutoService){}

  ngOnInit(): void {
    this.carregarProdutos();
  }

  carregarProdutos(): void {
    this.produtoService.findAllProdutos().subscribe(produtos => {
      this.produtos =  produtos;
    })
  }

  adicionarProdutos(): void {
    const formData = new FormData();
    formData.append('nome', this.novoProduto.nome);
    formData.append('categoria', this.novoProduto.categoria);
    formData.append('descricao', this.novoProduto.descricao);
    formData.append('preco', this.novoProduto.preco.toString());

    this.produtoService.adicionarProduto(formData).subscribe(() => {
      this.carregarProdutos();
      this.novoProduto = {
        nome: '',
        categoria: '',
        descricao: '',
        preco: 0
      };
    })
  }
}

