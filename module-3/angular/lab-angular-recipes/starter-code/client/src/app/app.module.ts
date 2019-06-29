import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { DishesComponent } from '../dishes/dishes.component';
import { RouterModule } from '@angular/router';
import { routes } from './RecipesRoutes.routing';
import { RecipesService } from 'recipes.service';
import { SingleDishComponent } from '../single-dish/single-dish.component';

@NgModule({
  declarations: [
    AppComponent,
    DishesComponent,
    SingleDishComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [RecipesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
