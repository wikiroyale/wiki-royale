import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ArenasComponent } from './arenas/arenas.component';
import { ArenaComponent } from './arena/arena.component';

const routes: Routes = [
	{ path: '', component: ArenasComponent },
	{ path: ':arenaId', component: ArenaComponent }
]

@NgModule({
	declarations: [ArenasComponent, ArenaComponent],
	imports: [
		CommonModule,
		RouterModule.forChild(routes)
	]
})
export class ArenasModule { }
