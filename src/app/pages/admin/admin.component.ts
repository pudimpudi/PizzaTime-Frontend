import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // ⬅ Importar aqui
import { createGunzip } from 'node:zlib';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, FormsModule], // ⬅ Adicionar FormsModule aqui
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

// adiconar funções para aceitar upload de imagem
export class AdminComponent {
  pizzas = [
    { id: 1, nome: 'Mussarela', categoria: 'Pizza', descricao: 'Mussarela, molho e orégano.', preco: 29.99 },
    { id: 2, nome: 'Frango com Catupiry', categoria: 'Pizza', descricao: 'Frango com catupiry, molho e orégano.', preco: 29.99 },
  ];

  novaPizza = {
    nome: '',
    categoria: '',
    descricao: '',
    preco: 0 // Usando 0 como valor padrão
  };

  adicionarPizza() {
    if (this.novaPizza.preco > 0) {  // Verificação para garantir que o preço é válido
      const nova = { ...this.novaPizza, id: Date.now() };
      this.pizzas.push(nova);
      this.novaPizza = { nome: '', categoria: '', descricao: '', preco: 0 };
    } else {
      alert('Por favor, insira um preço válido.');
    }
  }

  editarPizza(pizza: any) {
    console.log('Editar pizza:', pizza);
  }

  excluirPizza(id: number) {
    if (confirm('Tem certeza que deseja excluir esta pizza?')) {
      this.pizzas = this.pizzas.filter(p => p.id !== id);
    }
  }
}

