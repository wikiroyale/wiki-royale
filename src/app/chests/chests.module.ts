import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChestsComponent } from './chests/chests.component';
import { ChestComponent } from './chest/chest.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{ path: '', component: ChestsComponent },
	{ path: ':chestId', component: ChestComponent }
]

@NgModule({
	declarations: [ChestsComponent, ChestComponent],
	imports: [
		CommonModule,
		RouterModule.forChild(routes)
	]
})
export class ChestsModule { }
