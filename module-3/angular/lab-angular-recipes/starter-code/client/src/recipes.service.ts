import { Injectable } from "@angular/core";
import "rxjs";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Rx";

@Injectable()
export class RecipesService {
  BASE_URL = "http://localhost:3000";
  constructor(private http: Http) {}

  getDishes() {
    return this.http.get(`${this.BASE_URL}/api/dishes`).map(res => res.json());
  }

  getDish(id) {
    return this.http
      .get(`${this.BASE_URL}/api/dishes/${id}`)
      .map(res => res.json());
  }

  getIngredients() {
    return this.http
      .get(`${this.BASE_URL}/api/ingredients`)
      .map(res => res.json());
  }

  addIngredient(dishId, id, quantity) {
    return this.http
      .post(`${this.BASE_URL}/api/dishes/${dishId}/ingredients/${id}/add`, {
        quantity
      })
      .map(res => {
        res.json();
      });
  }
}
