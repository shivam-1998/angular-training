import { Component, OnInit } from '@angular/core';
import { ReceipeManagerService } from 'src/service/reciepe.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipes = [];
  public search = new FormControl('');
  public totalItems;

  constructor(private recipeManagerService: ReceipeManagerService) {

   }

  ngOnInit() {
    this.recipes = this.recipeManagerService.recipes;
    this.totalItems = this.recipes.length;
  }

  onValueChange() {
    this.recipes = this.recipeManagerService.recipes.filter((recipe) => {
      return recipe.name.toLowerCase().indexOf(this.search.value.toLowerCase()) >= 0 ;
    });
    this.totalItems = this.recipes.length;
  }

  removeSearch() {
    this.search.setValue('');
    this.recipes = this.recipeManagerService.recipes;
    this.totalItems = this.recipes.length;
  }
}
