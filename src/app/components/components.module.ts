import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeButtonComponent } from './home-button/home-button.component';
import { ArenaListItemComponent } from './arena-list-item/arena-list-item.component';

@NgModule({
	declarations: [HomeButtonComponent, ArenaListItemComponent],
	imports: [
		CommonModule
	],
	exports: [
		HomeButtonComponent,
		ArenaListItemComponent
	]
})
export class ComponentsModule { }
