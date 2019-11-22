import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // @Output data = new EventEmitter<any>();
  data;
  title = 'SA kitchen';
  displayRecipe(event: any){
    this.data = event
    // console.log(this.data);
  }

}
