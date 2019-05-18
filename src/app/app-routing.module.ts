import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'arena', loadChildren: './arenas/arenas.module#ArenasModule' },
	{ path: 'card', loadChildren: './cards/cards.module#CardsModule' },
	{ path: 'chest', loadChildren: './chests/chests.module#ChestsModule' },
	{ path: 'player', loadChildren: './players/players.module#PlayersModule' },
	{ path: 'league', loadChildren: './leagues/leagues.module#LeaguesModule' },
	{ path: '**', redirectTo: '' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
