import { Component, OnInit } from '@angular/core';
import { IMovie } from 'src/app/services/interfaces';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies: IMovie[] = [];
  listedMovies: IMovie[] = [];

  constructor(private movieService: MovieService) { }

  filterMovie(name: string) {
    console.log('filterMovie', name)
    const results = this.movies.filter(m => m.title.startsWith(name));
    if (results.length > 0) {
      this.listedMovies = results;
    } else {
      this.listedMovies = this.movies;
    }
  }

  ngOnInit(): void {
    this.movieService.getMovies().subscribe(data => {
      this.movies = data.results;
    })
  }

}
