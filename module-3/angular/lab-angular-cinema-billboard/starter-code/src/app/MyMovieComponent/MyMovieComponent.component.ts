import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-MyMovieComponent',
  templateUrl: './MyMovieComponent.component.html',
  styleUrls: ['./MyMovieComponent.component.css'],
  providers: [MoviesService]
})
export class MyMovieComponentComponent implements OnInit {

  movie: Object;

  constructor(private route: ActivatedRoute, private MoviesService: MoviesService) { }

  ngOnInit() {
    this.route.params
      .subscribe((params) => this.movie = this.MoviesService.getMovie(Number(params['id'])));
    }
}
