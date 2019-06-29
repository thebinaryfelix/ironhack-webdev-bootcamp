import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../movies.service';

@Component({
  selector: 'app-MyHomeComponent',
  templateUrl: './MyHomeComponent.component.html',
  styleUrls: ['./MyHomeComponent.component.css'],
  providers: [MoviesService]
})
export class MyHomeComponentComponent implements OnInit {

  moviesList: Array<Object> = [];

  constructor(private MoviesService: MoviesService) { }

  ngOnInit() {
    this.moviesList = this.MoviesService.getMovies();
  }

}
