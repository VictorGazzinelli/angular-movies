import { Component, Input, OnInit } from '@angular/core';
import { IMovie } from 'src/app/services/interfaces';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {

  @Input()
  get movie(): IMovie { return this._movie; }
  set movie(movie: IMovie ) {this._movie = movie;}
  private _movie : IMovie = {
    id: 0,
    genre_ids: [],
    overview: '',
    poster_path: null,
    title: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

}
