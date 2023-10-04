
import {Component, Input} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { Recipe } from "src/app/model/recipe";
import { CategoryToStringPipe } from "../../pipes/category-to-string.pipe";
import { MatIconModule } from '@angular/material/icon';
import { RepeatDirective } from 'src/app/directives/repeat.directive';


@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
    standalone: true,
    imports: [MatCardModule, MatButtonModule, RouterModule, CategoryToStringPipe, MatIconModule, RepeatDirective]
})
export class CardComponent {
  @Input() recipe?: Recipe;
}
