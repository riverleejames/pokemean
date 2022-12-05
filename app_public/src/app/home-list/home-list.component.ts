//POKEMON
import { Component, OnInit } from '@angular/core';
import { PokemonDataService } from '../pokemon-data.service';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css']
})

export class PokemonListComponent implements OnInit {
  
  constructor(
    private pokemonDataService: PokemonDataService
    ) { }

    public pokemon: Pokemon[] = [];
    public message: string;


    ngOnInit() {
      this.getAllPokemon();
    }

    private getAllPokemon(): void {
      this.message = 'Gettig all pokemon...';
      this.pokemonDataService
        .getAllPokemon()
        .then((pokemon: Pokemon[]) => (this.pokemon = pokemon))
        .catch((error: Error) => console.log(error));
    }

    public getPokemonById(pokemonId: number): void {
      this.pokemonDataService
        .getPokemonById(pokemonId)
        .then((pokemon: Pokemon) => console.log(pokemon))
        .catch((error: Error) => console.log(error));
    }

    private showError(error: any): void {
      this.message = error.message;
    }
  


  
}