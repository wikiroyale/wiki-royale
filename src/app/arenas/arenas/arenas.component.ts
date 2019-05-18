import { Component, OnInit } from '@angular/core';
import { ArenaService } from 'src/app/services/arena.service';
import { Arena } from 'src/app/models/arena';

@Component({
	selector: 'app-arenas',
	templateUrl: './arenas.component.html',
	styleUrls: ['./arenas.component.css']
})
export class ArenasComponent implements OnInit {

	loading: boolean = false
	arenas: Arena[] = []

	constructor(
		private arenaService: ArenaService
	) { }

	ngOnInit() {
		this.loading = true
		this.arenaService.findAll().subscribe(
			(data: Arena[]) => {
				this.loading = false
				this.arenas = data
			},
			err => {
				console.log(err)
			}
		)
	}

}
