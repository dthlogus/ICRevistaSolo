import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-entrar',
  templateUrl: './main-entrar.component.html',
  styleUrls: ['./main-entrar.component.css']
})
export class MainEntrarComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  back(){
    this.route.navigate(['']);
  }

}
