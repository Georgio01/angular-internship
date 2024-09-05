import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CrisisListComponent } from "./crisis-list/crisis-list.component";
import { HeroesListComponent } from "./heroes-list/heroes-list.component";
import { NewTaskComponent } from './task/new-task/new-task.component';
import { TaskComponent } from './task/task.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CrisisListComponent, HeroesListComponent,NewTaskComponent,TaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'angular-internship';
}
