import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMovie, IMovieResult } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(private httpClient: HttpClient) {}
  static apiKey = 'd416af5d4faee64e25ab001d87aab5c3';

  getMovies() : Observable<IMovieResult> {
    return this.httpClient.get<IMovieResult>(`https://api.themoviedb.org/3/movie/popular?api_key=${MovieService.apiKey}`);
  }

  getPopularMovies() : Promise<IMovieResult> {
    return (this.httpClient.get(`https://api.themoviedb.org/3/movie/popular?api_key=${MovieService.apiKey}`).toPromise() as Promise<IMovieResult>);
  }

  getMovieDetail(id : number) : Promise<IMovie> {
    return (this.httpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${MovieService.apiKey}`).toPromise() as Promise<IMovie>);
  }
}
