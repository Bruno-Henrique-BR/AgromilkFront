import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_CONFIG } from '../config/api.config';
import { Lote } from './../models/lote'

@Injectable({
  providedIn: 'root'
})
export class LoteService {

  constructor(private http: HttpClient) { }

  findById(idLote: any):Observable<Lote> {
    return this.http.get<Lote>(`${API_CONFIG.baseUrl}/lote/${idLote}`);
  }



  listarTodos():Observable<Lote[]> {
    return this.http.get<Lote[]>(`${API_CONFIG.baseUrl}/agromilk/lote`);
  }

  cadastrarLote(lote: Lote):Observable<Lote> {
    return this.http.post<Lote>(`${API_CONFIG.baseUrl}/agromilk/lote`, lote);
  }

  update(lote: Lote):Observable<Lote> {
    return this.http.put<Lote>(`${API_CONFIG.baseUrl}/lote/${lote.idLote}`, lote);
  }
}