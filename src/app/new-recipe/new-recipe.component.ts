import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { ReceipeManagerService } from 'src/service/reciepe.service';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css']
})
export class NewRecipeComponent implements OnInit {
  recipesCount = 0;
  recipeForm: FormGroup;
  chef;
  name;
  type;
  image;
  constructor(private router: Router, private recipeManagerService: ReceipeManagerService) { }

  ngOnInit() {
    this.recipesCount = this.recipeManagerService.recipes.length;
    this.recipeForm = new FormGroup({
      name : new FormControl(''),
       imageUrl: new FormControl(''),
       description: new FormControl(''),
       type: new FormControl(''),
       chef: new FormControl(''),
     });
  }

  onHomeClicked() {
    this.router.navigate(['/']);
  }

  onSubmit() {
    this.recipeManagerService.addRecipe({
      index: this.recipesCount,
      name: this.recipeForm.value.name,
      chef: this.recipeForm.value.chef,
      imageUrl: this.recipeForm.value.imageUrl,
      type: this.recipeForm.value.type,
      description: this.recipeForm.value.description
    });
    this.router.navigate(['/recipes']);
  }
}
