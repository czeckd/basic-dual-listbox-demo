import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	source = [ 'Pawn', 'Rook', 'Knight', 'Bishop', 'Queen', 'King' ];
	target = [];
}
