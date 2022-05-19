import { Component, OnInit } from '@angular/core';
import { Noticia } from '../../../../../../model/noticia.model';

@Component({
  selector: 'app-curiosidades-card',
  templateUrl: './curiosidades-card.component.html',
  styleUrls: ['./curiosidades-card.component.css'],
})
export class CuriosidadesCardComponent implements OnInit {
  noticias: Noticia = {
    img: 'assets/image/main/robo.jpg',
    titulo: 'Lorem Ipsum',
    descricao:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ipsum orci, mattis.',
  };

  constructor() {}

  ngOnInit(): void {}
}
