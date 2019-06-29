import { Injectable } from '@angular/core';
import { Movie } from './Movie';
import { moviesList } from '../sample-movies';

@Injectable()
export class MoviesService {
  moviesArray: Array<Movie> = [];

  movie: Object;

  constructor() {
    this.moviesArray = moviesList;
  }

  getMovies() {
    return this.moviesArray;
  }

  getMovie(id) {
    return this.moviesArray.filter(e => e.id == id)[0];
  }
}
