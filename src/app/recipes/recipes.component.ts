import { Component, OnInit } from '@angular/core';
import { ReceipeManagerService } from 'src/service/reciepe.service';
import { FormControl } from '@angular/forms';

import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipes = [];
  recipe = {};
  recipeList = [];
  noRecord = false;
  public search = new FormControl('');
  public totalItems;
  public currentRecipe;

  constructor(private recipeManagerService: ReceipeManagerService, private recipeSercvice: ReceipeManagerService, private route: Router , private routes: ActivatedRoute) {

  }

  ngOnInit() {
    this.recipes = this.recipeManagerService.recipes;
    this.totalItems = this.recipes.length;
    if (this.recipes.length === 0 || this.recipes === null) {
      this.noRecord = true;
    }
    this.currentRecipe = this.recipes[0];
  }

  onValueChange() {
    this.recipes = this.recipeManagerService.recipes.filter((recipe) => {
      return recipe.name.toLowerCase().indexOf(this.search.value.toLowerCase()) >= 0;
    });
    this.totalItems = this.recipes.length;
  }

  removeSearch() {
    this.search.setValue('');
    this.recipes = this.recipeManagerService.recipes;
    this.totalItems = this.recipes.length;
  }

  removeRecipe(getIndex: number) {
    if (confirm('Are sure you want to Remove it?')) {
      this.recipes.splice(getIndex, 1);
      if (this.recipes.length === 0 || this.recipes === null) {
        this.noRecord = true;
      }
    }
  }

  recipeDetail(reciepe) {
    this.route.navigate(['recipes', reciepe.index]);
  }
}
