import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-lateral',
  standalone: true,
  templateUrl: './menu-lateral.component.html',
  styleUrl: './menu-lateral.component.css'
})
export class MenuLateralComponent implements OnInit {
  role: string | null = null;

  ngOnInit(): void {
      const usuario = localStorage.getItem('usuario');
      if(usuario){
        this.role = JSON.parse(usuario).role;
      }
  }

  isFuncionario(): boolean {
    return this.role === 'funcionario';
  }

}
