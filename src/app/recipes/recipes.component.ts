import { Component, OnInit } from '@angular/core';
import { ReceipeManagerService } from 'src/service/reciepe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipes = [];
  constructor(private recipeManagerService: ReceipeManagerService) {

   }

  ngOnInit() {
    this.recipes = this.recipeManagerService.recipes;
  }

  onAddNewClicked() {

  }
}
