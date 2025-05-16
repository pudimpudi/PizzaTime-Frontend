import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Funcionario } from '../../entities/funcionarios';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent implements OnInit {
  list: Funcionario[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  findAllFuncionarios() {


}
