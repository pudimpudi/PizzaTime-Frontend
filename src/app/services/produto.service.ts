import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environments';
import { Produtos } from '../entities/produtos'

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient){}

  findAllProdutos(): Observable<Produtos[]>{
    return this.http.get<Produtos[]>(this.baseUrl);
  }

  apagarProduto(id: any): Observable<void> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<void>(url);
  }
}
