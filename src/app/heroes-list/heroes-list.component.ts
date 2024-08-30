import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Hero } from '../type.component';

@Component({
  selector: 'app-heroes-list',
  standalone: true,
  imports: [],
  templateUrl: './heroes-list.component.html',
  styleUrl: './heroes-list.component.less'
})
export class HeroesListComponent {
 
  @Input({required:true}) hero!:Hero;

  
 
}
