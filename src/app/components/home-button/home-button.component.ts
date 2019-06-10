import { Component, OnInit, Input } from '@angular/core';
import { HomeButtonData } from './../../models/home-button';

@Component({
	selector: 'app-home-button',
	templateUrl: './home-button.component.html',
	styleUrls: ['./home-button.component.css']
})
export class HomeButtonComponent implements OnInit {

	@Input('data') data: HomeButtonData

	constructor() { }

	ngOnInit() {
	}

}
