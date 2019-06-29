![Ironhack logo](https://i.imgur.com/1QgrNNw.png)

# Angular 2 & Express API | MyRecipeBook

## Introduction

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_ae5fdf4b7208a8a09e24e30e6824860f.jpg)

Cooking is hard, but you know what's harder? Remembering recipes. Remember that one time you made that amazing dish and forgot what ingredients go into it? It's a terrible feeling.

In this exercise, we'll make an application to keep track of your favorite recipes so you never have this disappointing experience again.

This application can apply to food or dishes, so feel free to alter the language accordingly.

## Requirements

- [Fork this repo](https://guides.github.com/activities/forking/)
- Clone this repo into your `~/code/labs`
- Include both the client and server applications in your submission.

## Submission

- Upon completion, run the following commands

```
git add .
git commit -m "done"
git push origin master
```

- Navigate to your repo and [create a Pull Request](https://help.github.com/articles/creating-a-pull-request/)

## Exercise

### Iteration 1 | Listing Recipes

We've provided an API that has an endpoint of `/api/dishes`. This endpoint will return a list of recipes that we've seeded in the database. A recipe has a `name`, `image`, and `description`.

Create a new *service* to retrieve all of the dishes from the server.

In addition, create a *component* that uses this service to display a list of all of your recipes. It should display the `name` and `image` attributes.

### Iteration 2 | Show One Recipe & Routing

Setup the Angular router.

When navigating to the home(`/`) route, display the list of dishes.

In addition, create a route and component for a single recipe's details page.

This component will display all of the recipe's details, `name`, `image`, and `description`.

Create a link on the home page to navigate to the details page, and a link in the details page to navigate home.

### Iteration 3 | List *All* Ingredients

We've created a recipe and a description, but we're missing one important piece: *ingredients*.

Over the next two iterations, we're going to add functionality to add ingredients to our dishes.

The first step in doing so is going to be displaying a list of possible ingredients on the recipe's page.

We've created an API endpoint for all ingredients, `/api/ingredients`. Create a new service for ingredients to make a request to this endpoint.

In the **dish details component**, list all of these ingredients. Add a button to each ingredient called *add*. We will use this to add ingredients to a particular dish in the next iteration. In addition, for each ingredient add an input box for the _quantity_.


### Iteration 4 | Add Ingredient to Dish

Create a function in the single dish component. When someone clicks the "add" button from the previous iteration, this should make an API request to the API.

The request should be done inside of your dish service.

The API endpoint is a POST to `'/api/dishes/:dishId/ingredients/:id/add'`. It also takes in a parameter for `quantity` in the body, which is a number.

Add a list of a dish's ingredients to the single dish component. Upon successfully adding the ingredient to the dish, display the ingredient in the list. A dish's ingredients are sent from the API in the following manner:

```
dish = {
  // ...
  ingredients: [
    {
      ingredientId: { name: "Olive Oil" },
      quantity: 1
    },
  ]
}
```

### Bonus | Creating New Ingredients & Dishes

Create a new route for adding new dishes. Add a link in the home page to display a form. This form will make a POST request to `/api/dishes` with a `name`, `image`, and `description`.

In addition, create a route on the home page to display a form to create a new ingredient. The route is a POST to `/api/ingredients`, and takes a `name` in the body.
