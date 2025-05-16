import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 



@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, FormsModule], // ⬅ Adicionar FormsModule aqui
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

// adiconar funções para aceitar upload de imagem
export class AdminComponent {
  produtos = [
    { id: 1, nome: 'Mussarela', categoria: 'Salgada', descricao: 'Mussarela, molho e orégano.', preco: 29.99 },
    { id: 2, nome: 'Frango com Catupiry', categoria: 'Salgada', descricao: 'Frango com catupiry, molho e orégano.', preco: 29.99 },
  ];

  novoProduto = {
    nome: '',
    categoria: '',
    descricao: '',
    preco: 0 // Usando 0 como valor padrão
  };

  adicionarProduto() {
    if (this.novoProduto.preco > 0) {  // Verificação para garantir que o preço é válido
      const nova = { ...this.novoProduto, id: Date.now() };
      this.produtos.push(nova);
      this.novoProduto = { nome: '', categoria: '', descricao: '', preco: 0 };
    } else {
      alert('Por favor, insira um preço válido.');
    }
  }

  editarProduto(produto: any) {
    console.log('Editar produto:', produto);
  }

  excluirProduto(id: number) {
    if (confirm('Tem certeza que deseja excluir o produto?')) {
      this.produtos = this.produtos.filter(p => p.id !== id);
    }
  }
}

