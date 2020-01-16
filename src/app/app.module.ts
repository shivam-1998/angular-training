import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeListCellComponentComponent } from './recipe-list-cell-component/recipe-list-cell-component.component';
import { HighlightDirective } from './highlight.directive';
import { ReceipeManagerService } from 'src/service/reciepe.service';
import { LoggingService } from 'src/service/logging.service';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';
import { RecipesComponent } from './recipes/recipes.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeListCellComponentComponent,
    HighlightDirective,
    NewRecipeComponent,
    RecipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [LoggingService, ReceipeManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
