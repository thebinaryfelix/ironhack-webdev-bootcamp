import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MoviesRoutesRoutes} from './MoviesRoutes.routing';

import { AppComponent } from './app.component';
import { MyHomeComponentComponent } from './MyHomeComponent/MyHomeComponent.component';
import { MyMovieComponentComponent } from './MyMovieComponent/MyMovieComponent.component';

@NgModule({
  declarations: [
    AppComponent,
    MyHomeComponentComponent,
    MyMovieComponentComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MoviesRoutesRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
