import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AnavarathanComponent } from './anavarathan/anavarathan.component';

@NgModule({
  declarations: [
    AppComponent,
    AnavarathanComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
