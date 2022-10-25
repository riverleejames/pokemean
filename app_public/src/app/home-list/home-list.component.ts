import { Component, OnInit } from '@angular/core';
import { PokemonDataService } from '../pokemon-data.service';

export class Pokemon {
  id!: number;
  name!: string;
  type!: string;
  image!: string;
  flavor_text!: string;
}

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css']
})

export class HomeListComponent implements OnInit {

  constructor(private PokemonDataService: PokemonDataService) { }

  public pokemon: Pokemon[];

  private getAllPokemon(): void {
    this.PokemonDataService
      .getAllPokemon()
      .then((pokemon: Pokemon[]) => {
        this.pokemon = pokemon.map((pokemon: Pokemon) => {
          return pokemon;
        });
      })
      .catch((error: any) => {
        console.log(error);
      });
  }

  ngOnInit(): void {
  }

}
