import { Component, OnInit } from '@angular/core';
import { Noticia } from '../../../../../../model/noticia.model';

@Component({
  selector: 'app-ultimas-noticas-card',
  templateUrl: './ultimas-noticas-card.component.html',
  styleUrls: ['./ultimas-noticas-card.component.css'],
})
export class UltimasNoticasCardComponent implements OnInit {
  noticias: Noticia = {
    img: 'assets/image/main/robo.jpg',
    titulo: 'Lorem Ipsum',
    descricao:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ipsum orci, mattis ' +
      'at nibh non, bibendum posuere justo. Aenean nec aliquam arcu, in placerat metus. ',
  };

  constructor() {}

  ngOnInit(): void {}
}
