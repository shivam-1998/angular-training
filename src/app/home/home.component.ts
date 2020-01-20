import { Component, OnInit } from '@angular/core';
import { ReceipeManagerService } from 'src/service/reciepe.service';
import { element } from 'protractor';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  likedRecepie = [];
  constructor(private recepie: ReceipeManagerService) { }

  ngOnInit() {
    this.recepie.recipes.forEach(element => {
      if (element.like > 0) {
        this.likedRecepie.push(element);
      }
    });
    console.log(this.likedRecepie);

  }

}
