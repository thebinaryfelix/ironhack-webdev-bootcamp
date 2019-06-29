import { Routes, RouterModule } from '@angular/router';
import { MyHomeComponentComponent } from './MyHomeComponent/MyHomeComponent.component';
import { MyMovieComponentComponent } from './MyMovieComponent/MyMovieComponent.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  component: MyHomeComponentComponent },
  { path: 'movie/:id', component: MyMovieComponentComponent }
];

export const MoviesRoutesRoutes = RouterModule.forRoot(routes);
