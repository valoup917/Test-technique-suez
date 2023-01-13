import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NaxosComponent } from './naxos/naxos.component';
import { TakerComponent } from './taker/taker.component';
import { AreaComponent } from './area/area.component';
import { MovieComponent } from './movie/movie.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'naxos', component: NaxosComponent},
  {path: 'taker', component: TakerComponent},
  {path: 'area', component: AreaComponent},
  {path: 'movie', component: MovieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
