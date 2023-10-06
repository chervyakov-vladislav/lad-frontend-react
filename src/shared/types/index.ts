type JSONPrimitive = number | string | boolean | null;
type JSONObject = {
  [k: string]: JSONAny;
};
type JSONArray = JSONAny[];

export type JSONAny = JSONPrimitive | JSONObject | JSONArray;

export interface KeyWordSearchInterface {
  films: ITopFilm[];
  keyword: string;
  pageCount: number;
  searchFilmsCountResult: number;
}

export interface ITopFilm {
  countries: Countries[];
  desctiption: string;
  filmId: number;
  filmLength: string;
  genres: Genres[];
  nameRu: string;
  nameEn: string;
  posterUrl: string;
  posterUrlPreview: string;
  rating: string;
  ratingVoteCount: number;
  year: string;
  type: string;
}

export interface Countries {
  country: string;
}

export interface Genres {
  genre: string;
}

export type ITopData = Omit<KeyWordSearchInterface, 'searchFilmsCountResult' | 'keyword'>;
