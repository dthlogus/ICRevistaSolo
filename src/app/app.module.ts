import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './src/components/template/header/header.component';
import { NavComponent } from './src/components/template/nav/nav.component';
import { BotaoContaComponent } from './src/components/template/botao-conta/botao-conta.component';
import { CarrosselComponent } from './src/components/pages/main/carrossel/carrossel.component';
import { MainComponent } from './src/components/pages/main/main/main.component';
import { UltimasNoticasCardComponent } from './src/components/pages/main/ultimas-noticas-card/ultimas-noticas-card.component';
import { PaginaPrincipalMainComponent } from './src/components/pages/main/pagina-ultimas-noticias/pagina-principal-main.component';
import { CuriosidadesComponent } from './src/components/pages/main/curiosidades/curiosidades.component';
import { CuriosidadesCardComponent } from './src/components/pages/main/curiosidades-card/curiosidades-card.component';
import { FooterComponent } from './src/components/template/footer/footer.component';

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
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
