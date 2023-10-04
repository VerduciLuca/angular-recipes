import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from 'src/app/services/data.service';
import { CardComponent } from '../components/card/card.component';
import { DishType, Recipe } from 'src/app/model/recipe';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { NgFor } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-recipes-list',
  standalone: true,
  imports: [CommonModule,
    CardComponent, MatFormFieldModule, MatSelectModule, NgFor, MatInputModule, FormsModule],
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent {

  allRecipes: Recipe[] = []

  selectedCategory: string = '-1'

  recipes: Recipe[] = [];

  categories = Object.entries(DishType).slice(Object.entries(DishType).length/2);

  constructor(private dataServ: DataService) { }
  ngOnInit(): void {
    this.dataServ.getAllRecipes().subscribe(recipes => {
      this.recipes = recipes,
      this.allRecipes = recipes
    })
  }

  categoryChanged() {
    if (this.selectedCategory === '-1') {
      this.recipes = this.allRecipes
    } else {
      const categoryNumber = parseInt(this.selectedCategory)
      console.log(categoryNumber);

      this.recipes = this.allRecipes.filter(recipe => recipe.category === categoryNumber)
      console.log(this.recipes);

    }
  }
}
