import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaguesComponent } from './leagues/leagues.component';
import { LeagueComponent } from './league/league.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{ path: '', component: LeaguesComponent },
	{ path: ':leagueId', component: LeagueComponent }
]


@NgModule({
  declarations: [LeaguesComponent, LeagueComponent],
  imports: [
	CommonModule,
	RouterModule.forChild(routes)
  ]
})
export class LeaguesModule { }
