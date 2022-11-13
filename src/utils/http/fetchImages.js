import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const URL = 'https://pixabay.com/api/';
const API_KEY = '29730166-90781f613c54edfa0d110c161';

// key - твій унікальний ключ доступу до API.
// q - термін для пошуку. Те, що буде вводити користувач.
// image_type - тип зображення. На потрібні тільки фотографії, тому постав значення photo.
// orientation - орієнтація фотографії. Постав значення horizontal.

// webformatURL - посилання на маленьке зображення для списку карток.
// largeImageURL - посилання на велике зображення.

// Fetch images by name
class Pixabay {
  hits = 0;
  images = [];
  numPages = 1;
  currentPage = 1;

  constructor() {
    this.param = new URLSearchParams({
      key: API_KEY,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 12,
      q: '',
      page: 1,
    });
  }

  fetchImagesByName = async (name = '', page = 1) => {
    this.param.set('q', name);
    this.param.set('page', page);
    this.currentPage = page;

    try {
      const response = await axios.get(`${URL}?${this.param.toString()}`);

      if (response.status !== 200) {
        Notify.failure(response.status);
      }

      if (response.data === undefined) {
        Notify.failure('Incorrect data');
      }

      // Get JSON of pictures
      this.images = response.data.hits;

      // Number of images
      this.hits = response.data.totalHits;

      // Number of pages
      this.numPages = Math.ceil(this.hits / this.param.get('per_page'));
      
    } catch (error) {
      Notify.failure(error);
    }
  };
}

export { Pixabay };
