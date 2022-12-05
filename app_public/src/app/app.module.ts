import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PokemonListComponent } from './home-list/home-list.component';
import { PokemonDataService } from './pokemon-data.service';

@NgModule({
  declarations: [
    PokemonListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
    

  ],
  providers: [],
  bootstrap: [PokemonListComponent]
})
export class AppModule { }
