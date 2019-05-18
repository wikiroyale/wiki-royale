import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayersComponent } from './players/players.component';
import { PlayerComponent } from './player/player.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{ path: '', component: PlayersComponent },
	{ path: ':playerId', component: PlayerComponent }
]

@NgModule({
	declarations: [PlayersComponent, PlayerComponent],
	imports: [
		CommonModule,
		RouterModule.forChild(routes)
	]
})
export class PlayersModule { }
