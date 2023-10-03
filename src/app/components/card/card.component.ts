
import {Component, Input} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { Recipe } from "src/app/model/recipe";
import { CategoryToStringPipe } from "../../pipes/category-to-string.pipe";


@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
    standalone: true,
    imports: [MatCardModule, MatButtonModule, RouterModule, CategoryToStringPipe]
})
export class CardComponent {
  @Input() recipe?: Recipe;
}
