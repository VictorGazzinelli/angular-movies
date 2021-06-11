export interface IMovie {
  poster_path : string | null,
  overview : string,
  id: number,
  genre_ids: number[],
  title: string,
}

export interface IMovieResult{
  results: IMovie[]
}