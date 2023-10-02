import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from 'src/app/services/data.service';
import { CardComponent } from '../components/card/card.component';
import { Recipe } from 'src/app/model/recipe';

@Component({
  selector: 'app-recipes-list',
  standalone: true,
  imports: [CommonModule,
  CardComponent,],
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent {

  recipes: Recipe[] = [];
  constructor (private dataServ: DataService){}
  ngOnInit(): void{
    this.dataServ.getAllRecipes().subscribe(recipes => this.recipes=recipes)
  }
}
