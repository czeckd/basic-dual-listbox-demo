import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styles: [ '.container { margin-top: 12px; }' ]
})
export class AppComponent {
	source = [ 'Pawn', 'Rook', 'Knight', 'Bishop', 'Queen', 'King' ];
	target = [];
}
