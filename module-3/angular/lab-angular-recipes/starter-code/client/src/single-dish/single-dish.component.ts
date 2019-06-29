import { Component, OnInit } from "@angular/core";
import { RecipesService } from "recipes.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs/Observable";

@Component({
  selector: "app-single-dish",
  templateUrl: "./single-dish.component.html",
  styleUrls: ["./single-dish.component.css"]
})
export class SingleDishComponent implements OnInit {
  dish: any;
  ingredients: Observable<any>;

  constructor(
    route: ActivatedRoute,
    public router: Router,
    private recipesService: RecipesService
  ) {
    route.params.subscribe(params => {
      recipesService.getDish(params.id).subscribe(dish => {
        this.dish = dish;
      });
    });
    recipesService.getIngredients().subscribe(items => {
      this.ingredients = items;
    });
  }

  addIngredient(dishId, id, quantity) {    
    this.recipesService.addIngredient(dishId, id, quantity).subscribe();
  }

  ngOnInit() {}
}
