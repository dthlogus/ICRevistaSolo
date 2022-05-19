import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-botao-conta',
  templateUrl: './botao-conta.component.html',
  styleUrls: ['./botao-conta.component.css']
})
export class BotaoContaComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  entrar(){
    this.route.navigate(['entrar'])
  }

}
