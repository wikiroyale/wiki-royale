import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards/cards.component';
import { CardComponent } from './card/card.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{ path: '', component: CardsComponent },
	{ path: ':cardId', component: CardComponent }
]


@NgModule({
	declarations: [CardsComponent, CardComponent],
	imports: [
		CommonModule,
		RouterModule.forChild(routes)
	]
})
export class CardsModule { }
