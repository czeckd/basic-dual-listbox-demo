import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html'
})
export class AppComponent {
	source = [ 'Pawn', 'Rook', 'Knight', 'Bishop', 'Queen', 'King' ];
	target = [];
}
