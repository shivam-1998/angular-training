import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { log } from 'util';
import { ReceipeManagerService } from 'src/service/reciepe.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-list-cell-component',
  templateUrl: './recipe-list-cell-component.component.html',
  styleUrls: ['./recipe-list-cell-component.component.css']
})
export class RecipeListCellComponentComponent implements OnInit {
  noRecord = false;
  recipe;
  recipes;

  constructor(private recipeSercvice: ReceipeManagerService, private routes: ActivatedRoute) {
  }
  ngOnInit() {
    this.recipes = this.recipeSercvice.recipes;
    this.routes.params.subscribe(async (params) => {
      this.recipe = await this.recipes.find(r => r.index === +params.id);
    });
  }

removeRecipe(getIndex: number) {
    if (confirm('Are sure you want to Remove it?')) {
      this.recipes.splice(getIndex, 1);
      if (this.recipes.length === 0 || this.recipes === null) {
        this.noRecord = true;
      }
    }
  }

  onLikeClicked(index: number, likeCount: number) {
    if (likeCount === 0) {
      this.recipeSercvice.likeRecipe(index);
    } else {
      this.recipeSercvice.disLikeRecipe(index);
    }
  }

}
