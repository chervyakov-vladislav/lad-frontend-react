### Поисковик фильмов

#### Что реализовано

- хедер с поисковой строкой, реализация поиска с debounce и возможностью прерывать соединение при новом запросе
- верстка главной страницы с выводом рекомендаций и лушчих фильмов
- при нажатии на заголовки списков вы можете перейти на страницу с полным списком фильмов, не ней реализован бесконечный скролл
- при нажатии на на карточку фильма, вы переходите на страницу фильма
- добавлена простая регистрация и авторизация через firebase

#### Как запустить

- deploy https://comfy-semolina-749fd7.netlify.app/
- api docs https://kinopoiskapiunofficial.tech/

- запуск проекта локально

```js
   git clone https://github.com/chervyakov-vladislav/lad-frontend-react.git .
   npm i -> npm run dev
```
#### Используемые технологии

- Typescript
- React
- Redux-toolkit
- React-router-dom
- Feature-Sliced Design architecture
- axios
- scss
- css modules
- functional components
- React hooks
- Custom hooks
- adaptive layout
- vite
- eslint