import { Clan } from './clan';
import { Chest } from './chest';
import { League } from './league';

export class Arena {
	_id: string;
	idName: string;
	number: number;
	name: string;
	victoryGold: number;
	minTrophies: number;
	order: number;
	__v: number;
	leagues: League[];
	cardUnlocks: string[];
	chests: Chest[];
	clan: Clan;
}
