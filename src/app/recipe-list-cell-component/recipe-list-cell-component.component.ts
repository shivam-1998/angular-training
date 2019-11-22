import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { log } from 'util';

@Component({
  selector: 'app-recipe-list-cell-component',
  templateUrl: './recipe-list-cell-component.component.html',
  styleUrls: ['./recipe-list-cell-component.component.css']
})
export class RecipeListCellComponentComponent implements OnInit, OnChanges {
  @Input() recipe;
  recipes = [
    {
      name: 'Veg Spring Roll',
      imageUrl: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      description: 'Lorem ipsum dolor sit, amet consectetur',
      type: 'Veg',
      chef: 'Bhushan Vasa',
    },
    {
      name: 'Non-veg Spring Roll',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFalPDNgqbkaMqF55mcwrzSouHbiOQcDT0cQAefpC68DdLOJ_o&s',
      description: 'Lorem ipsum dolor sit, amet consectetur',
      type: 'Non-Veg',
      chef: 'Shivam Brahmbhatt',
    },
    {
      name: 'barbeque',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuIU532eq2I6EmITdt3aFkHU1gHyARJxw_nlteOl-DdOubtBnV&s',
      description: 'Lorem ipsum dolor sit, amet consectetur',
      type: 'Non-Veg',
      chef: 'Jay Sojitra',
    },
  ];
  constructor() { }
  ngOnInit() {
  }
  ngOnChanges() {
    if (this.recipe) {
      this.recipes.push(this.recipe);
      alert('New Recipe Added');
    }
  }
  removeRecipe(getIndex){
   if(confirm('Are sure you want to Remove it?')){
     this.recipes.splice(getIndex,1);
   }
  }
}
