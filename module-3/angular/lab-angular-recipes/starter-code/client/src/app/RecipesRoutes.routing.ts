import { Routes, RouterModule } from '@angular/router';
import { DishesComponent } from 'dishes/dishes.component';
import { SingleDishComponent } from 'single-dish/single-dish.component';



export const routes: Routes = [
  { path: '', component: DishesComponent},
  { path: 'single-dish/:id', component: SingleDishComponent }
];
