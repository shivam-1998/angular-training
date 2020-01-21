import { Component, OnInit, OnChanges } from '@angular/core';
import { ReceipeManagerService } from 'src/service/reciepe.service';
import { element } from 'protractor';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnChanges {
  ngOnChanges() {
    if (this.recepie.recipes.length === 0) {
      this.Nodata = true;
    }
  }
  likedRecepie = [];
  Nodata = false;
  constructor(private recepie: ReceipeManagerService) { }

  ngOnInit() {
    this.recepie.recipes.forEach(element => {
      if (element.like > 0) {
        this.likedRecepie.push(element);
      }
    });
  }

}
