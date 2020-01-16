import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListCellComponentComponent } from './recipe-list-cell-component/recipe-list-cell-component.component';

const routes: Routes = [
  { path: '', component: RecipesComponent},
  { path: 'add-new', component: NewRecipeComponent },
  { path: 'recipes', component: RecipesComponent,
    children: [ { path: ':id', component: RecipeListCellComponentComponent }]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
