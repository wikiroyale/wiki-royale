import { Component, OnInit, Input } from '@angular/core';
import { Arena } from './../../models/arena';

@Component({
	selector: 'app-arena-list-item',
	templateUrl: './arena-list-item.component.html',
	styleUrls: ['./arena-list-item.component.css']
})
export class ArenaListItemComponent implements OnInit {

	@Input('arena') arena: Arena

	constructor() { }

	ngOnInit() {
	}

}
