import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeButtonComponent } from './home-button/home-button.component';
import { ArenaListItemComponent } from './arena-list-item/arena-list-item.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
	declarations: [HomeButtonComponent, ArenaListItemComponent],
	imports: [
		CommonModule,
		TranslateModule
	],
	exports: [
		HomeButtonComponent,
		ArenaListItemComponent
	]
})
export class ComponentsModule { }
