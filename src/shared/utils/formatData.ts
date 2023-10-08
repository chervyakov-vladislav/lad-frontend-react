import { Countries, Genres } from '@/shared/types/index';

export function getEngnameYearTotalTime(nameEn = '', year = '', filmLength = '') {
  const result: string[] = [];
  if (nameEn) result.push(nameEn);
  if (year && year !== 'null') result.push(`${year} год`);
  if (filmLength) {
    const time = analyzeTime(filmLength);
    result.push(time);
  }
  if (result.length === 1) {
    return result[0];
  }
  return result.length > 1 ? result.join(', ') : '';
}

function analyzeTime(value: string) {
  const [hours, mins] = value.split(':');
  const numHours = parseInt(hours, 10);
  const numMins = parseInt(mins, 10);
  return numHours > 0 ? `${numHours} ч. ${numMins} мин.` : `${numMins} мин.`;
}

export function getTypeCountry(type: string, countries: Countries[]) {
  const result: string[] = [];
  if (type) {
    const res = analyzeType(type);
    result.push(res);
  }
  if (countries) {
    const res = analyzeCountries(countries);
    result.push(res);
  }
  return result.length > 0 ? result.join(', ') : '';
}

function analyzeType(value: string) {
  const showType: Record<string, string> = {
    FILM: 'Фильм',
    TV_SHOW: 'Тв-шоу',
    TV_SERIES: 'Cериал',
    MINI_SERIES: 'Мини-сериал',
    VIDEO: 'Видео',
  };
  return showType[value];
}

function analyzeCountries(countries: Countries[]) {
  if (countries.length === 1) return countries[0].country;
  if (countries.length === 0) return '';
  const result = countries.map((item) => item.country);
  return result.join(', ');
}

export function isNameRU(nameRu: string, nameEn: string) {
  const isNameRu = nameRu ? nameRu : nameEn;
  const isName = isNameRu.length > 0 ? isNameRu : '-';
  return isName;
}

export function getGenres(genres: Genres[]) {
  if (genres.length === 1) return genres[0].genre;
  if (genres.length === 0) return '';
  const result = genres.map((item) => item.genre);
  return result.join(', ');
}

export function getRating(rating: string) {
  if (Number.isNaN(rating)) return '0';
  return rating === 'null' ? '0' : rating;
}
