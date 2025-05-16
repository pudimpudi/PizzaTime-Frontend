import { Funcionario } from '/Users/gabrielle.ddutra/PizzaTime-Frontend/src/app/entities/funcionarios';
import { Observable } from 'rxjs';
import { environment } from '/Users/gabrielle.ddutra/PizzaTime-Frontend/src/app/environments/environments';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })
  export class FuncionarioService {
    baseUrl = environment.baseUrl;
  
    constructor(private http: HttpClient) {}
  
    findAllFuncionarios(): Observable<Funcionario[]> {
      return this.http.get<Funcionario[]>(this.baseUrl);
    }

    apagarFuncionario(id: any): Observable<void>{
        const url = `${this.baseUrl}/${id}`
        return this.http.delete<void>(url);
      }
  }
  