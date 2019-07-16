import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  public posts = [
    {
      name: 'Gabriela De La Rosa',
      id:1,
      description: 'Excelente publicadora, de libros me maraville con su trabajo',
      img: "http://cdn.gomusicaonline.com/artists/c/carla-mauri/carla-mauri-2.jpg",
      rank: 4
    },
    {
      name: 'Delia Macias',
      id:2,
      description: 'Una persona que defiende su trabajo le gusta generar nuevas ideas.',
      img: 'http://cdn.sonicomusica.net/artists/m/marina-maximilian/marina-maximilian-2.jpg',
      rank: 5
    },
    {
      name: 'Socorro Garcia Gómez',
      id:3,
      description: 'Se considera una buena mujer, respetuosa y generosa.',
      img: 'https://res.cloudinary.com/emazecom/image/fetch/c_limit,a_ignore,w_160,h_160/https%3A%2F%2Fuserscontent2.emaze.com%2Fimages%2F08bbf69a-add0-45af-9bc4-c4b2ab35839e%2F91c4270271a041070b4b9ce3a90d6f9e.png',
      rank: 1
    }

  ];
  
  constructor() { }
}
