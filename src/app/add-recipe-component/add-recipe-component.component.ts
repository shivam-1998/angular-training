import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-add-recipe-component',
  templateUrl: './add-recipe-component.component.html',
  styleUrls: ['./add-recipe-component.component.css']
})
export class AddRecipeComponentComponent implements OnInit {
  @Output() valueChange = new EventEmitter();
  recipeForm: FormGroup;
  constructor() { }
recipeData = [];
  ngOnInit() {
    this.recipeForm = new FormGroup({
     name : new FormControl(''),
      imageUrl: new FormControl(''),
      description: new FormControl(''),
      type: new FormControl(''),
      chef: new FormControl(''),
    });
  }

  onSubmit() {
    // this.recipeData = [...this.recipeForm.value];
    // this.recipeData.push(this.recipeForm.value);
    this.valueChange.emit(this.recipeForm.value);
    // console.log(this.recipeData); 

    // console.log(this.valueChange); 
  }

}
