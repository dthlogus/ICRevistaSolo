import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './src/components/template/header/header.component';
import { NavComponent } from './src/components/template/nav/nav.component';
import { BotaoContaComponent } from './src/components/template/botao-conta/botao-conta.component';
import { CarrosselComponent } from './src/components/pages/main/carrossel/carrossel.component';
import { MainComponent } from './src/components/pages/main/main-telaInicial/main.component';
import { UltimasNoticasCardComponent } from './src/components/pages/main/ultimas-noticas-card/ultimas-noticas-card.component';
import { PaginaPrincipalMainComponent } from './src/components/pages/main/pagina-ultimas-noticias/pagina-principal-main.component';
import { CuriosidadesComponent } from './src/components/pages/main/curiosidades/curiosidades.component';
import { CuriosidadesCardComponent } from './src/components/pages/main/curiosidades-card/curiosidades-card.component';
import { FooterComponent } from './src/components/template/footer/footer.component';
import { MainRevistasComponent } from './src/components/pages/revistas/main-revistas/main-revistas.component';
import { MainEntrarComponent } from './src/components/pages/entrar/main-entrar/main-entrar.component';
import { RouterModule } from '@angular/router';
import { CadastroComponent } from './src/components/pages/cadastro/cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    BotaoContaComponent,
    CarrosselComponent,
    MainComponent,
    UltimasNoticasCardComponent,
    CuriosidadesComponent,
    CuriosidadesCardComponent,
    PaginaPrincipalMainComponent,
    FooterComponent,
    MainRevistasComponent,
    MainEntrarComponent,
    CadastroComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
