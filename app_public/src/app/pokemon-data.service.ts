// Get pokemon data from my api at localhost:3000

import { Injectable, Inject } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Pokemon } from './pokemon';



@Injectable({
  providedIn: 'root'
})

export class PokemonDataService {

  constructor(
    private http: HttpClient,
  ) { }

  private apiBaseUrl = 'http://localhost:3000/api';

  public getAllPokemon() {
    const url = `${this.apiBaseUrl}/pokemon`;
    return this.http
      .get(url)
      .toPromise()
      .then(response => response as Pokemon[])
      .catch(this.handleError);
  }

  public getPokemonById(pokemonId: number): Promise<Pokemon> {
    const url = `${this.apiBaseUrl}/pokeinfo/${pokemonId}`;
    return this.http
      .get(url)
      .toPromise()
      .then(response => response as Pokemon)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}