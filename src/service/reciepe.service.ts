import { Recipe } from 'src/app/recipe';
import { Injectable } from '@angular/core';

@Injectable()
export class ReceipeManagerService {
    public recipes = [
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
          name: 'Barbeque',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuIU532eq2I6EmITdt3aFkHU1gHyARJxw_nlteOl-DdOubtBnV&s',
          description: 'Lorem ipsum dolor sit, amet consectetur',
          type: 'Non-Veg',
          chef: 'Jay Sojitra',
        },
      ];

      addRecipe(recipe: any) {
        this.recipes.push(recipe);
      }

      getRecipe(id: number) {
        return this.recipes[id];
      }
}
