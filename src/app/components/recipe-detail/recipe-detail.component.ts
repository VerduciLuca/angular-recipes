import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';
import { Recipe } from "src/app/model/recipe";


@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

  recipe?: Recipe

  constructor(private dataServ: DataService,private route: ActivatedRoute){}

  ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id')
      if (id) {
        this.dataServ.getRecipe(id).subscribe(recipe => this.recipe= recipe)
      }
  }
}
