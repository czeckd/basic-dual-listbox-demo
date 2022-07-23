import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularDualListBoxModule } from 'angular-dual-listbox';

import { AppComponent } from './app.component';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AngularDualListBoxModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
