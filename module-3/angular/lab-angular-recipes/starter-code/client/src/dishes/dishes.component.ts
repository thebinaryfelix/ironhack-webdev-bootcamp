import { Component, OnInit } from "@angular/core";
import { RecipesService } from "recipes.service";
import { Observable } from "rxjs/Observable";



@Component({
  selector: "app-dishes",
  templateUrl: "./dishes.component.html",
  styleUrls: ["./dishes.component.css"]
})
export class DishesComponent implements OnInit {
  dishes$: Observable<any>;

  constructor(recipesService: RecipesService) {
    recipesService.getDishes().subscribe(dishes => {
      this.dishes$ = dishes;
    });
  }

  ngOnInit() {}
}
