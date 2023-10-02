import { Injectable } from '@angular/core';
import { Recipe } from '../model/recipe';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  readonly DB_URL = "https://651a7a98340309952f0d59f5.mockapi.io/recipe"
  constructor(private http:HttpClient) { }

  getAllRecipes():Observable<Recipe[]>{
    return this.http.get<Recipe[]>(this.DB_URL)
  }

  getRecipe(recipeId: string):Observable<Recipe>{
    return this.http.get<Recipe>(this.DB_URL + '/' + recipeId)
  }

  postRecipe(newRecipe: Recipe):Observable<Recipe>{
    return this.http.post<Recipe>(this.DB_URL, newRecipe,{headers: {'content-type':'application/json'}})

  }
}
