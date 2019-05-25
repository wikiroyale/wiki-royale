import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ArenasComponent } from './arenas/arenas.component';
import { ArenaComponent } from './arena/arena.component';
import { HttpClientModule } from '@angular/common/http'
import { ArenaService } from '../services/arena.service';
import { ComponentsModule } from '../components/components.module';
import { AppTranslationModule } from '../app-translation/app-translation.module';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [
	{ path: '', component: ArenasComponent },
	{ path: ':arenaId', component: ArenaComponent }
]

@NgModule({
	declarations: [ArenasComponent, ArenaComponent],
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
		HttpClientModule,
		ComponentsModule,
		TranslateModule
	],
	providers: [
		ArenaService
	]
})
export class ArenasModule { }
