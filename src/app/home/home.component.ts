import { Component, OnInit } from '@angular/core';
import { HomeButtonData } from '../models/home-button';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	buttons: HomeButtonData[] = [
		{ title:'Arenas' , route: 'arena', imageLink: 'http://www.clashapi.xyz/images/arenas/training-camp.png'},
		{ title:'Cards' , route: 'card', imageLink: 'http://www.clashapi.xyz/images/ui/deck.png'},
		{ title:'Chests' , route: 'chest', imageLink: 'http://www.clashapi.xyz/images/chests/classic-challenge-chest.png'},
		{ title:'Players' , route: 'player', imageLink: 'http://www.clashapi.xyz/images/ui/social.png'},
		{ title:'Leagues' , route: 'league', imageLink: 'http://www.clashapi.xyz/images/ui/tournament.png'}
	]

	constructor() { }

	ngOnInit() {
	}

}
