import { MainEntrarComponent } from './src/components/pages/entrar/main-entrar/main-entrar.component';
import { MainComponent } from './src/components/pages/main/main-telaInicial/main.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainRevistasComponent } from './src/components/pages/revistas/main-revistas/main-revistas.component';

const routes: Routes = [
   {path: '', component: MainComponent },
   {path: 'revistas', component: MainRevistasComponent},
   {path: 'entrar', component: MainEntrarComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
