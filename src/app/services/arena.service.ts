import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Arena } from '../models/arena';
import { Observable } from 'rxjs';

@Injectable()
export class ArenaService {

	private context: string = 'arenas'

	constructor(
		private httpClient: HttpClient
	) { }

	findAll(): Observable<Arena[]> {
		let url = `https://acervo-astral-cors-proxy.herokuapp.com/` + environment.api + this.context
		return this.httpClient.get<Arena[]>(url)
	}
}
