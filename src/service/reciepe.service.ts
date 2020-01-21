import { Recipe } from 'src/app/recipe';
import { Injectable } from '@angular/core';

@Injectable()
export class ReceipeManagerService {
    public recipes = [
        {
          index: 0,
          name: 'Veg Spring Roll',
          imageUrl: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac enim et tortor gravida rhoncus. Cras non ante vel diam blandit tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam sit amet sodales arcu. Aliquam erat volutpat. Nunc vehicula iaculis est, id egestas nisl laoreet quis. Donec faucibus maximus tellus.',
          type: 'Veg',
          chef: 'Bhushan Vasa',
          like: 0
        },
        {
          index: 1,
          name: 'Non-veg Spring Roll',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFalPDNgqbkaMqF55mcwrzSouHbiOQcDT0cQAefpC68DdLOJ_o&s',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac enim et tortor gravida rhoncus. Cras non ante vel diam blandit tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam sit amet sodales arcu. Aliquam erat volutpat. Nunc vehicula iaculis est, id egestas nisl laoreet quis. Donec faucibus maximus tellus.',
          type: 'Non-Veg',
          chef: 'Shivam Brahmbhatt',
          like: 1
        },
        {
          index: 2,
          name: 'Barbeque',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuIU532eq2I6EmITdt3aFkHU1gHyARJxw_nlteOl-DdOubtBnV&s',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac enim et tortor gravida rhoncus. Cras non ante vel diam blandit tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam sit amet sodales arcu. Aliquam erat volutpat. Nunc vehicula iaculis est, id egestas nisl laoreet quis. Donec faucibus maximus tellus.',
          type: 'Non-Veg',
          chef: 'Jay Sojitra',
          like: 0
        },
      ];

      addRecipe(recipe: any) {
        this.recipes.push(recipe);
      }

      getRecipe(id: number) {
        return this.recipes[id];
      }

      likeRecipe(id: number) {
        this.recipes[id].like += 1;
      }

      disLikeRecipe(id: number) {
        this.recipes[id].like -= 1;
      }
}
