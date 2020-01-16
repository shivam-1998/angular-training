import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { log } from 'util';
import { ReceipeManagerService } from 'src/service/reciepe.service';

@Component({
  selector: 'app-recipe-list-cell-component',
  templateUrl: './recipe-list-cell-component.component.html',
  styleUrls: ['./recipe-list-cell-component.component.css']
})
export class RecipeListCellComponentComponent implements OnInit {
  noRecord = false;
  @Input() recipe;
  recipes;

  constructor(private recipeSercvice: ReceipeManagerService) {
  }
  ngOnInit() {
    this.recipes = this.recipeSercvice.recipes;
    if (this.recipes.length === 0 || this.recipes === null) {
      this.noRecord = true;
    }
  }

  removeRecipe(getIndex) {
    if (confirm('Are sure you want to Remove it?')) {
      this.recipes.splice(getIndex, 1);
      if (this.recipes.length === 0 || this.recipes === null) {
        this.noRecord = true;
      }
    }
  }
}
