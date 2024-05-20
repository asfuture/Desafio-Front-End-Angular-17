
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { BlocoList, CardsList } from '../interface/card-bloco';



@Injectable({
  providedIn: 'root'
})
export class BlocoService {
  private readonly API = 'https://api.magicthegathering.io/v1';


  private valorCode:any;
  setValor(novoValor: any) {
    this.valorCode = novoValor;
  }

  getValor() {
    return this.valorCode;
  }
  

  constructor(private httpClient: HttpClient) { }

  buscarConjuntos(blocos: string[]): Observable<BlocoList[]> {
    const blocosConcatenados = blocos.join('|');
    const params = new HttpParams().set('name', blocosConcatenados);
    return this.httpClient.get<BlocoList>(`${this.API}/sets`, { params }).pipe(
      map(response => this.extractSets(response))
    );
  }

  private extractSets(response: any): BlocoList[] {
    if (response && response.sets && Array.isArray(response.sets)) {
      return response.sets.map((set: BlocoList) => ({
        code:set.code,
        name: set.name,
        block: set.block,
        releaseDate: set.releaseDate
      }));
    } else {
      console.error('Resposta da API não contém os conjuntos de cartas esperados:', response);
      throw new Error('A resposta da API não está no formato esperado.');
    }
  }
  

  buscarCartasColecao(valorCode:any): Observable<CardsList[]> {
    return this.httpClient.get<CardsList>(`${this.API}/sets/${valorCode}/booster`).pipe(
      map(response => this.extractCreatureCards(response)),
    );
  }

  

  private extractCreatureCards(response: any): CardsList[] {
    const creatureCards: any[] = [];
  
    // Verifica se a resposta contém as cartas
    if (response && Array.isArray(response.cards)) {
      const allCards = response.cards;
  
      // Filtra as cartas do tipo "creature"
      const creatureCardsFiltered = allCards.filter((card: any) => {
        return card.types && card.types.includes('creature');
      });
  
      // Limita o número de cartas do tipo "creature" a 30
      creatureCards.push(...creatureCardsFiltered.slice(0, 30));
    }
  
    return creatureCards;
  }
  
}

