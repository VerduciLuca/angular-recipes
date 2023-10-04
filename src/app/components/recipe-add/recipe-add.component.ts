import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from 'src/app/services/data.service';
import { DishType, Recipe } from 'src/app/model/recipe';
import { MatFormFieldModule  } from "@angular/material/form-field";
import { MatInputModule } from '@angular/material/input';



@Component({
  selector: 'app-recipe-add',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule  ],
  templateUrl: './recipe-add.component.html',
  styleUrls: ['./recipe-add.component.scss']
})
export class RecipeAddComponent {
  constructor(private dataServ: DataService){}

  newRecipe: Recipe = {
    name: '',
    ingredients: [],
    description: '',
    url: '',
    createdAt: 0,
    category: DishType.secondo,
    rating: 0
  }


  submitRecipe(){
    console.log('ahia');
    // const newRecipe: Recipe = {}
    // this.dataServ.postRecipe(newRecipe).subscribe(addedRecipe => console.log(addedRecipe))
  }
}
